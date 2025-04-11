"use client";

import { usePostTagStore } from "@/stores/usePostTagStore";
import { CategoryType } from "@/types/NotionDB";
import React, { useEffect } from "react";
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

const TagTip = ({ select }: { select: CategoryType }) => {
  const bgColor = notionColorToTailwind[select.color] || "gray-300";
  const addItem = usePostTagStore((state) => state.addItem);

  useEffect(() => {
    addItem(select.name);
  }, []);

  return (
    <div
      className={`inline-block ${bgColor} text-black text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2 flex justify-center items-center`}
    >
      {select.name}
    </div>
  );
};

export default TagTip;
