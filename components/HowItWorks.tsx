"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Cpu, Heart } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Mic,
    title: "Teacher speaks",
    text: "Voice logging during natural workflow. No stopping to type, no tapping through forms.",
  },
  {
    num: "2",
    icon: Cpu,
    title: "AI structures it",
    text: "Bloom Commons uses AI to turn natural speech into structured, compliance-ready records \u2014 meals, naps, activities, incidents \u2014 without anyone tapping through a form.",
  },
  {
    num: "3",
    icon: Heart,
    title: "Everyone benefits",
    text: "Parents get real updates. Directors get reports. Teachers get their time back with kids.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 bg-bloom-mint/40"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-bloom-green font-medium text-sm uppercase tracking-widest mb-3"
        >
          How it works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-heading text-3xl md:text-4xl font-bold text-bloom-dark text-center mb-16 tracking-tight"
        >
          Three steps. Zero paperwork.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
                  <step.icon size={24} className="text-bloom-green" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-bloom-gold text-white text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-bloom-dark mb-2">
                {step.title}
              </h3>
              <p className="text-bloom-gray text-sm leading-relaxed max-w-xs">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
