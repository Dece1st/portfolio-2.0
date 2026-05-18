import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
    index: number;
    project: IProject;
}

const Project = ({ index, project }: Props) => {
    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item hud-panel group block overflow-hidden"
        >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-primary/20 bg-black/30">
                <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    width="720"
                    height="450"
                    className="h-full w-full object-cover object-top opacity-70 saturate-[0.75] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,8,13,0.8))]" />
                <div className="absolute left-4 top-4 hud-readout text-primary">
                    SYS-{(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="absolute right-4 top-4 flex size-10 items-center justify-center border border-primary/30 bg-black/50 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="hud-kicker">{project.year}</p>
                        <h4 className="mt-3 font-anton text-4xl leading-none text-foreground transition group-hover:text-primary">
                            {project.title}
                        </h4>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            className="border border-primary/15 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground"
                            key={tech}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
