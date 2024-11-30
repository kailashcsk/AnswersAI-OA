
import ChevronDownButton from '../dashboard/ChevronDownButton';


interface CollapsibleSectionProps {
    title: string;
    expanded?: boolean;
    onToggle?: () => void;
}

export const CollapsibleSection = ({
    title,
    expanded = false,
    onToggle
}: CollapsibleSectionProps) => {
    return (
        <div className="bg-[#222324] rounded-[4px] border border-[#525252]">
            <div className="flex items-center h-[60px] px-6">
                <span className="text-[#C8E972] text-base flex-grow font-[500] text-[20px] font-inter leading-[30px]">{title}</span>
                <div className="ml-auto">
                    <ChevronDownButton
                        onClick={onToggle}
                        className={`transform transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};