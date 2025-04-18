"use client";

import { Projects } from "@/constants/projects";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const bounceVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 1,
    },
  },
};

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="min-h-screen snap-start flex flex-col flex-wrap gap-6 items-center justify-center px-4 py-12 bg-gray-50/2">
      <h1 className="text-4xl font-semibold text-black">프로젝트</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Projects.map((project) => (
          <motion.li
            key={project.title}
            ref={ref}
            className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            variants={bounceVariant}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 60 }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Link href={project.github ?? "/"} className="block h-full">
              {project.url && (
                <div className="w-full h-48 relative">
                  <Image
                    src={project.url}
                    alt="대표이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500">
                  기간: {project.description}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
