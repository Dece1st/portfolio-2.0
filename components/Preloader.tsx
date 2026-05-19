'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { ease: 'power2.inOut' },
            });

            tl.from('.boot-line', {
                scaleX: 0,
                transformOrigin: 'left center',
                stagger: 0.08,
                duration: 0.35,
            })
                .to('.boot-copy', {
                    opacity: 1,
                    y: 0,
                    stagger: 0.06,
                    duration: 0.25,
                })
                .to(preloaderRef.current, {
                    xPercent: -100,
                    duration: 0.75,
                    delay: 0.55,
                    ease: 'power4.inOut',
                })
                .set(preloaderRef.current, {
                    display: 'none',
                });
        },
        { scope: preloaderRef },
    );

    return (
        <div
            className="fixed inset-0 z-[6] grid place-items-center bg-background"
            ref={preloaderRef}
        >
            <div className="hud-panel scanline w-[min(520px,calc(100vw-2rem))] p-6">
                <p className="hud-kicker boot-copy translate-y-2 opacity-0">
                    Welcome to
                </p>
                <h2 className="boot-copy mt-4 font-anton text-5xl leading-none text-primary opacity-0 text-glow sm:text-7xl">
                    FARDIN'S PORTFOLIO
                </h2>
                <div className="mt-6 space-y-3">
                    {[86, 64, 92, 51].map((width, index) => (
                        <div
                            key={index}
                            className="h-2 border border-primary/20 bg-primary/5"
                        >
                            <span
                                className="boot-line block h-full bg-primary/70 shadow-[0_0_16px_hsl(var(--primary))]"
                                style={{ width: `${width}%` }}
                            />
                        </div>
                    ))}
                </div>
                <p className="boot-copy mt-5 translate-y-2 text-xs uppercase tracking-[0.24em] text-muted-foreground opacity-0">
                    Loading portfolio interface
                </p>
            </div>
        </div>
    );
};

export default Preloader;
