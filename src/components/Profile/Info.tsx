import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-gray-900">김민곤</h1>
      <p className="mt-2 text-lg text-gray-600">
        긍정적인 경험의 가치를 만드는 프론트엔드 개발자입니다. 사용자 중심의
        UI/UX, 클린 코드, 효율적인 인터페이스 구현에 집중하고 있습니다.
      </p>
      <div className="mt-4 text-sm text-gray-500 space-y-1">
        <p>📧 alsrhs98@gmail.com</p>
        <p>📍 서울특별시 서대문구 통일로 510</p>
        <p>📞 010-2596-6958</p>
        <p>
          🔗{" "}
          <Link
            href="https://github.com/MinKonKim"
            className="text-blue-600 underline"
          >
            GitHub 바로가기
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Info;
