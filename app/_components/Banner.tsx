'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Cpu, Database, Radar, Terminal } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.hero-reveal', {
                y: 32,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
            });

            gsap.to('.orbital-node', {
                rotate: 360,
                duration: 24,
                repeat: -1,
                ease: 'none',
                transformOrigin: '50% 50%',
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            className="relative overflow-hidden"
            id="banner"
            ref={containerRef}
        >
            <div className="container grid min-h-[calc(100svh-4.5rem)] items-center gap-8 py-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative z-[1]">
                    <p className="hero-reveal hud-kicker mb-5">
                        Portfolio / Full-Stack Developer
                    </p>

                    <h1 className="hero-reveal max-w-[740px] font-anton text-[clamp(3.6rem,6vw,8rem)] leading-[0.86] text-glow">
                        FULLSTACK
                        <span className="block text-primary">DEVELOPER</span>
                    </h1>

                    <p className="hero-reveal mt-7 max-w-[610px] text-xl leading-8 text-muted-foreground">
                        I am a full-stack developer who loves designing clean
                        frontend experiences and building scalable backend
                        database systems.
                        <br />I build web apps and mobile apps with React,
                        Next.js, and React Native.
                    </p>

                    <div className="hero-reveal mt-9 flex flex-wrap gap-4">
                        <Button as="link" href="#selected-projects">
                            View Projects
                        </Button>
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            variant="secondary"
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div className="hero-reveal relative mx-auto w-full max-w-[560px]">
                    <div className="hud-panel scanline aspect-square overflow-hidden p-5">
                        <div className="absolute inset-6 border border-primary/15" />
                        <div className="absolute left-7 top-7 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-secondary">
                            <Radar size={16} />
                            Project Overview
                        </div>

                        <div className="absolute inset-[18%] rounded-full border border-primary/30" />
                        <div className="absolute inset-[28%] rounded-full border border-secondary/25" />
                        <div className="radar-ring absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80" />

                        <div className="orbital-node absolute inset-[14%]">
                            <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
                            <span className="absolute bottom-[12%] left-[10%] size-2 bg-secondary shadow-[0_0_18px_hsl(var(--secondary))]" />
                            <span className="absolute right-[2%] top-[40%] size-2 bg-foreground" />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
                            {[
                                { icon: Cpu, label: 'Render', value: '98%' },
                                { icon: Terminal, label: 'UX', value: 'LOCK' },
                                {
                                    icon: Database,
                                    label: 'Data',
                                    value: 'SYNC',
                                },
                            ].map((item) => (
                                <div
                                    className="border border-primary/20 bg-black/35 p-3"
                                    key={item.label}
                                >
                                    <item.icon
                                        size={16}
                                        className="mb-3 text-primary"
                                    />
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                                        {item.label}
                                    </p>
                                    <p className="mt-1 font-anton text-lg text-foreground">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
