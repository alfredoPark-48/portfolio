'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 bg-accents-1 border-t border-accents-2">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-background rounded-xl border border-accents-2">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-accents-5">
              {t.education.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.education.schools.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-background rounded-2xl border border-accents-2 hover:border-accents-4 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {school.degree}
                    </h3>
                    <p className="text-accents-5 font-medium mt-1">
                      {school.institution}
                    </p>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-accents-1 rounded-full text-xs font-mono text-accents-5 border border-accents-2">
                  {school.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
