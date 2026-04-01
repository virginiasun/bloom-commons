"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Repeat } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "Documentation is crushing teachers.",
    text: "45\u201360 minutes per classroom per day spent on data entry instead of being present with children.",
  },
  {
    icon: Users,
    title: "Parents feel like customers, not partners.",
    text: "They get a daily report but no real visibility into their child\u2019s development story.",
  },
  {
    icon: Repeat,
    title: "Existing tools digitized the paperwork \u2014 but didn\u2019t eliminate it.",
    text: "Teachers still stop, pull out a device, and log every meal, nap, and diaper change manually.",
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 bg-bloom-peach/40" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-bloom-gray font-medium text-sm uppercase tracking-widest mb-12"
        >
          The problem
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-card p-6 shadow-[0_1px_16px_rgba(0,0,0,0.05)]"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-bloom-peach mb-4">
                <point.icon size={20} className="text-bloom-coral" />
              </div>
              <h3 className="font-heading text-base font-bold text-bloom-dark mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-bloom-gray text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
