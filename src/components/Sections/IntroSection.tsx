import { motion } from "motion/react";
import React from "react";

const IntroSection = () => {
  const words = "👋 안녕하세요! 프론트엔드 개발자 김민곤 입니다!".split(" ");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen snap-start flex items-center justify-center text-[#121212]  bg-blend-hue rounded-lg"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <motion.h1
          className="text-4xl font-bold flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-2 inline-block"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* p는 h1이 끝난 뒤에 등장 */}
        <motion.p
          className="text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: words.length * 0.15 + 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          저의 블로그에 오신 걸 환영합니다!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default IntroSection;
