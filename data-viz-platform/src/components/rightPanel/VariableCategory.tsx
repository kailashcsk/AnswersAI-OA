import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleVariable, setActiveVariable } from '../../store/silces/rightPanelSlice';
import { PlusIcon, CheckIcon, InfoIcon } from 'lucide-react';

interface Variable {
    id: string;
    name: string;
    isActive: boolean;
    description?: string;
}

interface VariableCategoryProps {
    title: string;
    variables: Variable[];
}

const VariableCategory: React.FC<VariableCategoryProps> = ({ title, variables }) => {
    const dispatch = useDispatch();
    const activeVariable = useSelector((state: RootState) => state.rightPanel.activeVariable);

    return (
        <div className="space-y-3">
            <h3 className="text-sm text-gray-400">{title}</h3>
            <div className="grid grid-cols-1 gap-2">
                {variables.map((variable) => (
                    <div
                        key={variable.id}
                        className="flex items-center gap-2 group"
                    >
                        <button
                            className={`flex-1 flex items-center justify-between px-4 py-2 rounded-lg border 
                ${variable.isActive
                                    ? 'bg-[#2A2A2A] border-[#B4FF39] text-[#B4FF39]'
                                    : 'bg-[#2A2A2A] border-[#3A3A3A] text-white hover:border-gray-500'}`}
                            onClick={() => dispatch(toggleVariable(variable.id))}
                        >
                            <span>{variable.name}</span>
                            <div className="flex items-center gap-2">
                                {variable.isActive ? (
                                    <CheckIcon size={16} />
                                ) : (
                                    <PlusIcon size={16} className="opacity-0 group-hover:opacity-100" />
                                )}
                                <button
                                    className="p-1 hover:bg-[#3A3A3A] rounded-full transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(setActiveVariable(variable.id));
                                    }}
                                >
                                    <InfoIcon size={16} />
                                </button>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VariableCategory;