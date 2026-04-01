"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
      {/* Subtle background washes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-bloom-mint opacity-50 blur-3xl" />
        <div className="absolute top-48 right-[-8rem] w-80 h-80 rounded-full bg-bloom-peach opacity-40 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-bloom-dark leading-tight tracking-tight"
        >
          Your teachers should be with kids, not filling out forms.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-bloom-gray max-w-2xl mx-auto leading-relaxed"
        >
          Voice-first logging that turns teacher observations into structured,
          compliance-ready records. Teachers speak naturally. Bloom Commons handles the
          rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#waitlist"
            className="bg-bloom-green text-white font-semibold px-8 py-3.5 rounded-card text-lg hover:bg-bloom-green-light transition-colors shadow-lg shadow-bloom-green/20"
          >
            Join the Early Access Waitlist
          </a>
          <a
            href="#how-it-works"
            className="text-bloom-green font-medium px-6 py-3.5 hover:text-bloom-green-light transition-colors"
          >
            See How It Works &darr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
