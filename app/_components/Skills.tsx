import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import Image from 'next/image';

const Skills = () => {
    return (
        <section
            id="my-stack"
            className="flex min-h-[calc(100svh-4.5rem)] scroll-mt-[4.5rem] items-center"
        >
            <div className="container py-8 md:py-10">
                <SectionTitle title="Tech Stack" />

                <div className="grid gap-5">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div
                            className="hud-panel grid gap-5 p-5 md:grid-cols-[190px_1fr] md:p-7"
                            key={key}
                        >
                            <div>
                                <p className="hud-kicker">Category</p>
                                <p className="mt-3 font-anton text-3xl uppercase leading-none text-primary lg:text-4xl">
                                    {key.includes('/') ? (
                                        <>
                                            {key.split('/')[0].trim()} /
                                            <br />
                                            {key.split('/')[1].trim()}
                                        </>
                                    ) : (
                                        key
                                    )}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {value.map((item) => (
                                    <div
                                        className="group flex min-h-14 items-center gap-3 border border-primary/15 bg-black/25 px-3 py-2.5 transition hover:border-primary/50 hover:bg-primary/10"
                                        key={item.name}
                                    >
                                        {'icon' in item && item.icon ? (
                                            <div className="flex size-9 shrink-0 items-center justify-center border border-primary/15 bg-background/70">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width="28"
                                                    height="28"
                                                    className="max-h-7 object-contain opacity-90 transition group-hover:scale-110"
                                                />
                                            </div>
                                        ) : null}
                                        <span className="text-sm font-medium capitalize text-foreground">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
