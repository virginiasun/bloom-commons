"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Waitlist", href: "#waitlist" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bloom-bg/80 backdrop-blur-md border-b border-bloom-green/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="font-heading text-xl font-bold text-bloom-dark">
            Bloom Commons
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-bloom-gray hover:text-bloom-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-bloom-green text-white text-sm font-medium px-5 py-2.5 rounded-card hover:bg-bloom-green-light transition-colors"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bloom-bg/95 backdrop-blur-md border-b border-bloom-green/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-bloom-gray hover:text-bloom-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                className="bg-bloom-green text-white text-sm font-medium px-5 py-2.5 rounded-card text-center hover:bg-bloom-green-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Join the Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
