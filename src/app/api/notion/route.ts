import { notion } from "@/utils/notion";

export async function GET (){
    const databaseId = process.env.NOTION_DB_ID;
  try {
    if(databaseId) return Response.json({message:"Database_Id 가 없습니다."});
    const response = await notion.databases.query({ database_id: databaseId! });
    return Response.json(response);
  } catch (error) {
    return Response.json(error);
  }
}