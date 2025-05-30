type NotionColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "gray"
  | "brown";

export interface CategoryType {
  id: string;
  name: string;
  color: NotionColor;
}

export type DBTag = {
  color: string;
  id: string;
  name: string;
};
