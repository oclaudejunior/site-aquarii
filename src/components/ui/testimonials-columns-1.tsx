"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar?: string;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`relative overflow-hidden h-[500px] ${className || ""}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role, avatar }, i) => (
              <div
                key={`${index}-${i}`}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-md hover:border-primary/50 hover:shadow-gold transition-all duration-300"
              >
                <p className="text-white/90 leading-relaxed text-sm">
                  "{text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  {avatar ? (
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-white/60 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
