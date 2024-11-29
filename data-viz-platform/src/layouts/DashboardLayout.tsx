import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Clock, Share2, Zap, ChevronUp, Sparkles, History } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Chart from '../components/dashboard/Chart';
import KPICard from '../components/dashboard/KPICard';
import ScenarioCard from '../components/dashboard/ScenarioCard';
import { RootState } from '../store/store';
import { setLoading, setError } from '../store/silces/dashboardSlice';
import RightPanel from './RightPanel';
import { togglePanel } from '../store/silces/rightPanelSlice';
import ActionButton from '../components/shared/ActionButton';
import ChevronUpButton from '../components/dashboard/ChevronUpButton';

const DashboardLayout = () => {
    const dispatch = useDispatch();
    const {
        kpiData,
        chartData,
        scenarioResults,
        selectedChartMetric,
        isLoading,
        error
    } = useSelector((state: RootState) => state.dashboard);

    useEffect(() => {
        dispatch(setLoading(true));
        try {
            // Fetch data here
            dispatch(setLoading(false));
        } catch (err) {
            dispatch(setError(err instanceof Error ? err.message : 'An error occurred'));
            dispatch(setLoading(false));
        }
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <div className="flex-1 min-h-0 p-10 bg-[#161618] overflow-auto border border-[#525252] rounded-lg">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-8">
                {/* Left Section */}
                <div className="flex items-center gap-2">
                    <Zap className="lightning-icon fill-current pr-2" />
                    <h1 className="charging-station-heading">Charging Station</h1>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 pb-5">
                    {/* History Button */}
                    <ActionButton
                        aria-label="History"
                        onClick={() => console.log('History clicked')}
                    >
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-21 h-18 text-neutral-400 text-[#B9B9B9]" />

                    </ActionButton>

                    {/* Edit Variables Button */}
                    <ActionButton
                        variant="with-text"
                        onClick={() => dispatch(togglePanel())}
                        className="w-21 h-18 text-neutral-400 text-[#FFFFFF] fw-bold"
                    >
                        Edit Variables
                    </ActionButton>

                    {/* Share Button */}
                    <ActionButton
                        aria-label="Share"
                        onClick={() => console.log('Share clicked')}
                    >
                        <FontAwesomeIcon
                            icon={faArrowUpFromBracket}
                            className="w-21 h-18 text-neutral-400 text-[#B9B9B9]"
                        />
                    </ActionButton>
                </div>
            </div>

            { /* Scenario Results */}
            <section className="mb-8 ">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles
                            className="w-[18px] h-[18px] text-[#DAFD7F] fill-current"

                        />
                        <h2 className="best-scenario-heading">
                            Best Scenario Results
                        </h2>

                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <ChevronUpButton onClick={() => console.log('Clicked!')} />
                    </div>
                </div>
                <ScenarioCard />
            </section>
    
                {/* Chart and KPIs */}
            <div className="grid grid-cols-12 gap-6 pt-2">
                <div className="col-span-8">
                    <div className="flex justify-between items-center pb-4">
                        <h2 className="text-[24px] font-[600] leading-[36px] text-left no-underline decoration-skip-ink-none font-roobert">Key Performance Indicators</h2>
                        </div>
                    <Chart
                        data={chartData}
                        selectedMetric={selectedChartMetric}
                    />
                </div>
                <div className="col-span-4 space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[24px] font-[600] leading-[36px] text-left no-underline decoration-skip-ink-none font-roobert">Key Performance Indicators</h2>
                        <button className="bg-[#18181A80] px-3 py-1 rounded-lg text-sm border border-[#5A5A5AA1] text-[#FCFCFC] font-[500] font">
                            Variables +
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {kpiData.map((kpi) => (
                            <KPICard key={kpi.id} {...kpi} />
                        ))}
                    </div>
                </div>
            </div>
            <RightPanel />  
        </div>




    );
};

export default DashboardLayout;