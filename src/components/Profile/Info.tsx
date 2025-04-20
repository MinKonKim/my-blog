"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
    >
      {/* 이미지 영역 */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Image
          src="/profile_img.png"
          alt="프로필 이미지"
          width={300}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* 텍스트 영역 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">김민곤</h1>
        <p className="text-lg">
          긍정적인 경험의 가치를 만드는 프론트엔드 개발자입니다. 사용자 중심의
          UI/UX, 클린 코드, 효율적인 인터페이스 구현에 집중하고 있습니다.
        </p>

        <div className="text-sm space-y-1">
          <p>📧 alsrhs98@gmail.com</p>
          <p>📍 서울특별시 서대문구 통일로 510</p>
          <p>📞 010-2596-6958</p>
          <p>
            🔗{" "}
            <Link
              href="https://github.com/MinKonKim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              GitHub 바로가기
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;
