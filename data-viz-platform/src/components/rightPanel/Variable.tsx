import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

interface VariableProps {
    name: string;
    isSelected: boolean;
    description?: string;
    onSelect: () => void;
    onInfoClick: () => void;
}

const Variable: React.FC<VariableProps> = ({
    name,
    isSelected,
    description,
    onSelect,
    onInfoClick
}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative group">
            <button
                onClick={onSelect}
                className={`
          w-full px-4 py-3 rounded-lg flex items-center justify-between
          transition-all duration-200
          ${isSelected
                        ? 'bg-[#2A2A2A] border border-[#B4FF39] text-[#B4FF39]'
                        : 'bg-[#2A2A2A] border border-[#3A3A3A] text-white hover:border-gray-500'
                    }
        `}
            >
                <span>{name}</span>
                <div className="flex items-center gap-2">
                    {isSelected && <Check className="h-4 w-4" />}
                    <button
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        onClick={(e) => {
                            e.stopPropagation();
                            onInfoClick();
                        }}
                        className="p-1 hover:bg-[#3A3A3A] rounded-full transition-colors"
                    >
                        <Info className="h-4 w-4" />
                    </button>
                </div>
            </button>

            {/* Tooltip */}
            {showTooltip && description && (
                <div className="absolute bottom-full left-0 mb-2 w-full z-10 animate-fadeIn">
                    <div className="bg-[#2A2A2A] text-sm text-gray-300 p-3 rounded-lg shadow-lg">
                        {description}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Variable;