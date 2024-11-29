import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const ScenarioCard = () => {
    // Get scenario results from Redux store
    const { scenarioResults } = useSelector((state: RootState) => state.dashboard);

    return (
        <div className="space-y-2">
            {scenarioResults.map((scenario) => (
                <div
                    key={scenario.id}
                    className="bg-black rounded-lg p-4 bg-[#CCFF0005] border border-custom-green "
                >
                    
                    <div className="flex justify-between items-center">
                        <p className="text-[#C9FF3B] text-[16px] font-medium leading-6 text-left no-underline decoration-skip-ink-none font-inter">
                            {scenario.description}
                        </p>
                        <button
                            className="text-[#C8E972] flex items-center justify-center rounded-full pr-4"
                            aria-label="More options">
                            <FontAwesomeIcon icon={faEllipsis} className='w-[24px] h-[24px]'/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScenarioCard;