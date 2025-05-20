// components/testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Michael Malet-Warden",
    text: "Derek was a good trainer, and great friend. Went to get fit but got a lot more than a simple trainer. I would highly recommend Derek!",
    rating: 5,
    years: "2 years ago",
  },
  {
    name: "Chantal Ross",
    text: "I love the fact that Derek trains with you during the session, it definitely adds to a more personal experience and it's motivating to keep up with him. His demeanor is always positive and inviting",
    rating: 5,
    years: "2 years ago",
  },
  {
    name: "Dimitri Barry",
    text: "Excellent facilities, Marc and Derrick are very skilled boxing coaches, they make exercising fun",
    rating: 5,
    years: "2 years ago",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-amber-500">
          Client Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}>
              <Card className="p-6 bg-gray-800 border border-gray-700 hover:border-amber-500 transition-all h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={`/avatars/${testimonial.name
                        .toLowerCase()
                        .replace(/ /g, "-")}.jpg`}
                    />
                    <AvatarFallback className="bg-amber-500/20 text-amber-500">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-gray-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-amber-500/80">
                      {testimonial.years}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
