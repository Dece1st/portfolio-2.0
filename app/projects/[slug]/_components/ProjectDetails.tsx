'use client';
import parse from 'html-react-parser';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.project-reveal', {
                y: 28,
                autoAlpha: 0,
                stagger: 0.07,
                duration: 0.6,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-20 pt-28">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="project-reveal mb-8 inline-flex h-11 items-center gap-2 border border-primary/30 bg-primary/10 px-4 text-sm uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                    <ArrowLeft size={18} />
                    Return
                </TransitionLink>

                <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="project-reveal hud-panel h-fit p-6 md:p-8 lg:sticky lg:top-24">
                        <p className="hud-kicker">Project</p>
                        <h1 className="mt-5 font-anton text-6xl leading-none text-primary text-glow md:text-8xl">
                            {project.title}
                        </h1>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <div className="hud-readout">Year: {project.year}</div>
                            <div className="hud-readout">
                                Images: {project.images.length}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="border border-primary/15 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex gap-3">
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex size-11 items-center justify-center border border-primary/30 text-primary transition hover:bg-primary hover:text-primary-foreground"
                                    aria-label="Source code"
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex size-11 items-center justify-center border border-primary/30 text-primary transition hover:bg-primary hover:text-primary-foreground"
                                    aria-label="Live site"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <div className="project-reveal hud-panel p-6 md:p-8">
                            <p className="hud-kicker">Overview</p>
                            <div className="markdown-text mt-5 text-lg leading-8 text-muted-foreground">
                                {parse(project.description)}
                            </div>
                        </div>

                        {project.role && (
                            <div className="project-reveal hud-panel p-6 md:p-8">
                                <p className="hud-kicker">My Role</p>
                                <div className="markdown-text mt-5 text-lg leading-8 text-muted-foreground">
                                    {parse(project.role)}
                                </div>
                            </div>
                        )}

                        <div className="project-reveal grid gap-4">
                            {project.images.map((image, index) => (
                                <a
                                    href={image}
                                    target="_blank"
                                    key={image}
                                    className="hud-panel group block overflow-hidden"
                                >
                                    <div className="flex items-center justify-between border-b border-primary/15 px-4 py-3">
                                        <p className="hud-kicker">
                                            Capture{' '}
                                            {(index + 1)
                                                .toString()
                                                .padStart(2, '0')}
                                        </p>
                                        <ExternalLink
                                            size={16}
                                            className="text-primary"
                                        />
                                    </div>
                                    <Image
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        width="1100"
                                        height="620"
                                        className="h-auto w-full object-cover object-top opacity-85 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
