import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, X, Info, Sparkles, RotateCw } from 'lucide-react';
import {
    togglePanel,
    setSearchQuery,
    toggleVariable,
    setActiveVariable,
} from '../store/silces/rightPanelSlice';
import type { RootState } from '../store/store';
import { VariableButton } from '../components/rightsidepanel/VariableButton';
import { VariableCategory } from '../components/rightsidepanel/VariableCategory';
import { CollapsibleSection } from '../components/rightsidepanel/CollapsibleSection';


export const RightSidePanel = () => {
    const dispatch = useDispatch();
    const {
        isOpen,
        searchQuery,
        categories,
        activeVariable
    } = useSelector((state: RootState) => state.rightPanel);

    const [primaryExpanded, setPrimaryExpanded] = useState(false);
    const [secondaryExpanded, setSecondaryExpanded] = useState(false);

    if (!isOpen) return null;

    // Find active variable details
    const activeVariableDetails = Object.values(categories)
        .flat()
        .find(v => v.id === activeVariable);

    return (
        <div className={`fixed right-0 top-0 w-[min(691px,48vw)] h-screen bg-[#0E0D0D] border-[2px] border-[#525252] overflow-y-auto transform transition-transform duration-300 ease-in-out  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-[#FFFFFF] text-[24px] font-inter font-[500] leading-[36px]">Edit Variables</h2>
                    <button
                        onClick={() => dispatch(togglePanel())}
                        className="text-[#FFFFFF]"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Search and Actions */}
                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                            placeholder="Search..."
                            className="w-full  h-[38px] bg-[#2C2E334D] border-0.67 border-[#5A5A5A] rounded-[5px] pl-10 pr-4 py-2 text-[#EDEDED] font-inter font-[500] text-[14px] leading-[21px] placeholder-gray-400 focus:outline-none focus:border-[#C8E972]"
                        />
                    </div>
                    <button className=" h-[38px] px-4  bg-[#242424] text-[#FFFFFF] font-roobert font-[500] text-[16px] leading-[24px] rounded-[4px] border-0.67 border-[#5A5A5A] flex items-center gap-2">
                        <Sparkles size={15} className="text-[#FFFFFF] fill-current" />
                        Autofill
                    </button>
                    <button className="px-4 h-[38px] bg-[#23291E] text-[#C9FF3B] rounded-[4px] border-0.67 border-[#577113] font-roobert font-[500] text-[16px] leading-[24px] flex items-center gap-2">
                        <RotateCw size={15} className="text-[#C9FF3B]" />
                        Rerun
                    </button>
                </div>

                {/* Main Card Container */}
                <div>
                    {/* Variables Section */}
                    <div className="p-6 space-y-8  border border-[#525252] rounded-t-[5px] bg-[#161618]">
                        <div className="h-[400px] overflow-y-auto pr-2 custom-scrollbar"
                            onMouseLeave={() => {
                                // Clear active variable when mouse leaves the variables section
                                setTimeout(() => {
                                    dispatch(setActiveVariable(null));
                                }, 1500);
                            }}>
                            <div className="space-y-8">
                                {Object.entries(categories).map(([categoryName, variables]) => (
                                    <VariableCategory key={categoryName} title={categoryName}>
                                        {variables
                                            .filter(variable =>
                                                variable.name.toLowerCase().includes(searchQuery.toLowerCase())
                                            )
                                            .map(variable => (
                                                <VariableButton
                                                    key={variable.id}
                                                    id={variable.id}
                                                    label={variable.name}
                                                    active={variable.isActive}
                                                    hasAddIcon={!variable.isActive}
                                                    hasDropdown={variable.isActive}
                                                    onClick={() => dispatch(toggleVariable(variable.id))}
                                                />
                                            ))}
                                    </VariableCategory>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider and Variable Info Panel */}
                    {activeVariableDetails && activeVariableDetails.isActive && (
                        <div
                            className="border border-[#525252] bg-[#222324] px-7 pb-7 pt-3 rounded-b-[5px]
            animate-fadeIn transition-all duration-300 ease-in-out"
                        >
                            <div className="pt-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-[#FFFFFF] font-inter font-[500] text-[20px] leading-[17.6px] pr-1">
                                        {activeVariableDetails.name}
                                    </h3>
                                    <Info size={18} className="text-[#FFFFFF] h-[15px] w-[15px]" />
                                </div>
                                <p className="text-[#BBBBBB] font-inter font-[400] text-[15px] leading-[22.5px] text-left">
                                    {activeVariableDetails.description || "No description available."}
                                </p>
                            </div>
                        </div>
                    )}
                </div>


                {/* Collapsible Sections */}
                <div className="space-y-4">
                    <CollapsibleSection
                        title="Primary Variables"
                        expanded={primaryExpanded}
                        onToggle={() => setPrimaryExpanded(!primaryExpanded)}
                    />
                    <CollapsibleSection
                        title="Secondary Variables"
                        expanded={secondaryExpanded}
                        onToggle={() => setSecondaryExpanded(!secondaryExpanded)}
                    />
                </div>
            </div>
        </div>
    );
};