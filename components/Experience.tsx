'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-background border-t border-accents-2">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-accents-1 rounded-xl border border-accents-2">
              <Briefcase className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-accents-5">
              {t.experience.title}
            </h2>
          </div>

          <div className="relative border-l border-accents-2 ml-3 md:ml-6 space-y-12">
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="ml-8 md:ml-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:-left-[58px] top-1.5 w-5 h-5 rounded-full border-4 border-background bg-foreground" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <span className="text-sm font-mono text-accents-5 bg-accents-1 px-3 py-1 rounded-full border border-accents-2">
                    {job.period}
                  </span>
                </div>

                <div className="text-lg font-medium text-accents-6 mb-4">
                  {job.company}
                </div>

                <p className="text-accents-5 leading-relaxed mb-6">
                  {job.description}
                </p>

                {job.contributions && (
                  <ul className="mb-6 space-y-2">
                    {job.contributions.map((contribution: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-accents-5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accents-4 flex-shrink-0" />
                        <span className="leading-relaxed">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {job.stack && job.stack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accents-1 text-accents-5 border border-accents-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
