// components/MotionPage.tsx
"use client";

import { useRef } from "react";
import IntroSection from "../Sections/IntroSection";
import BlogSection from "../Sections/BlogSection";
import ProjectSection from "../Sections/ProjectSection";
import ContactSection from "../Sections/ContactSection";

const MotionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // containerRef를 대상으로 스크롤 진행률 측정
  //   const { scrollYProgress } = useScroll({ target: containerRef });
  //   const scaleX = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001,
  //   });

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {/* Intro Section – 페이드 인 + 슬라이드 업 */}
      <IntroSection />

      {/* Recent Posts Section – 부드럽게 나타나기 */}
      <BlogSection />

      {/* Projects Section – 마우스 호버 시 확대 효과 */}
      <ProjectSection />

      {/* Contact Section  – 도달 시 위에서 떨어지는 듯한 효과 */}
      <ContactSection />
      {/* Scroll Progress Bar */}
      {/* <motion.div
        className="fixed bottom-4 left-0 right-0 h-[4px] bg-red-500 origin-left z-100"
        style={{ scaleX }}
      /> */}
    </div>
  );
};
export default MotionPage;
