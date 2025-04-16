import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CategoryType } from "@/types/NotionDB";
import Link from "next/link";
import ListItem from "../BlogList/ListItem";

const BlogSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(`/api/notion/database?number=3`);
      const p = await data.json();
      setPosts(p);
    };

    fetchPosts();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen snap-start flex flex-col items-center justify-center "
    >
      <motion.h2
        className="text-4xl font-semibold mb-4 text-[#121212]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        📝 최근 포스트
      </motion.h2>
      <motion.ul
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // 간격 더 주면 천천히 나타남
            },
          },
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {posts?.map((post: any) => {
          const title = post.properties.title.title[0].plain_text;
          const publishedDate = post.properties.published_date.formula.number;
          const multiSelect: CategoryType[] =
            post.properties.categories.multi_select;

          return (
            <motion.li
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 40 }, // 더 멀리서 올라오게
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut", // 더 부드럽게
                  },
                },
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer"
            >
              <Link href={post.public_url}>
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
    </motion.section>
  );
};

export default BlogSection;
