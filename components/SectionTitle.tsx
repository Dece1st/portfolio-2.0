import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <span
                    className={cn(
                        'relative size-5 border border-primary/50 before:absolute before:left-1/2 before:top-1/2 before:size-2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-primary before:shadow-[0_0_18px_hsl(var(--primary))]',
                        classNames?.icon,
                    )}
                />
            )}
            <h2
                className={cn(
                    'hud-kicker text-sm leading-none text-foreground',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
