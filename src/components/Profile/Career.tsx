"use client";

import { motion } from "motion/react";
import React from "react";

const careerList = [
  {
    company: "스텝 하우",
    role: "개발팀 인턴",
    period: "2025.02 ~ 2025.03",
    details: ["QA 및 UI 개선 작업", "구독권에 따른 유저 권한 분기처리"],
  },
  {
    company: "팀스파르타",
    role: "콘텐츠팀 인턴",
    period: "2024.09 ~ 2024.12",
    details: ["AITC 자격 콘텐츠 제작", "카이스트 AI 교육 콘텐츠 제작 참여"],
  },
];

const Career = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-6"
      >
        경력
      </motion.h2>

      <div className="space-y-6">
        {careerList.map((career, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{career.company}</h3>
              <span className="text-sm text-black">{career.period}</span>
            </div>
            <p className="text-sm text-blue-200 mb-2">{career.role}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/90">
              {career.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Career;
