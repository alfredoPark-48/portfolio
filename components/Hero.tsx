"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCvOpen(false);
      }
    }
    if (cvOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cvOpen]);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -6,
      scale: 0.97,
      transition: { duration: 0.15, ease: "easeIn" as const },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -4 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.15, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center pb-20 pt-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-accents-5 uppercase tracking-widest mb-4 block">
            {t.hero.greeting}
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-accents-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Alfredo Park
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-accents-4 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#projects"
            className="group px-8 py-3 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            {t.hero.viewWork}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              suppressHydrationWarning
            />
          </Link>

          <Link
            href="#contact"
            className="px-8 py-3 border border-accents-2 rounded-full font-medium hover:bg-accents-1 transition-all text-center"
          >
            {t.hero.contact}
          </Link>

          {/* Download CV — click-based dropdown (works on desktop & mobile) */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="download-cv-btn"
              onClick={() => setCvOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={cvOpen}
              className="px-8 py-3 border border-accents-2 rounded-full font-medium hover:bg-accents-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer select-none"
            >
              <Download
                className={`w-4 h-4 transition-transform duration-300 ${cvOpen ? "-translate-y-0.5" : ""}`}
              />
              {t.hero.downloadCV}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 text-accents-5 ${cvOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  key="cv-dropdown"
                  role="menu"
                  aria-label="Download CV options"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-max"
                >
                  <div className="flex flex-col bg-background border border-accents-2 rounded-2xl shadow-xl overflow-hidden min-w-[160px]">
                    {/* Subtle top accent line */}
                    <div className="h-px bg-gradient-to-r from-transparent via-accents-3 to-transparent" />

                    <motion.a
                      custom={0}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      href="/resume/AlfredoCVEnglish.pdf"
                      download
                      role="menuitem"
                      onClick={() => setCvOpen(false)}
                      className="group/item px-5 py-3.5 hover:bg-accents-1 text-sm font-medium transition-colors text-foreground cursor-pointer flex items-center justify-between gap-3"
                    >
                      <span>English</span>
                      <span className="text-xs text-accents-4 font-normal tracking-wide group-hover/item:text-accents-5 transition-colors">
                        EN
                      </span>
                    </motion.a>

                    <div className="h-px bg-accents-2 mx-4" />

                    <motion.a
                      custom={1}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      href="/resume/AlfredoCVSpanish.pdf"
                      download
                      role="menuitem"
                      onClick={() => setCvOpen(false)}
                      className="group/item px-5 py-3.5 hover:bg-accents-1 text-sm font-medium transition-colors text-foreground cursor-pointer flex items-center justify-between gap-3"
                    >
                      <span>Español</span>
                      <span className="text-xs text-accents-4 font-normal tracking-wide group-hover/item:text-accents-5 transition-colors">
                        ES
                      </span>
                    </motion.a>

                    <div className="h-px bg-gradient-to-r from-transparent via-accents-3 to-transparent" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
