'use client';
import Button from '@/components/Button';
import { GENERAL_INFO, PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Cpu, Database, Radar, Terminal } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const systemStats = [
    { label: 'Projects', value: PROJECTS.length.toString().padStart(2, '0') },
    { label: 'Stack Nodes', value: '18' },
    { label: 'Build Focus', value: 'UI' },
];

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
            className="relative overflow-hidden pt-24 md:min-h-screen md:pt-28"
            id="banner"
            ref={containerRef}
        >
            <div className="container grid min-h-[calc(100svh-7rem)] items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative z-[1]">
                    <h1 className="hero-reveal max-w-[740px] font-anton text-[clamp(4rem,12vw,9rem)] leading-[0.82] text-glow">
                        FRONTEND
                        <span className="block text-primary">SYSTEMS</span>
                    </h1>

                    <p className="hero-reveal mt-7 max-w-[610px] text-lg leading-8 text-muted-foreground">
                        I build polished web interfaces that feel fast,
                        responsive, and deliberate. This portfolio is designed
                        like a command surface for the projects, tools, and
                        product work behind the screen.
                    </p>

                    <div className="hero-reveal mt-9 flex flex-wrap gap-4">
                        <Button as="link" href="#selected-projects">
                            View Systems
                        </Button>
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            variant="secondary"
                        >
                            Open Comms
                        </Button>
                    </div>

                    <div className="hero-reveal mt-12 grid max-w-[660px] grid-cols-3 gap-3">
                        {systemStats.map((stat) => (
                            <div className="hud-panel p-4" key={stat.label}>
                                <p className="hud-kicker text-[10px]">
                                    {stat.label}
                                </p>
                                <p className="mt-3 font-anton text-3xl text-primary">
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-reveal relative mx-auto w-full max-w-[560px]">
                    <div className="hud-panel scanline aspect-square overflow-hidden p-5">
                        <div className="absolute inset-6 border border-primary/15" />
                        <div className="absolute left-7 top-7 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-secondary">
                            <Radar size={16} />
                            Scanning
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
