// app/(pageId)/page.tsx

import { NotionPage } from "@/components/Notion/NotionPage";
import { rootNotionPageId } from "@/utils/notion/config";
import { getPage } from "@/utils/notion/notion-api";
import { notFound } from "next/navigation";

interface PageProps {
  params: { pageId: string };
}

export async function generateStaticParams() {
  // 정적으로 생성할 pageId 목록을 반환합니다.
  return [
    { pageId: "examplePageId1" },
    { pageId: "examplePageId2" },
    // 추가적인 pageId를 여기에 추가
  ];
}

export default async function Page({ params }: PageProps) {
  const pageId = params.pageId || rootNotionPageId;
  let recordMap;

  try {
    recordMap = await getPage(pageId!);
  } catch (error) {
    console.error("Notion 페이지를 불러오는 중 에러 발생:", error);
    notFound();
  }

  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
