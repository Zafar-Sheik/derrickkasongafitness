// components/hero.tsx
"use client";
import { motion } from "framer-motion";

import Gloves from "@/public/Gloves.png";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10">
          {/* Decorative boxing icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-6 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Image src={Gloves} alt="Gloves" className="w-12 h-12" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Derrick Kasonga
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Former Professional Boxer | Fitness Trainer
          </p>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="border-t border-amber-500/30 pt-8">
              <p className="text-lg text-gray-400 mb-6">
                Transforming lives through boxing-inspired fitness
              </p>
              <motion.a
                href="https://wa.me/+27760767856"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all cursor-pointer">
                Book Session
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="pattern-dots pattern-amber-500 pattern-opacity-20 pattern-size-4 w-full h-full" />
      </div>
    </section>
  );
}
