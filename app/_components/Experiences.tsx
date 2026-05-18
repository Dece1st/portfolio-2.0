'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BriefcaseBusiness } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.experience-item', {
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
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Mission History" />

                <div className="hud-panel p-5 md:p-8">
                    <div className="grid gap-4">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={`${item.company}-${item.title}`}
                                className="experience-item grid gap-4 border border-primary/15 bg-black/20 p-5 transition hover:border-primary/45 hover:bg-primary/10 md:grid-cols-[92px_1fr_190px]"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="font-anton text-2xl text-primary">
                                        {(index + 1)
                                            .toString()
                                            .padStart(2, '0')}
                                    </span>
                                    <BriefcaseBusiness
                                        size={19}
                                        className="mt-1 text-secondary"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                                        {item.company}
                                    </p>
                                    <p className="mt-2 font-anton text-3xl leading-none md:text-4xl">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="hud-readout h-fit md:text-right">
                                    {item.duration}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
