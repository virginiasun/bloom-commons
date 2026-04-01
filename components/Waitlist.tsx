"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() });
    setSubmitting(false);

    if (dbError) {
      if (dbError.code === "23505") {
        setError("You're already on the list!");
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }

    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="py-24 px-6 bg-bloom-peach/50" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-bloom-dark tracking-tight"
        >
          We&apos;re building Bloom Commons with preschool and daycare directors, teachers, and schools.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-bloom-gray leading-relaxed"
        >
          Join the early access list to shape what we build.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          {submitted ? (
            <div className="bg-white rounded-card p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
              <p className="text-bloom-green font-bold text-lg">
                You&apos;re on the list!
              </p>
              <p className="text-bloom-gray mt-2 text-sm">
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-card border border-gray-200 bg-white text-bloom-dark placeholder:text-bloom-gray/50 focus:outline-none focus:ring-2 focus:ring-bloom-green/30 transition"
                  required
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1.5 text-left pl-4">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-bloom-green text-white font-semibold px-8 py-3.5 rounded-card hover:bg-bloom-green-light transition-colors shadow-lg shadow-bloom-green/20 whitespace-nowrap disabled:opacity-60"
              >
                {submitting ? "Joining..." : "Join the Waitlist"}
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 text-xs text-bloom-gray/60"
        >
          No spam. Just updates on our launch.
        </motion.p>
      </div>
    </section>
  );
}
