import { fetchNotionDb } from "@/utils/fetchNotionDb";
import React from "react";
import ListItem from "./ListItem";
import Link from "next/link";

const BlogList = async () => {
  const list = await fetchNotionDb();
  if (!Array.isArray(list)) {
    return (
      <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl shadow-lg">
        <p className="text-gray-700 text-center">목록이 존재하지 않습니다</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/50 backdrop-blur-md rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        포스트
      </h2>
      {list.length === 0 ? (
        <p className="text-gray-600 text-center">포스트가 없습니다.</p>
      ) : (
        <ul className="divide-y divide-gray-300/50 flex flex-col gap-2">
          {list.map((item) => {
            const title = item.properties.title.title[0].plain_text;
            const publishedDate = item.properties.published_date.formula.number;
            return (
              <Link key={item.id} href={`/posts/${item.id}`}>
                <ListItem title={title} publishedDate={publishedDate} />
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
