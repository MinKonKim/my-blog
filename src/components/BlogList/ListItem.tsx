import { CategoryType } from "@/types/NotionDB";
import Image from "next/image";
import React from "react";

const notionColorToTailwind = {
  red: "bg-red-300",
  orange: "bg-orange-300",
  yellow: "bg-yellow-300",
  green: "bg-green-300",
  blue: "bg-blue-300",
  purple: "bg-purple-300",
  pink: "bg-pink-300",
  gray: "bg-gray-300",
  brown: "bg-yellow-800", // Tailwind에는 brown이 없으므로 유사한 색상 사용
};

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
          {multiSelect.map((select) => {
            const bgColor = notionColorToTailwind[select.color] || "gray-300";
            return (
              <div
                key={select.id}
                className={`inline-block ${bgColor} text-black text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2 flex justify-center items-center`}
              >
                {select.name}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListItem;
