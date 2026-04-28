"use client";

import { CONTACT_INFO } from "@/constants/contact";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 border-t border-accents-2">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-accents-5">
          {t.footer.title}
        </h2>
        <p className="text-accents-5 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
          {t.footer.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] min-w-[200px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              {t.footer.sayHello}
              <Send className="w-4 h-4 ml-1 opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-background transition-all duration-300 absolute -right-6" />
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-4 rounded-full bg-accents-1 border border-accents-2 text-foreground hover:bg-background hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(var(--primary),0.4)] group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-4 rounded-full bg-accents-1 border border-accents-2 text-foreground hover:bg-background hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(var(--primary),0.4)] group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div className="mt-28 pt-10 border-t border-accents-2 flex flex-col md:flex-row items-center justify-center text-accents-4 text-sm">
          <p className="text-center">
            &copy; {currentYear} {CONTACT_INFO.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
