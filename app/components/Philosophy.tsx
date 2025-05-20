// components/philosophy.tsx
"use client";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, MoonStar } from "lucide-react";

export function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12">
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all">
            <Dumbbell className="w-12 h-12 mx-auto mb-6 text-amber-500" />
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Daily Training
            </h3>
            <p className="text-gray-400">
              Consistent, high-intensity workouts combining boxing techniques
              with functional fitness
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all">
            <HeartPulse className="w-12 h-12 mx-auto mb-6 text-amber-500" />
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Clean Living
            </h3>
            <p className="text-gray-400">
              Zero alcohol, nutrient-rich diet, and cardiovascular excellence
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all">
            <MoonStar className="w-12 h-12 mx-auto mb-6 text-amber-500" />
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Rest & Recovery
            </h3>
            <p className="text-gray-400">
              Strategic sleep patterns and active recovery methods
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
