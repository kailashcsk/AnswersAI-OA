import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'icon-only' | 'with-text';
    className?: string;
}

const ActionButton = ({
    children,
    variant = 'icon-only',
    className = '',
    ...props
}: ActionButtonProps) => {
    const baseStyles = "bg-[#242424] rounded border border-[#5A5A5A] border-opacity-70 transition-colors hover:bg-neutral-800";
    const variantStyles = variant === 'icon-only'
        ? "p-2 w-[38px] h-[38px]"
        : "px-4 py-2";
    const textStyles = "text-sm text-white";

    return (
        <button
            className={twMerge(
                baseStyles,
                variantStyles,
                textStyles,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default ActionButton;