'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

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
                        className="group px-8 py-3 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2"
                    >
                        {t.hero.viewWork}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" suppressHydrationWarning />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-accents-2 rounded-full font-medium hover:bg-accents-1 transition-all"
                    >
                        {t.hero.contact}
                    </Link>
                </motion.div>
            </div >
        </section >
    );
}
