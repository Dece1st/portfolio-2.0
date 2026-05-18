import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Mail, SatelliteDish } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pb-8 pt-section" id="contact">
            <div className="container">
                <div className="hud-panel grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-8">
                    <div>
                        <p className="hud-kicker">Final Transmission</p>
                        <h2 className="mt-4 font-anton text-5xl leading-none text-primary text-glow md:text-7xl">
                            BUILD THE NEXT INTERFACE
                        </h2>
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="mt-6 inline-flex items-center gap-3 text-lg text-foreground transition hover:text-primary"
                        >
                            <Mail size={20} />
                            {GENERAL_INFO.email}
                        </a>
                    </div>

                    <div className="min-w-[220px] border border-primary/15 bg-black/25 p-5">
                        <SatelliteDish className="text-secondary" />
                        <p className="hud-kicker mt-5">Channels</p>
                        <div className="mt-4 flex flex-col gap-3">
                            {SOCIAL_LINKS.slice(0, 3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="capitalize text-muted-foreground transition hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="mt-5 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Designed and built by Fardin Saraf
                </p>
            </div>
        </footer>
    );
};

export default Footer;
