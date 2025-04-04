import React from "react";

interface ListItemProps {
  title: string;
  publishedDate: number;
}

const ListItem = ({ title, publishedDate }: ListItemProps) => {
  return (
    <div className="p-4 bg-white/60 backdrop-blur-md rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-600">
        {publishedDate === 0 ? "오늘" : `${publishedDate}일차`}
      </p>
    </div>
  );
};

export default ListItem;
