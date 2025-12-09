'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/constants/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col bg-accents-1 border border-accents-2 rounded-2xl overflow-hidden"
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
                                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                            )}

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3">
                                    {t.projectsList[project.id as keyof typeof t.projectsList]?.title || project.title}
                                </h3>
                                <p className="text-accents-5 mb-6 flex-grow leading-relaxed">
                                    {t.projectsList[project.id as keyof typeof t.projectsList]?.description || project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1 bg-background border border-accents-2 rounded-full text-accents-6"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    {project.appLink ? (
                                        <>
                                            <Link href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                                {t.projects.viewProject}
                                            </Link>
                                            <Link href={project.appLink} className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                                {t.projects.launchApp}
                                            </Link>
                                        </>
                                    ) : (
                                        <Link href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                            {t.projects.viewProject}
                                        </Link>
                                    )}
                                    {project.githubLink && project.githubLink !== "#" ? (
                                        <Link href={project.githubLink} className="flex items-center gap-2 text-sm font-medium hover:text-accents-5 transition-colors">
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
