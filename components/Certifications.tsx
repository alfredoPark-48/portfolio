"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section
      id="certifications"
      className="py-24 bg-background border-t border-accents-2/30"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 flex flex-col items-start">
            <span className="text-sm font-bold uppercase tracking-widest text-accents-4 block mb-4">
              {t.certifications.title}
            </span>
            <div className="h-0.5 w-10 bg-foreground/30 mt-1 rounded-full" />
          </div>

          <div className="flex flex-col gap-8">
            {t.certifications.items.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target={cert.link ? "_blank" : undefined}
                rel={cert.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden p-6 sm:p-8 md:p-10 bg-accents-1/50 border border-accents-2 hover:border-accents-4 rounded-3xl transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 block ${cert.link ? "cursor-pointer" : ""}`}
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-foreground/5 rounded-full blur-3xl group-hover:bg-foreground/10 transition-colors duration-500" />

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
                  <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6">
                    {cert.logo ? (
                      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden bg-transparent">
                        <Image
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 bg-accents-1 rounded-2xl border border-accents-2 text-foreground group-hover:scale-110 transition-transform duration-500">
                        <Award className="w-6 md:w-8 h-6 md:h-8" />
                      </div>
                    )}

                    <div className="flex flex-col space-y-1.5">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-lg text-accents-5 font-medium flex items-center gap-2">
                        {cert.issuer}
                        {cert.link && (
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-start md:items-center mt-2 md:mt-0">
                    <div className="inline-flex items-center px-5 py-2.5 bg-accents-1 rounded-full text-sm font-mono text-foreground border border-accents-2 shadow-sm">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
