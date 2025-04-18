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
      className="h-screen snap-start flex flex-col items-center justify-center bg-green-100"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
      <div className="flex w-full gap-2 justify-center">
        <div className="flex">
          <Image src="/email.svg" alt="emailIcon" width={100} height={100} />
          <p>alsrhs98@gmail.com</p>
        </div>
        <Link href="https://github.com/MinKonKim">
          <Image src="/github.svg" alt="emailIcon" width={100} height={100} />
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactSection;
