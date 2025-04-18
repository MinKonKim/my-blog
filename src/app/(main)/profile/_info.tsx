// // components/ProfilePage.tsx
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useSpring } from "motion/react";
// import Link from "next/link";

// const infoPage = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="h-screen overflow-y-scroll snap-y snap-mandatory"
//     >
//       <motion.div
//         style={{ scaleX }}
//         className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
//       />
//       <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
//         {/* 이름 & 소개 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl font-bold text-gray-900">김민곤</h1>
//           <p className="mt-2 text-lg text-gray-600">
//             긍정적인 경험의 가치를 만드는 프론트엔드 개발자입니다. 사용자 중심의
//             UI/UX, 클린 코드, 효율적인 인터페이스 구현에 집중하고 있습니다.
//           </p>
//           <div className="mt-4 text-sm text-gray-500 space-y-1">
//             <p>📧 alsrhs98@gmail.com</p>
//             <p>📍 서울특별시 서대문구 통일로 510</p>
//             <p>📞 010-2596-6958</p>
//             <p>
//               🔗{" "}
//               <Link
//                 href="https://github.com/MinKonKim"
//                 className="text-blue-600 underline"
//               >
//                 GitHub 바로가기
//               </Link>
//             </p>
//           </div>
//         </motion.div>

//         {/* 기술 스택 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
//           <ul className="flex flex-wrap gap-2">
//             {[
//               "React.js",
//               "Next.js",
//               "JavaScript",
//               "TypeScript",
//               "HTML",
//               "TailwindCSS",
//               "REST API",
//               "Slack",
//               "Notion",
//             ].map((skill) => (
//               <li
//                 key={skill}
//                 className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* 프로젝트 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">프로젝트</h2>
//           <div className="space-y-2">
//             <p className="text-lg font-medium">
//               워크커넥트 (2024.07 ~ 2024.08)
//             </p>
//             <p className="text-sm text-gray-600">
//               Slack, Trello, Zoom을 통합한 차세대 워크스페이스 웹 앱 개발
//             </p>
//             <Link
//               href="https://github.com/MinKonKim/WorkConnect"
//               className="text-blue-600 text-sm underline"
//               target="_blank"
//             >
//               GitHub Repository
//             </Link>
//           </div>
//         </motion.div>

//         {/* 경력 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">경력</h2>
//           <ul className="space-y-3 text-gray-700 text-sm">
//             <li>
//               <strong>스텝 하우</strong> – 개발팀 인턴 (2025.02 ~ 2025.03)
//               <br />
//               - QA 및 UI 개선 작업
//               <br />- 구독권에 따른 유저 권한 분기처리
//             </li>
//             <li>
//               <strong>팀스파르타</strong> – 콘텐츠팀 인턴 (2024.09 ~ 2024.12)
//               <br />
//               - AITC 자격 콘텐츠 제작
//               <br />- 카이스트 AI 교육 콘텐츠 제작 참여
//             </li>
//             <li>
//               <strong>내일배움캠프</strong> React 5기 (2024.04 ~ 2024.08)
//               <br />- 워크스페이스 프로젝트 <em>WorkConnect</em> 기획 및 개발
//             </li>
//           </ul>
//         </motion.div>

//         {/* 학력 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">학력</h2>
//           <ul className="text-sm text-gray-700 space-y-2">
//             <li>📌 중부대학교 정보통신학 전공 – 중퇴 (2015 ~ 2018)</li>
//             <li>📌 가톨릭대학교 미디어공학과 – 학사 졸업 (2019 ~ 2023)</li>
//           </ul>
//         </motion.div>

//         {/* 자격증 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">자격증</h2>
//           <ul className="text-sm text-gray-700 space-y-1">
//             <li>📄 정보처리기사 – 한국산업인력공단 (2023.06)</li>
//             <li>📄 SQLD – 한국데이터진흥원 (2024.04)</li>
//           </ul>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default infoPage;
