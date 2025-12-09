'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import enMessages from '../messages/en.json';
import esMessages from '../messages/es.json';

type Language = 'en' | 'es';
type Messages = typeof enMessages;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    // Persisting to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'en' || saved === 'es')) {
            setLanguage(saved);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = language === 'en' ? enMessages : esMessages;

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
