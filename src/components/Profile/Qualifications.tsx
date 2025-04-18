import { motion } from "motion/react";
import React from "react";

const Qualifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4">자격증</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>📄 정보처리기사 – 한국산업인력공단 (2023.06)</li>
        <li>📄 SQLD – 한국데이터진흥원 (2024.04)</li>
      </ul>
    </motion.div>
  );
};

export default Qualifications;
