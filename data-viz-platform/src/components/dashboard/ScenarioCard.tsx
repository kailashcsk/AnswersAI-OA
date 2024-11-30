import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const ScenarioCard = () => {
    // Get scenario results from Redux store
    const { scenarioResults } = useSelector((state: RootState) => state.dashboard);

    return (
        <div className="space-y-4">
            {scenarioResults.map((scenario) => (
                <div
                    key={scenario.id}
                    className="rounded-[6px] p-4 bg-[#CCFF0005] border border-custom-green xl:h-[54px]"
                >
                    
                    <div className="flex justify-between items-center">
                        <p className="text-[#B3E237] text-[16px] font-[500] leading-[24px] text-left no-underline decoration-skip-ink-none font-inter">
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