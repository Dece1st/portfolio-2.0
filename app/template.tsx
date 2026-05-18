'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const transitionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(transitionRef.current, {
            opacity: 0,
            duration: 0.35,
            delay: 0.1,
            pointerEvents: 'none',
        }).set(transitionRef.current, {
            display: 'none',
        });
    });

    return (
        <div>
            <div
                className="fixed inset-0 z-[5] bg-background-light"
                ref={transitionRef}
            >
                <div className="absolute inset-x-0 top-0 h-1 bg-primary shadow-[0_0_28px_hsl(var(--primary))]" />
            </div>

            {children}
        </div>
    );
}
