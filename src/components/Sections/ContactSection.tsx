"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen snap-start flex flex-col items-center justify-center bg-white/10 backdrop-blur-md px-6"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-4 p-4 bg-white/20 rounded-xl text-white shadow-md hover:shadow-lg backdrop-blur-md transition"
        >
          <Image src="/email.svg" alt="email icon" width={50} height={50} />
          <p className="text-sm sm:text-base font-medium">alsrhs98@gmail.com</p>
        </motion.div>

        {/* GitHub */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-4 p-4 bg-white/20 rounded-xl text-white shadow-md hover:shadow-lg backdrop-blur-md transition"
        >
          <Link
            href="https://github.com/MinKonKim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <Image src="/github.svg" alt="github icon" width={50} height={50} />
            <p className="text-sm sm:text-base font-medium">
              github.com/MinKonKim
            </p>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
