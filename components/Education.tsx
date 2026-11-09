"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-background border-t border-accents-2/30"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 md:mb-16 flex flex-col items-start">
            <span className="text-sm font-bold uppercase tracking-widest text-accents-4 block mb-4">
              {t.education.title}
            </span>
            <div className="h-0.5 w-10 bg-foreground/30 mt-1 rounded-full" />
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {t.education.schools.map((school, index) => {
              const periodPill = (
                <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 bg-accents-1 rounded-full text-sm font-mono text-foreground border border-accents-2 shadow-sm whitespace-nowrap">
                  {school.period}
                </span>
              );

              return (
                <motion.a
                  key={index}
                  href={school.link}
                  target={school.link ? "_blank" : undefined}
                  rel={school.link ? "noopener noreferrer" : undefined}
                  aria-label={
                    school.link
                      ? `${school.degree} — ${school.institution} (opens in a new tab)`
                      : `${school.degree} — ${school.institution}`
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative overflow-hidden p-6 sm:p-8 md:p-10 bg-accents-1/50 border border-accents-2 hover:border-accents-4 rounded-3xl transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 block ${school.link ? "cursor-pointer" : ""}`}
                >
                  {/* Decorative background element */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-foreground/5 rounded-full blur-3xl group-hover:bg-foreground/10 transition-colors duration-500 pointer-events-none" />

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:gap-12">
                    <div className="flex flex-1 min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                      <div className="flex items-center justify-between gap-4">
                        {school.logo ? (
                          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden bg-transparent">
                            <Image
                              src={school.logo}
                              alt=""
                              width={80}
                              height={80}
                              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0 bg-accents-1 rounded-2xl border border-accents-2 text-foreground group-hover:scale-110 transition-transform duration-500">
                            <Award className="w-7 h-7 md:w-8 md:h-8" />
                          </div>
                        )}

                        <span className="sm:hidden">{periodPill}</span>
                      </div>

                      <div className="flex min-w-0 flex-col space-y-1.5">
                        <h3 className="text-xl md:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                          {school.degree}
                        </h3>
                        <p className="text-base md:text-lg text-accents-5 font-medium flex items-center gap-2">
                          {school.institution}
                          {school.link && (
                            <ExternalLink className="w-4 h-4 shrink-0 text-primary transition-opacity duration-300 opacity-100 hover-device:opacity-0 hover-device:group-hover:opacity-100" />
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="hidden shrink-0 sm:flex sm:items-center">
                      {periodPill}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
