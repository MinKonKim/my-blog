"use client";

import { motion } from "motion/react";
import React from "react";

const educationList = [
  {
    type: "학력",
    items: [
      {
        school: "중부대학교 정보통신학 전공",
        status: "중퇴",
        period: "2015 ~ 2018",
      },
      {
        school: "가톨릭대학교 미디어공학과",
        status: "학사 졸업",
        period: "2019 ~ 2023",
      },
    ],
  },
  {
    type: "교육",
    items: [
      {
        school: "내일배움캠프 React 5기",
        status: "수료",
        period: "2024.04 ~ 2024.08",
      },
    ],
  },
];

const Education = () => {
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
        학력 및 교육
      </motion.h2>

      <div className="space-y-6">
        {educationList.map((section, idx) => (
          <motion.div
            key={section.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              📚 {section.type}
            </h3>
            <ul className="space-y-2 text-white text-sm">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col md:flex-row md:justify-between md:items-center gap-1"
                >
                  <span className="font-medium">{item.school}</span>
                  <span className="text-sm text-gray-300">
                    {item.status} | {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
