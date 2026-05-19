'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { CircuitBoard, Menu, MoveUpRight, X } from 'lucide-react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const COLORS = [
    'bg-primary text-primary-foreground',
    'bg-secondary text-secondary-foreground',
    'bg-zinc-500 text-black',
    'bg-zinc-300 text-black',
];

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Experience',
        url: '/#my-experience',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="sticky top-0 z-[4] pointer-events-none">
                <div className="container pt-4">
                    <div className="hud-panel pointer-events-auto flex h-14 items-center justify-between px-4">
                        <a
                            href="/"
                            className="flex items-center gap-3 text-left"
                        >
                            <span className="flex size-9 items-center justify-center border border-primary/35 bg-primary/10 text-primary">
                                <CircuitBoard size={18} />
                            </span>
                            <span>
                                <span className="block font-anton text-lg leading-none tracking-wide text-glow">
                                    FARDIN SARAF
                                </span>
                            </span>
                        </a>

                        <nav className="hidden items-center gap-1 md:flex">
                            {MENU_LINKS.slice(1).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                <button
                    className={cn(
                        'group pointer-events-auto size-12 absolute top-5 right-5 md:right-10 z-[2] border border-primary/30 bg-background/80 text-primary backdrop-blur',
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? (
                        <X className="mx-auto" size={20} />
                    ) : (
                        <Menu className="mx-auto" size={20} />
                    )}
                </button>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/75 backdrop-blur-sm transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-2rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
                    'hud-panel flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="hud-kicker mb-5 md:mb-8">SOCIAL</p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize text-muted-foreground transition hover:text-primary"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="hud-kicker mb-5 md:mb-8">MENU</p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-xl flex items-center gap-3 transition hover:text-primary"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 bg-white/20 flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                />
                                            </span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="hud-kicker mb-4">GET IN TOUCH</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-primary"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
