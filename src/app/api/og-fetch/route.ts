import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL이 필요합니다." }, { status: 400 });
  }

  try {
    const res = await fetch(url, { cache: "no-cache" });
    const html = await res.text();
    const dom = new JSDOM(html);

    const previewData = {
      title:
        dom.window.document.querySelector("meta[property='og:title']")
          ?.textContent || "제목 없음",
      description:
        dom.window.document.querySelector("meta[property='og:description']")
          ?.textContent || "설명 없음",
      image:
        dom.window.document.querySelector("meta[property='og:image']")
          ?.textContent || "/default-thumbnail.jpg",
    };

    return NextResponse.json(previewData);
  } catch (error) {
    return NextResponse.json(
      { message: "미리보기를 가져오는 중 오류 발생", error },
      { status: 500 }
    );
  }
}
