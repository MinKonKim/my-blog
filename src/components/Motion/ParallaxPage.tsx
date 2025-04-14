// components/MotionPage.tsx
"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import IntroSection from "../Sections/IntroSection";

const MotionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // containerRef를 대상으로 스크롤 진행률 측정
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {/* Intro Section – 페이드 인 + 슬라이드 업 */}
      <IntroSection />

      {/* Recent Posts Section – 부드럽게 나타나기 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-screen snap-start flex items-center justify-center bg-gray-100"
      >
        <div className="text-xl">📝 최근 포스트 모음</div>
      </motion.section>

      {/* Projects Section – 마우스 호버 시 확대 효과 */}
      <section className="h-screen snap-start flex gap-4 items-center justify-center bg-blue-50">
        {[1, 2].map((p) => (
          <motion.div
            key={p}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-60 h-40 bg-white shadow-md rounded-lg flex items-center justify-center"
          >
            <p className="text-gray-800 font-medium">프로젝트 {p}</p>
          </motion.div>
        ))}
      </section>

      {/* Feedback Section – 도달 시 위에서 떨어지는 듯한 효과 */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-screen snap-start flex items-center justify-center bg-green-100"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          🗣 피드백 남겨주세요!
        </h2>
      </motion.section>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-4 left-0 right-0 h-[4px] bg-red-500 origin-left z-100"
        style={{ scaleX }}
      />
    </div>
  );
};
export default MotionPage;
