import { NotionAPI } from "notion-client";

const notionUser = process.env.NOTION_USER_ID;
const notionTokenv2 = process.env.NOTION_TOKEN_V2;

export const notionApi = new NotionAPI({
  activeUser: notionUser,
  authToken: notionTokenv2,
});

export async function getPage(id: string) {
  const response = await notionApi.getPage(id);

  return response;
}
