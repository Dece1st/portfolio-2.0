'use client';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollBarRef.current) {
                const { scrollHeight, clientHeight } = document.documentElement;
                const scrollableHeight = scrollHeight - clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = (scrollY / scrollableHeight) * 100;

                scrollBarRef.current.style.transform = `translateY(-${
                    100 - scrollProgress
                }%)`;
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-[50svh] right-[2%] z-[4] hidden h-[120px] w-1 -translate-y-1/2 overflow-hidden border border-primary/20 bg-background-light md:block">
            <div
                className="h-full w-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]"
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
