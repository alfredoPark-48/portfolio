"use client";

import { motion, Variants } from "framer-motion";
import { SKILLS } from "@/constants/skills";
import { Skill } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Terminal, Layers, Database } from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    { key: "languages" as const, icon: Terminal },
    { key: "frameworks" as const, icon: Layers },
    { key: "tools" as const, icon: Database },
  ];

  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const badgeContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-background border-b border-accents-2/30 relative overflow-hidden">
      {/* Subtle background glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none opacity-40 dark:opacity-20" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none opacity-40 dark:opacity-20" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-start"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accents-4 block mb-4">
            {t.skills.title}
          </span>
          <div className="h-[2px] w-10 bg-foreground/40 mt-1 rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {categories.map(({ key, icon: Icon }, categoryIdx) => {
            const filteredSkills = SKILLS.filter((s) => s.category === key);
            const categoryName = t.skills.categories[key];

            return (
              <motion.div
                key={key}
                custom={categoryIdx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="group relative overflow-hidden bg-gradient-to-b from-accents-1/50 to-background border border-accents-2 hover:border-accents-4 rounded-3xl p-8 md:p-10 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between"
              >
                {/* Visual card header overlay decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-foreground/[0.02] to-transparent pointer-events-none" />

                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-background border border-accents-2 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] text-accents-4 group-hover:text-foreground select-none">
                      <Icon size={20} className="stroke-[1.75]" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {categoryName}
                    </h3>
                  </div>

                  {/* Skills Badges Wrapper */}
                  <motion.div
                    variants={badgeContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {filteredSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={badgeVariants}
                        className="px-4 py-2.5 bg-background/85 dark:bg-background/40 border border-accents-2/70 hover:border-accents-4 dark:hover:border-accents-5 rounded-2xl text-xs font-semibold text-accents-6 hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:-translate-y-0.5 cursor-default flex items-center gap-2.5 group/skill shadow-xs hover:shadow-md hover:bg-background"
                      >
                        <div className="w-4.5 h-4.5 flex items-center justify-center relative select-none pointer-events-none overflow-hidden">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            fill
                            className={`object-contain filter group-hover/skill:scale-115 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              skill.invertDark ? "dark:brightness-0 dark:invert" : ""
                            }`}
                          />
                        </div>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
