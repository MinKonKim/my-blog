import { notion } from "@/utils/notion/notion";

export const GET = async (request: Request) => {
  const databaseId = process.env.NOTION_DB_ID;
  const { searchParams } = new URL(request.url);
  const numberParam = searchParams.get("number");
  const number = numberParam ? parseInt(numberParam, 10) : undefined;

  try {
    if (!databaseId) {
      return Response.json({ message: "Database_Id 가 없습니다." });
    }

    const pageSize = number && number > 0 ? Math.min(number, 100) : undefined;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
      page_size: pageSize,
    });

    return Response.json(response.results);
  } catch (error) {
    return Response.json({
      message: "데이터를 가져오는 중 오류가 발생했습니다.",
      error,
    });
  }
};
