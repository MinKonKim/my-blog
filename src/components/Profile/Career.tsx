import { motion } from "motion/react";
import React from "react";

const Career = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-4">경력</h2>
      <ul className="space-y-3 text-gray-700 text-sm">
        <li>
          <strong>스텝 하우</strong> – 개발팀 인턴 (2025.02 ~ 2025.03)
          <br />
          - QA 및 UI 개선 작업
          <br />- 구독권에 따른 유저 권한 분기처리
        </li>
        <li>
          <strong>팀스파르타</strong> – 콘텐츠팀 인턴 (2024.09 ~ 2024.12)
          <br />
          - AITC 자격 콘텐츠 제작
          <br />- 카이스트 AI 교육 콘텐츠 제작 참여
        </li>
        <li>
          <strong>내일배움캠프</strong> React 5기 (2024.04 ~ 2024.08)
          <br />- 워크스페이스 프로젝트 <em>WorkConnect</em> 기획 및 개발
        </li>
      </ul>
    </motion.div>
  );
};

export default Career;
