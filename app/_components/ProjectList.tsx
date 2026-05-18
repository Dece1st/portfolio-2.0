'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.project-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                y: 34,
                autoAlpha: 0,
                stagger: 0.08,
                duration: 0.55,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="selected-projects">
            <div className="container" ref={containerRef}>
                <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <SectionTitle title="Selected Systems" className="mb-0" />
                    <p className="max-w-[430px] text-sm leading-6 text-muted-foreground">
                        Each module opens into a deeper project readout with
                        process notes, stack details, and interface captures.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {PROJECTS.map((project, index) => (
                        <Project
                            index={index}
                            project={project}
                            key={project.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
