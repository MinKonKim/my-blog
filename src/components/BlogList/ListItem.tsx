import { CategoryType } from "@/types/NotionDB";
import Image from "next/image";
import React from "react";
import TagTip from "./TagTip";

interface ListItemProps {
  title: string;
  publishedDate: number;
  url?: string;
  multiSelect: CategoryType[];
}

const ListItem = ({
  title,
  publishedDate,
  url,
  multiSelect,
}: ListItemProps) => {
  return (
    <div>
      {url && <Image alt="미리보기" width={100} height={100} src={url} />}
      <div className="p-4 bg-white/60 backdrop-blur-md rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">
            {publishedDate === 0 ? "오늘" : `${publishedDate}일차`}
          </p>
        </div>
        <ul>
          {multiSelect.map((select) => (
            <TagTip key={select.id} select={select} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListItem;
