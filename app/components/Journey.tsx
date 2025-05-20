// components/journey.tsx
"use client";
import { motion } from "framer-motion";
import { MapPin, Shield, Trophy, Hand } from "lucide-react";

const milestones = [
  {
    year: "1988",
    title: "Born in DRC",
    description: "Raised in Congo with commercial accounting education",
    icon: <MapPin className="w-6 h-6 text-amber-500" />,
  },
  {
    year: "2008",
    title: "South African Journey",
    description: "Moved to Durban, worked as car guard at Pavilion Mall",
    icon: <Hand className="w-6 h-6 text-amber-500" />,
  },
  {
    year: "2010",
    title: "Life-changing Meeting",
    description: "Met the Muhl family who became his South African family",
    icon: <Shield className="w-6 h-6 text-amber-500" />,
  },
  {
    year: "2020",
    title: "Pandemic Pivot",
    description: "Created basement gym during COVID lockdowns",
    icon: <Trophy className="w-6 h-6 text-amber-500" />,
  },
];

export function Journey() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-amber-500">
          The Fighting Spirit Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 w-1 bg-gradient-to-b from-amber-500/30 to-transparent h-full -translate-x-1/2" />

          <div className="md:hidden absolute left-6 w-1 bg-gradient-to-b from-amber-500/30 to-transparent h-full" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative mb-8 md:mb-16 flex">
              {/* Mobile icon & line connector */}
              <div className="md:hidden absolute left-0 top-6 w-6 h-6 -ml-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  {milestone.icon}
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:block w-full">
                <div
                  className={`w-full md:w-1/2 p-4 ${
                    index % 2 === 0 ? "ml-auto md:pl-12" : "mr-auto md:pr-12"
                  }`}>
                  <div className="p-6 md:p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all">
                    <div className="absolute hidden md:block w-8 h-8 bg-gray-900 rounded-full border-2 border-amber-500 -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      {milestone.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 mb-2">
                      {milestone.description}
                    </p>
                    <div className="text-sm md:text-base text-amber-500 font-mono">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden w-full pl-10">
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all">
                  <h3 className="text-lg font-bold text-gray-100 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {milestone.description}
                  </p>
                  <div className="text-sm text-amber-500 font-mono">
                    {milestone.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
