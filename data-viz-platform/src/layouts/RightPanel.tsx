import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { togglePanel, setSearchQuery, toggleVariable, setActiveVariable } from '../store/silces/rightPanelSlice';
import { X } from 'lucide-react';
import SearchBar from '../components/rightPanel/SearchBar';
import Variable from '../components/rightPanel/Variable';
import Accordion from '../components/rightPanel/VariableAccordion';

interface CategoryVariables {
    id: string;
    name: string;
    isActive: boolean;
    description?: string;
}

interface Categories {
    [key: string]: CategoryVariables[];
}

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

    const getFilteredCategories = () => {
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
        // Implement autofill logic here
        console.log('Autofill clicked');
    };

    const handleRerun = () => {
        // Implement rerun logic here
        console.log('Rerun clicked');
    };

    // Find active variable details
    const getActiveVariableDetails = () => {
        if (!activeVariable) return null;

        for (const categoryVars of Object.values(categories)) {
            const found = categoryVars.find(v => v.id === activeVariable);
            if (found) return found;
        }
        return null;
    };

    const activeVariableDetails = getActiveVariableDetails();

    return (
        <div
            className={`fixed inset-y-0 right-0 w-[480px] bg-[#1C1C1C] transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-xl border-l border-[#2A2A2A] z-50`}
            ref={panelRef}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#2A2A2A]">
                <h2 className="text-xl font-medium text-white">Edit Variables</h2>
                <button
                    onClick={() => dispatch(togglePanel())}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Search and Actions */}
            <div className="p-4">
                <SearchBar
                    value={searchQuery}
                    onChange={handleSearch}
                    onAutofill={handleAutofill}
                    onRerun={handleRerun}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col h-[calc(100vh-180px)]">
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#B4FF39] border-t-transparent" />
                        </div>
                    ) : (
                        <>
                            {/* Categories */}
                            {Object.entries(getFilteredCategories()).map(([category, variables]) => (
                                <div key={category} className="space-y-3">
                                    <h3 className="text-sm text-gray-400">{category}</h3>
                                    <div className="space-y-2">
                                        {variables.map(variable => (
                                            <Variable
                                                key={variable.id}
                                                name={variable.name}
                                                isSelected={variable.isActive}
                                                description={variable.description}
                                                onSelect={() => dispatch(toggleVariable(variable.id))}
                                                onInfoClick={() => dispatch(setActiveVariable(variable.id))}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Accordions */}
                            <div className="space-y-2 pt-4">
                                <Accordion title="Primary Variables">
                                    <div className="space-y-2">
                                        <Variable
                                            name="Primary Variable 1"
                                            isSelected={true}
                                            description="This is a primary variable"
                                            onSelect={() => { }}
                                            onInfoClick={() => { }}
                                        />
                                    </div>
                                </Accordion>

                                <Accordion title="Secondary Variables">
                                    <div className="space-y-2">
                                        <Variable
                                            name="Secondary Variable 1"
                                            isSelected={false}
                                            description="This is a secondary variable"
                                            onSelect={() => { }}
                                            onInfoClick={() => { }}
                                        />
                                    </div>
                                </Accordion>
                            </div>
                        </>
                    )}
                </div>

                {/* Variable Info Panel */}
                {activeVariableDetails && (
                    <div className="border-t border-[#2A2A2A] bg-[#2A2A2A] p-4 animate-slideUp">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    {activeVariableDetails.name}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {activeVariableDetails.description}
                                </p>
                            </div>
                            <button
                                onClick={() => dispatch(setActiveVariable(null))}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RightPanel;