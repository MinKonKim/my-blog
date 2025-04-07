import { notion } from "@/utils/notion/notion";

export async function GET() {
  const databaseId = process.env.NOTION_DB_ID;
  try {
    if (!databaseId)
      return Response.json({ message: "Database_Id 가 없습니다." });
    const response = await notion.databases.query({ database_id: databaseId! });
    return Response.json(response.results);
  } catch (error) {
    return Response.json(error);
  }
}
