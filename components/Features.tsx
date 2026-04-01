"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, FileText, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Mic,
    title: "Voice-first capture",
    description:
      "Teachers speak naturally \u2014 \u201CLiam napped from 1 to 2:30, Maya finished her lunch\u201D \u2014 and Bloom Commons turns it into structured records. No more tapping through forms.",
  },
  {
    icon: FileText,
    title: "One living record per child",
    description:
      "Every signal \u2014 teacher logs, parent observations \u2014 flows into a unified developmental record. Parents see reassurance. Teachers see professional context. Directors see program-level intelligence.",
  },
  {
    icon: CheckCircle,
    title: "Confirm, don\u2019t create",
    description:
      "The teacher\u2019s role shifts from \u201Cdocument the day\u201D to \u201Creview and confirm what the system captured.\u201D That\u2019s not an incremental improvement \u2014 it\u2019s a category shift.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-bloom-green font-medium text-sm uppercase tracking-widest mb-3"
          >
            How Bloom Commons is different
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl font-bold text-bloom-dark tracking-tight"
          >
            We didn&apos;t digitize the form. We eliminated it.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.1 }}
              className="bg-white rounded-card p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-bloom-mint mb-5">
                <item.icon size={20} className="text-bloom-green" />
              </div>
              <h3 className="font-heading text-lg font-bold text-bloom-dark mb-3">
                {item.title}
              </h3>
              <p className="text-bloom-gray text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
