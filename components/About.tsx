"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-accents-1 border-b border-accents-2/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Subtitle */}
          <div className="mb-12 flex flex-col items-start">
            <span className="text-sm font-bold uppercase tracking-widest text-accents-4 block mb-4">
              {t.about.title}
            </span>
            <div className="h-[2px] w-10 bg-foreground/30 mt-1 rounded-full" />
          </div>

          {/* Asymmetrical Layout */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
            {/* Bold Focus Statement */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                {t.about.highlight}
              </h2>
            </div>

            {/* Detailed Narrative */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-accents-5 leading-relaxed font-normal">
                {t.about.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
