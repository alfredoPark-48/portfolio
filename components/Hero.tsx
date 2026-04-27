"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

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
          <div className="relative group/cv">
            <button className="px-8 py-3 border border-accents-2 rounded-full font-medium hover:bg-accents-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              <Download className="w-4 h-4 transition-transform group-hover/cv:-translate-y-0.5" />
              {t.hero.downloadCV}
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/cv:opacity-100 group-hover/cv:visible transition-all duration-300 z-50">
              <div className="flex flex-col bg-background border border-accents-2 rounded-2xl shadow-xl overflow-hidden min-w-[140px]">
                <a
                  href="/resume/AlfredoCVEnglish.pdf"
                  download
                  className="px-5 py-3.5 hover:bg-accents-1 text-sm font-medium transition-colors text-center text-foreground cursor-pointer flex items-center justify-center"
                >
                  English (EN)
                </a>
                <div className="h-px bg-accents-2 w-full" />
                <a
                  href="/resume/AlfredoCVSpanish.pdf"
                  download
                  className="px-5 py-3.5 hover:bg-accents-1 text-sm font-medium transition-colors text-center text-foreground cursor-pointer flex items-center justify-center"
                >
                  Español (ES)
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
