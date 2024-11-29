import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ScenarioCard = () => {
    // Get scenario results from Redux store
    const { scenarioResults } = useSelector((state: RootState) => state.dashboard);

    return (
        <div className="space-y-2">
            {scenarioResults.map((scenario) => (
                <div
                    key={scenario.id}
                    className="p-4 rounded-lg border border-[#3A3A3A] bg-[#1C1C1C] flex justify-between items-center"
                >
                    <p className="text-[#B4FF39] text-sm">
                        {scenario.description}
                    </p>
                    <button
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="More options"
                    >
                        ⋯
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ScenarioCard;