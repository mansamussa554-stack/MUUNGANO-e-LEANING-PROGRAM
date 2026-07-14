"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="mx-auto mb-6"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white"
        >
          MUUNGANO
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl md:text-5xl text-yellow-400 font-bold mt-4"
        >
          E-LEARNING PLATFORM
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-xl text-white max-w-3xl leading-8"
        >
          Learn the History, Principles, Governance and Importance of
          the Union of Tanganyika and Zanzibar through a modern
          digital learning experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-6"
        >

          <button className="bg-green-700 hover:bg-green-800 px-10 py-4 rounded-full text-white text-lg font-bold transition">
            Start Learning
          </button>

          <button className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full text-black text-lg font-bold transition">
            Login
          </button>

        </motion.div>

      </div>

    </section>
  );
}