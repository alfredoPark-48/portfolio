'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/constants/skills';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 md:py-32 bg-accents-1">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-12 tracking-tight">{t.about.title}</h2>

                    <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                        <div className="space-y-6 text-lg text-accents-5 leading-relaxed">
                            <p>
                                {t.about.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accents-4 mb-6">
                                Skills & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 bg-background border border-accents-2 rounded-full text-sm font-medium hover:border-accents-4 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
