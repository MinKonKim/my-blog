"use client";

import { motion } from "motion/react";
import React from "react";

const Qualifications = () => {
  const certs = [
    {
      name: "정보처리기사",
      org: "한국산업인력공단",
      date: "2023.06",
    },
    {
      name: "SQLD",
      org: "한국데이터진흥원",
      date: "2024.04",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-2xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        자격증
      </motion.h2>

      <div className="space-y-4">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg flex items-start gap-3"
          >
            <span className="text-2xl">📄</span>
            <div className="flex flex-col text-white text-sm">
              <span className="font-medium">{cert.name}</span>
              <span className="text-gray-300">{cert.org}</span>
              <span className="text-gray-400 text-xs">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Qualifications;
