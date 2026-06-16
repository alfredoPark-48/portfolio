"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/constants/projects";
import { SKILLS } from "@/constants/skills";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-accents-1 border-t border-accents-2/30 border-b border-accents-2/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-start"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accents-4 block mb-4">
            {t.projects.title}
          </span>
          <div className="h-[2px] w-10 bg-foreground/30 mt-1 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-background border border-accents-2 hover:border-accents-4 rounded-3xl overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1.5"
            >
              {project.image ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image!}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div
                  className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
              )}

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">
                  {t.projectsList[project.id as keyof typeof t.projectsList]
                    ?.title || project.title}
                </h3>
                <p className="text-accents-5 mb-6 flex-grow leading-relaxed">
                  {t.projectsList[project.id as keyof typeof t.projectsList]
                    ?.description || project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => {
                    const skillInfo = SKILLS.find((s) => s.name === tag);
                    return (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-accents-1/60 dark:bg-accents-1/30 border border-accents-2/70 hover:border-accents-4 dark:hover:border-accents-5 rounded-xl text-xs font-semibold text-accents-6 hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:-translate-y-0.5 cursor-default flex items-center gap-2 group/skill shadow-xs hover:shadow-md hover:bg-background"
                      >
                        {skillInfo && (
                          <div className="w-4 h-4 relative flex items-center justify-center shrink-0 select-none pointer-events-none overflow-hidden">
                            <Image
                              src={skillInfo.logo}
                              alt={tag}
                              fill
                              className={`object-contain filter group-hover/skill:scale-115 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                skillInfo.invertDark ? "dark:brightness-0 dark:invert" : ""
                              }`}
                            />
                          </div>
                        )}
                        <span>{tag}</span>
                      </span>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-auto">
                  {project.appLink ? (
                    <>
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.viewProject}
                      </Link>
                      <Link
                        href={project.appLink}
                        className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.launchApp}
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewProject}
                    </Link>
                  )}
                  {project.githubLink && project.githubLink !== "#" ? (
                    <Link
                      href={project.githubLink}
                      className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      {t.projects.code}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1.5 text-sm font-medium text-accents-4 opacity-50 italic">
                      <Github className="w-4.5 h-4.5" />
                      {t.projects.private}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
