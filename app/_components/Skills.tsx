'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.stack-node', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                opacity: 0,
                y: 28,
                stagger: 0.035,
                duration: 0.5,
                ease: 'power2.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" className="py-section" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Technology Grid" />

                <div className="grid gap-5">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div
                            className="hud-panel grid gap-6 p-5 md:grid-cols-[220px_1fr] md:p-7"
                            key={key}
                        >
                            <div>
                                <p className="hud-kicker">Module</p>
                                <p className="mt-3 font-anton text-4xl uppercase leading-none text-primary">
                                    {key}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {value.map((item) => (
                                    <div
                                        className="stack-node group flex min-h-20 items-center gap-3 border border-primary/15 bg-black/25 p-3 transition hover:border-primary/50 hover:bg-primary/10"
                                        key={item.name}
                                    >
                                        <div className="flex size-11 shrink-0 items-center justify-center border border-primary/15 bg-background/70">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="34"
                                                height="34"
                                                className="max-h-8 object-contain opacity-90 transition group-hover:scale-110"
                                            />
                                        </div>
                                        <span className="text-sm font-medium capitalize text-foreground">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
