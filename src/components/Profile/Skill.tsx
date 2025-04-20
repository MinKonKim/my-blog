"use client";

import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReactquery,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skillIcons = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  {
    name: "TanStack Query",
    icon: <SiReactquery className="text-rose-400" />,
  },
];

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">기술 스택</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skillIcons.map(({ name, icon }) => (
          <motion.div
            key={name}
            whileHover={{
              scale: 1.1,
              rotate: [0, 4, -4, 0],
              transition: { duration: 0.4 },
            }}
            className="flex items-center gap-3 p-4 bg-white/50 border border-white/20 rounded-lg backdrop-blur-md text-white hover:bg-white/20 transition-colors duration-300"
          >
            <span className="text-2xl">{icon}</span>
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
