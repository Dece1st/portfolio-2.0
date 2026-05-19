import Link from 'next/link';
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Variant } from '@/types';
import { cn } from '@/lib/utils';

const Child = ({ icon }: any) => (
    <span className="flex items-center justify-center gap-3">
        <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
        {!icon && 'Processing...'}
    </span>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
    as?: 'link' | 'button';
    loading?: boolean;
    icon?: boolean;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: Variant;
} & (ComponentProps<typeof Link> | ButtonProps);

const Button = ({
    loading,
    variant,
    className,
    children,
    as = 'link',
    icon = false,
    ...rest
}: Props) => {
    const variantClasses = {
        primary: `border border-primary/45 bg-primary/12 text-primary shadow-[0_0_20px_rgba(176,118,255,0.08)] hover:bg-primary hover:text-primary-foreground`,
        secondary: `border border-secondary/50 bg-secondary/15 text-secondary hover:bg-secondary hover:text-secondary-foreground`,
        success: `bg-green-500 text-white hover:bg-green-600`,
        warning: `bg-orange-500 text-white hover:bg-orange-600`,
        danger: `bg-destructive text-destructive-foreground hover:bg-destructive/70`,
        info: `bg-blue-500 text-white hover:bg-blue-600`,
        light: `border border-foreground/20 bg-foreground/10 text-foreground hover:bg-foreground/20`,
        dark: `bg-foreground text-background hover:bg-foreground/80`,
        link: `text-foreground hover:text-primary`,
        'no-color': '',
    }[variant || 'primary'];

    const iconClasses = cn(
        'min-w-9 aspect-square text-xl p-0 inline-flex items-center justify-center rounded-md',
        variantClasses,
    );

    const buttonClasses = cn(
        `group h-12 px-8 inline-flex justify-center items-center gap-2 text-sm uppercase font-anton tracking-[0.22em] outline-none transition-colors relative overflow-hidden`,
        variantClasses,
        { [iconClasses]: icon },
        className,
    );

    if (as === 'link') {
        const props = rest as ComponentProps<typeof Link>;

        if (props.target === '_blank') {
            return (
                <a
                    className={buttonClasses}
                    {...props}
                    href={props.href.toString() || '#'}
                >
                    {variant !== 'link' && (
                        <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></span>
                    )}
                    <span className="z-[1]">
                        {loading ? <Child icon={icon} /> : children}
                    </span>
                </a>
            );
        }

        return (
            <Link className={buttonClasses} {...props} href={props.href || '#'}>
                {variant !== 'link' && (
                    <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></span>
                )}
                <span className="z-[1]">
                    {loading ? <Child icon={icon} /> : children}
                </span>
            </Link>
        );
    } else if (as === 'button') {
        const props = rest as ButtonProps;

        return (
            <button className={buttonClasses} {...props}>
                {variant !== 'link' && (
                    <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></span>
                )}
                <span className="z-[1]">
                    {loading ? <Child icon={icon} /> : children}
                </span>
            </button>
        );
    }
};

export default Button;
