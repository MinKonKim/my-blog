import { notion } from "@/utils/notion";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("id");

  if (!pageId) {
    return NextResponse.json(
      { error: "pageId가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return NextResponse.json(response);
  } catch (error) {
    console.error("Notion 페이지 조회 중 오류 발생:", error);
    return NextResponse.json(
      { error: "페이지를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
};
