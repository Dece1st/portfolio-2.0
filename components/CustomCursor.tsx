'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!svgRef.current) return;

            const { clientX, clientY } = e;

            gsap.to(svgRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power4.out',
                duration: 0.15,
                opacity: 1,
            });
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    return (
        <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none -translate-x-1/2 -translate-y-1/2"
            fill="none"
            id="cursor"
            strokeWidth="2"
            opacity="0"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
        >
            <circle cx="21" cy="21" r="13" className="stroke-primary/80" />
            <path d="M21 1V12M21 30V41M1 21H12M30 21H41" className="stroke-primary/70" />
            <circle cx="21" cy="21" r="2" className="fill-secondary stroke-secondary" />
        </svg>
    );
};

export default CustomCursor;
