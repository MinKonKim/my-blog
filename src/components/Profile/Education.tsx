import { motion } from "motion/react";
import React from "react";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">학력</h2>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>📌 중부대학교 정보통신학 전공 – 중퇴 (2015 ~ 2018)</li>
        <li>📌 가톨릭대학교 미디어공학과 – 학사 졸업 (2019 ~ 2023)</li>
      </ul>
    </motion.div>
  );
};

export default Education;
