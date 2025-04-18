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
        <div className="title flex justify-between">
          <h2 className="text-lg font-semibold text-gray-900 truncate max-w-1/2">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            {publishedDate === 0 ? "오늘" : `${publishedDate}일차`}
          </p>
        </div>
        <div className="mt-2">
          {" "}
          {/* 간격을 위해 margin-top 추가 */}
          <ul className="tag">
            {multiSelect.map((select) => (
              <TagTip key={select.id} select={select} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
