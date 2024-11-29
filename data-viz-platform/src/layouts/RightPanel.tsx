import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, Search } from 'lucide-react';
import { RootState } from '../store/store';
import { togglePanel, setSearchQuery, toggleVariable, setActiveVariable } from '../store/silces/rightPanelSlice';

interface CategoryVariables {
    id: string;
    name: string;
    isActive: boolean;
    description?: string;
}

interface Categories {
    [key: string]: CategoryVariables[];
}

interface VariableProps {
    name: string;
    isActive: boolean;
    description?: string;
    onSelect: () => void;
    onInfoClick: () => void;
}

const Variable: React.FC<VariableProps> = ({ 
    name, 
    isActive, 
    description, 
    onSelect, 
    onInfoClick 
}) => (
    <div className="relative group">
        <button
            onClick={onSelect}
            className={`
                w-full px-4 py-2.5 rounded-lg flex items-center justify-between
                ${isActive 
                    ? 'bg-[#1C1C1C] border border-[#B4FF39] text-[#B4FF39]' 
                    : 'bg-[#1C1C1C] border border-[#2A2A2A] text-white hover:border-gray-500'
                }
            `}
        >
            <span className="text-sm font-medium">{name}</span>
            <div className="flex items-center space-x-1">
                {isActive && <X className="h-4 w-4" />}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onInfoClick();
                    }}
                    className="p-1 hover:bg-[#2A2A2A] rounded-full"
                >
                    <X className="h-4 w-4 text-gray-400" />
                </button>
            </div>
        </button>
    </div>
);

const RightPanel: React.FC = () => {
    const dispatch = useDispatch();
    const {
        isOpen,
        categories,
        searchQuery,
        isLoading,
        activeVariable
    } = useSelector((state: RootState) => state.rightPanel);
    const panelRef = useRef<HTMLDivElement>(null);

    const getFilteredCategories = (): Categories => {
        if (!searchQuery) return categories;
        
        const lowercaseQuery = searchQuery.toLowerCase();
        const filtered: Categories = {};
        
        Object.entries(categories).forEach(([category, variables]) => {
            const filteredVars = variables.filter(variable =>
                variable.name.toLowerCase().includes(lowercaseQuery)
            );
            if (filteredVars.length > 0) {
                filtered[category] = filteredVars;
            }
        });
        
        return filtered;
    };

    const handleSearch = (value: string) => {
        dispatch(setSearchQuery(value));
    };

    const handleAutofill = () => {
        // Implement autofill logic
        console.log('Autofill clicked');
    };

    const handleRerun = () => {
        // Implement rerun logic
        console.log('Rerun clicked');
    };

    return (
        <div 
            className={`fixed inset-y-0 right-0 w-1/2 bg-[#1C1C1C] transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            ref={panelRef}
        >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2A2A2A]">
                <h2 className="text-lg font-semibold text-white">Edit Variables</h2>
                <button
                    onClick={() => dispatch(togglePanel())}
                    className="text-gray-400 hover:text-white"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-[#2A2A2A]">
                <div className="flex gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Search variables..."
                            className="w-full pl-10 pr-3 py-2 bg-[#2A2A2A] rounded-lg 
                                     border border-[#3A3A3A] text-white placeholder-gray-400
                                     focus:outline-none focus:border-[#B4FF39]"
                        />
                    </div>
                    <button 
                        onClick={handleAutofill}
                        className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A]"
                    >
                        Autofill
                    </button>
                    <button 
                        onClick={handleRerun}
                        className="px-4 py-2 border border-[#B4FF39] text-[#B4FF39] rounded-lg
                                 hover:bg-[#B4FF39]/10"
                    >
                        Rerun
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100vh-136px)] overflow-y-auto">
                <div className="p-4 space-y-6">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#B4FF39] border-t-transparent" />
                        </div>
                    ) : (
                        <>
                            {Object.entries(getFilteredCategories()).map(([category, variables]) => (
                                <div key={category} className="space-y-3">
                                    <h3 className="text-sm text-gray-400">{category}</h3>
                                    <div className="space-y-2">
                                        {variables.map((variable) => (
                                            <Variable
                                                key={variable.id}
                                                name={variable.name}
                                                isActive={variable.isActive}
                                                description={variable.description}
                                                onSelect={() => dispatch(toggleVariable(variable.id))}
                                                onInfoClick={() => dispatch(setActiveVariable(variable.id))}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            
        </div>
    );
};

export default RightPanel;