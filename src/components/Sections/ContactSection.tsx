import { motion } from "motion/react";
import React from "react";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen snap-start flex items-center justify-center bg-green-100"
    >
      <h2 className="text-2xl font-semibold text-gray-800">🗣 Contact</h2>
    </motion.section>
  );
};

export default ContactSection;
