import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { BriefcaseBusiness } from 'lucide-react';

const Experiences = () => {
    return (
        <section
            className="flex min-h-[calc(100svh-4.5rem)] scroll-mt-[4.5rem] items-center"
            id="my-experience"
        >
            <div className="container py-8 md:py-10">
                <SectionTitle title="Relevant Experience" />

                <div className="hud-panel p-5 md:p-8">
                    <div className="grid gap-5">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={`${item.company}-${item.title}`}
                                className="experience-item border border-primary/15 bg-black/20 p-5 transition hover:border-primary/45 hover:bg-primary/10 md:p-6"
                            >
                                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                                    <div className="flex gap-4">
                                        <div className="flex shrink-0 items-start gap-3">
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
                                            <p className="mt-2 font-anton text-3xl leading-none text-foreground md:text-4xl">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="hud-readout h-fit md:text-right">
                                        {item.duration}
                                    </p>
                                </div>

                                <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground/80 md:ml-[4.9rem] md:text-base md:leading-7">
                                    {item.bullets.map((bullet) => (
                                        <li
                                            key={bullet}
                                            className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:bg-primary"
                                        >
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
