// app/api/notion/database/route.ts
import { NextRequest, NextResponse } from "next/server";
import { notion } from "@/utils/notion/notion";

export async function GET(request: NextRequest) {
  const databaseId = process.env.NOTION_DB_ID;
  const { searchParams } = new URL(request.url);
  const number = parseInt(searchParams.get("number") || "", 10);
  const tag = searchParams.get("filter");

  if (!databaseId) {
    return NextResponse.json(
      { message: "Database ID가 없습니다." },
      { status: 500 }
    );
  }

  try {
    const filters = tag
      ? {
          property: "categories",
          multi_select: { contains: tag },
        }
      : undefined;

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: filters,
      sorts: [{ timestamp: "created_time", direction: "descending" }],
      page_size: !isNaN(number) ? Math.min(number, 100) : undefined,
    });

    return NextResponse.json(response.results);
  } catch (err) {
    return NextResponse.json(
      {
        message: "데이터를 가져오는 중 오류가 발생했습니다.",
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
