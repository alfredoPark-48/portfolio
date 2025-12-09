'use client';

import { CONTACT_INFO } from '@/constants/contact';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-24 border-t border-accents-2">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Let&apos;s Connect</h2>
                <p className="text-accents-5 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                    Open for new opportunities. Let&apos;s build something amazing together.
                </p>
                <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-block px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                    Say Hello
                </a>

                <div className="mt-20 pt-10 border-t border-accents-2 flex flex-col md:flex-row items-center justify-between text-accents-4 text-sm">
                    <p>&copy; {currentYear} {CONTACT_INFO.name}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href={CONTACT_INFO.github} className="hover:text-foreground transition-colors">GitHub</a>
                        <a href={CONTACT_INFO.linkedin} className="hover:text-foreground transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
