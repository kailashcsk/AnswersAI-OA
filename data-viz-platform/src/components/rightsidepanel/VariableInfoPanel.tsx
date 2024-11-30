import { Info } from 'lucide-react';

interface VariableInfoPanelProps {
    title: string;
    description: string;
}

export const VariableInfoPanel = ({ title, description }: VariableInfoPanelProps) => {
    return (
        <div className="bg-[#222324] rounded-lg p-6 border border-[#2A2A2A]">
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-white text-lg">{title}</h3>
                <Info size={16} className="text-gray-400" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};