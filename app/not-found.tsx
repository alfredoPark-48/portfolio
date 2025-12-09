'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-8xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-accents-5 mb-4">
                    {t.notFound.title}
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-xl text-accents-5 mb-10 max-w-md mx-auto">
                    {t.notFound.description}
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t.notFound.backHome}
                </Link>
            </motion.div>
        </div>
    );
}
