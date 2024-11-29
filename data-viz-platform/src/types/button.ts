export type ButtonVariant = 'icon-only' | 'with-text';

export interface BaseButtonProps {
    variant?: ButtonVariant;
    className?: string;
}

export type ActionButtonType = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;