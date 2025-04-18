// components/BlogList/BlogList.tsx
"use client";

import { CategoryType } from "@/types/NotionDB";
import ListItem from "./ListItem";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  public_url: string;
  properties: {
    title: {
      title: { plain_text: string }[];
    };
    published_date: {
      formula: { number: number };
    };
    categories: {
      multi_select: CategoryType[];
    };
  };
}

interface BlogListProps {
  list: BlogPost[];
}

const BlogList = ({ list }: BlogListProps) => {
  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white/50 backdrop-blur-md rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        포스트
      </h2>
      {list.length === 0 ? (
        <p className="text-gray-600 text-center">포스트가 없습니다.</p>
      ) : (
        <motion.ul
          className="divide-y divide-gray-300/50 flex flex-col gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {list.map((item) => {
            const title =
              item.properties.title.title[0]?.plain_text ?? "제목 없음";
            const publishedDate = item.properties.published_date.formula.number;
            const multiSelect: CategoryType[] =
              item.properties.categories.multi_select;

            return (
              <motion.li
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.01 }}
              >
                <Link href={item.public_url}>
                  <ListItem
                    title={title}
                    publishedDate={publishedDate}
                    multiSelect={multiSelect}
                  />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default BlogList;
