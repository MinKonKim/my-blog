import ky from "ky";
import lqip from "lqip-modern";
import {
  type ExtendedRecordMap,
  type PreviewImage,
  type PreviewImageMap,
} from "notion-types";
import { defaultMapImageUrl, getPageImageUrls } from "notion-utils";
import pMap from "p-map";
import pMemoize from "p-memoize";

// PreviewImageMap 생성 함수
export async function getPreviewImageMap(
  recordMap: ExtendedRecordMap
): Promise<PreviewImageMap> {
  const urls: string[] = getPageImageUrls(recordMap, {
    mapImageUrl: defaultMapImageUrl,
  });

  const previewImages = await pMap(
    urls,
    async (url): Promise<[string, PreviewImage | null]> => {
      const result = await getPreviewImage(url);
      return [url, result];
    },
    { concurrency: 8 }
  );

  return Object.fromEntries(previewImages);
}

// 프리뷰 이미지 생성 함수
async function createPreviewImage(url: string): Promise<PreviewImage | null> {
  try {
    const response = await ky(url);
    const body = await response.arrayBuffer();
    const result = await lqip(body);

    if (!result || !result.metadata) {
      throw new Error("LQIP 결과 없음");
    }

    const { originalWidth, originalHeight, dataURIBase64 } = result.metadata;

    return {
      originalWidth,
      originalHeight,
      dataURIBase64,
    };
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      err.message === "Input buffer contains unsupported image format"
    ) {
      return null;
    }

    console.warn("프리뷰 이미지 생성 실패:", url, (err as Error).message);
    return null;
  }
}

// 메모이즈된 프리뷰 이미지 생성기
export const getPreviewImage = pMemoize(createPreviewImage);
