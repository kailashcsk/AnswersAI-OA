import { ChevronUp } from 'lucide-react';

interface ChevronUpButtonProps {
    onClick?: () => void;
    className?: string;
}

const ChevronUpButton: React.FC<ChevronUpButtonProps> = ({
    onClick,
    className = ''
}) => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-#18181A80">
            <button
                onClick={onClick}
                className={`relative flex items-center justify-center w-[44px] h-[34px] rounded-3xl border-2 border-[#C8E972] ${className}`}
            >
                <ChevronUp
                    className="w-[24px] h-[24px] text-[#C8E972]"
                    strokeWidth={2}
                />
            </button>
        </div>
    );
};

export default ChevronUpButton;