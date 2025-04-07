import { notion } from "@/utils/notion/notion";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json(
      { error: "pageId가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    // 페이지 메타데이터 가져오기
    const pageMetadata = await notion.pages.retrieve({ page_id: pageId });

    // 페이지 콘텐츠 가져오기
    const pageContent = await notion.blocks.children.list({
      block_id: pageId,
    });

    return NextResponse.json({
      metadata: pageMetadata,
      content: pageContent,
    });
  } catch (error) {
    console.error("Notion 페이지 조회 중 오류 발생:", error);
    return NextResponse.json(
      { error: "페이지를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
};
