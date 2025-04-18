import { motion } from "motion/react";
import React from "react";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
      <ul className="flex flex-wrap gap-2">
        {[
          "React.js",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "HTML",
          "TailwindCSS",
          "REST API",
          "Slack",
          "Notion",
        ].map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skill;
