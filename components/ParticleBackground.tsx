'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const nodesRef = useRef<HTMLSpanElement[]>([]);

    useGSAP(() => {
        nodesRef.current.forEach((node, index) => {
            gsap.set(node, {
                x: `${(index * 37) % 100}vw`,
                y: `${(index * 19) % 100}vh`,
                opacity: 0.15 + Math.random() * 0.45,
            });

            gsap.to(node, {
                x: `+=${Math.random() * 80 - 40}`,
                y: `+=${Math.random() * 80 - 40}`,
                opacity: 0.08 + Math.random() * 0.4,
                duration: 6 + Math.random() * 8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: index * 0.03,
            });
        });
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
            <div className="absolute left-1/2 top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10" />
            {[...Array(42)].map((_, i) => (
                <span
                    key={i}
                    ref={(el) => {
                        if (el) nodesRef.current[i] = el;
                    }}
                    className="absolute size-1 bg-primary shadow-[0_0_18px_hsl(var(--primary))]"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
