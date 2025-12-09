'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const links = [
        { name: t.header.about, href: '#about' },
        { name: t.header.projects, href: '#projects' },
        { name: t.header.contact, href: '#contact' },
    ];

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                when: "afterChildren"
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants: Variants = {
        closed: { y: 20, opacity: 0 },
        open: { y: 0, opacity: 1 }
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 text-foreground"
        >
            <div className="absolute inset-x-0 top-0 h-20 bg-background/50 backdrop-blur-xl border-b border-accents-2/20 supports-[backdrop-filter]:bg-background/20" />

            <div className="relative max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity z-50"
                    onClick={() => setIsOpen(false)}
                >
                    {CONTACT_INFO.name}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-accents-5 hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={toggleLanguage}
                        className="p-2 text-accents-5 hover:text-foreground transition-colors flex items-center gap-2 cursor-pointer"
                        aria-label="Switch Language"
                    >
                        <Globe size={20} />
                        <span className="text-sm font-medium">{language.toUpperCase()}</span>
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 text-foreground hover:opacity-70 transition-opacity"
                        aria-label="Switch Language"
                    >
                        <Globe size={20} />
                    </button>
                    <button
                        className="p-2 -mr-2 text-foreground hover:opacity-70 transition-opacity"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 bg-black md:hidden flex flex-col justify-center px-6"
                    >
                        <nav>
                            <ul className="flex flex-col gap-6">
                                {links.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        variants={linkVariants}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-5xl font-bold tracking-tighter text-white hover:text-neutral-400 transition-colors block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <motion.div
                            variants={linkVariants}
                            className="mt-12 pt-12 border-t border-neutral-800 text-neutral-400"
                        >
                            <p className="text-sm uppercase tracking-widest mb-4">{t.header.getInTouch}</p>
                            <a href={`mailto:${CONTACT_INFO.emailAlt}`} className="text-lg text-white hover:underline">
                                {CONTACT_INFO.emailAlt}
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
