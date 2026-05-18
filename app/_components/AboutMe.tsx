'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Activity, Layers, ShieldCheck } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const signals = [
    {
        icon: Layers,
        label: 'Interface Architecture',
        copy: 'Reusable systems, clean component boundaries, and layouts that hold up across screen sizes.',
    },
    {
        icon: Activity,
        label: 'Interaction Quality',
        copy: 'Motion, feedback, and visual hierarchy tuned to make products feel immediate and controlled.',
    },
    {
        icon: ShieldCheck,
        label: 'Delivery Discipline',
        copy: 'Practical implementation choices that keep projects maintainable after the first launch.',
    },
];

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.about-reveal', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 40,
                autoAlpha: 0,
                stagger: 0.08,
                duration: 0.65,
                ease: 'power3.out',
            });
        },
        { scope: container },
    );

    return (
        <section className="py-section" id="about-me">
            <div className="container" ref={container}>
                <SectionTitle title="Operator Profile" />

                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="hud-panel about-reveal p-6 md:p-8">
                        <p className="hud-kicker">Identity</p>
                        <h2 className="mt-5 font-anton text-5xl leading-none text-foreground md:text-7xl">
                            Fardin Saraf
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            I am a frontend developer focused on building web
                            experiences that look sharp, move cleanly, and stay
                            usable under real product constraints.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <div className="hud-readout">
                                Location: New York
                            </div>
                            <div className="hud-readout">
                                Mode: Product UI
                            </div>
                            <div className="hud-readout">
                                Signal: Responsive
                            </div>
                            <div className="hud-readout">
                                Status: Available
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <div className="hud-panel about-reveal p-6 md:p-8">
                            <p className="hud-kicker">Core Directive</p>
                            <p className="mt-5 text-3xl font-light leading-tight text-foreground md:text-5xl">
                                Design the interface like a system: readable,
                                fast, adaptive, and built with intent.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {signals.map((signal) => (
                                <div
                                    key={signal.label}
                                    className="hud-panel about-reveal p-5"
                                >
                                    <signal.icon
                                        size={22}
                                        className="text-primary"
                                    />
                                    <h3 className="mt-5 font-anton text-xl leading-tight">
                                        {signal.label}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                        {signal.copy}
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

export default AboutMe;
