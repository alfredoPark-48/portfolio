"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SKILLS } from "@/constants/skills";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-24 bg-background border-t border-accents-2"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-20">
            <div className="p-3 bg-accents-1 rounded-xl border border-accents-2 shadow-sm">
              <Briefcase className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground to-accents-5">
              {t.experience.title}
            </h2>
          </div>

          <div className="relative">
            {/* Elegant Glow Timeline Line - Hidden on Mobile */}
            <div className="hidden md:block absolute left-[23px] top-6 bottom-4 w-[2px] bg-linear-to-b from-primary/40 via-accents-2 to-transparent rounded-full" />

            <div className="space-y-12 md:space-y-16">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative md:pl-24"
                >
                  {/* Glowing Node - Hidden on Mobile */}
                  <div className="hidden md:block absolute left-[18px] top-10 w-3 h-3 rounded-full bg-primary shadow-[0_0_14px_rgba(var(--primary),0.8)] ring-4 ring-background z-10" />

                  {/* Card Container for Content */}
                  <a
                    href={job.url}
                    target={job.url ? "_blank" : undefined}
                    rel={job.url ? "noopener noreferrer" : undefined}
                    className={`group relative block bg-background border border-accents-2 hover:border-accents-4 p-6 sm:p-8 md:p-10 rounded-4xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-accents-2/30 hover:-translate-y-1.5 ${job.url ? "cursor-pointer" : ""}`}
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-foreground/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5 shrink-0">
                        {/* Logo */}
                        {job.logo && (
                          <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden bg-transparent">
                            <Image
                              src={job.logo}
                              alt={`${job.company} logo`}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}

                        {/* Hierarchy: Company > Role > Seniority */}
                        <div className="flex flex-col">
                          <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2 mb-1">
                            {job.company}
                            {job.url && (
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-lg font-medium text-accents-6 tracking-tight">
                              {job.role}
                            </h3>
                            {job.seniority && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/20 shadow-sm">
                                {job.seniority}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center justify-center px-4 py-2 md:py-1.5 mt-2 md:mt-1 bg-accents-1 rounded-full text-sm font-mono text-accents-5 border border-accents-2 shadow-sm shrink-0 self-start">
                        {job.period}
                      </div>
                    </div>

                    <p className="text-accents-6 leading-relaxed mb-8 text-[1.05rem] md:text-[1.1rem] font-medium relative z-10 w-full max-w-2xl tracking-wide">
                      {job.description}
                    </p>

                    {job.contributions && (
                      <div className="mb-8 relative z-10">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accents-4 mb-4">
                          {t.experience.keyContributions}
                        </h4>
                        <ul className="space-y-3.5">
                          {job.contributions.map(
                            (contribution: string, i: number) => (
                              <li
                                key={i}
                                className="flex items-start gap-4 text-accents-5 group-hover:text-accents-6 transition-colors duration-300"
                              >
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accents-3 group-hover:bg-primary/60 transition-colors duration-300 shrink-0 shadow-sm" />
                                <span className="leading-relaxed">
                                  {contribution}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2.5 relative z-10 mt-6">
                      {job.stack &&
                        job.stack.map((tech: string, i: number) => {
                          const skillInfo = SKILLS.find((s) => s.name === tech);
                          return (
                            <span
                              key={i}
                              className="px-4 py-1.5 text-xs font-medium rounded-full bg-accents-1 text-accents-5 border border-accents-2 group-hover:bg-background group-hover:border-accents-3 group-hover:text-foreground transition-all duration-300 shadow-sm hover:bg-primary/10! hover:text-primary! hover:border-primary/30! cursor-default flex items-center gap-1.5 group/skill"
                            >
                              {skillInfo && (
                                <div className="w-3.5 h-3.5 relative flex items-center justify-center shrink-0">
                                  <Image
                                    src={skillInfo.logo}
                                    alt={tech}
                                    fill
                                    className="object-contain filter group-hover/skill:scale-110 transition-transform duration-300 opacity-80 group-hover/skill:opacity-100 group-hover/skill:brightness-110"
                                  />
                                </div>
                              )}
                              {tech}
                            </span>
                          );
                        })}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
