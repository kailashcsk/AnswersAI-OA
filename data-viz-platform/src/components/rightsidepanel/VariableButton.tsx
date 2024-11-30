// components/rightsidepanel/VariableButton.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Sparkles, Plus, Check } from 'lucide-react';
import { setActiveVariable } from '../../store/silces/rightPanelSlice';
import { useHoverDelay } from '../../hooks/useHoverDelay';

interface VariableButtonProps {
    id: string;
    label: string;
    active?: boolean;
    hasAddIcon?: boolean;
    hasDropdown?: boolean;
    onClick?: () => void;
}

export const VariableButton = ({
    id,
    label,
    active = false,
    hasAddIcon = false,
    hasDropdown = false,
    onClick
}: VariableButtonProps) => {
    const dispatch = useDispatch();

    const { handleMouseEnter, handleMouseLeave } = useHoverDelay({
        onHoverStart: () => {
            if (active) {  
                // Only show info panel for active/selected variables
                dispatch(setActiveVariable(id));
            }
        },
        onHoverEnd: () => {
            dispatch(setActiveVariable(null));
        }
    });

    return (
        <button
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex items-center px-2 h-[33px]  text-[15px] rounded-[20px] my-1
        ${active
                ? 'bg-[#282E16] text-[#C8E972] border border-[#C9FF3B] font-inter font-[400] leading-[22.5px] text-[15px]'
                : 'bg-[#5959594D] text-[#D5D5D5] border border-[#EEEEEE] font-inter font-[400] leading-[22.5px] text-[15px]'
        }`}
        >
            <span className="mr-7">{label}</span>
            <Sparkles size={11} className="text-current fill-current mr-1" />
            {hasAddIcon && <Plus size={16} className="text-current " />}
            {hasDropdown && <Check size={16} className="text-current" />}
        </button>
    );
};