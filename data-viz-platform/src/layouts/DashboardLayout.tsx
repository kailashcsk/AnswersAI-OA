import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Zap, Sparkles } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Chart from '../components/dashboard/Chart';
import KPICard from '../components/dashboard/KPICard';
import ScenarioCard from '../components/dashboard/ScenarioCard';
import { RootState } from '../store/store';
import { setLoading, setError } from '../store/silces/dashboardSlice';
import { togglePanel } from '../store/silces/rightPanelSlice';
import ActionButton from '../components/shared/ActionButton';
import ChevronUpButton from '../components/dashboard/ChevronUpButton';
import ChevronDownButton from '../components/dashboard/ChevronDownButton';
import { RightSidePanel } from './RightSidePanel';

const DashboardLayout = () => {
    const [isScenarioCollapsed, setIsScenarioCollapsed] = useState(false);
    const dispatch = useDispatch();
    const {
        kpiData,
        chartData,
        selectedChartMetric,
        isLoading,
        error
    } = useSelector((state: RootState) => state.dashboard);

    const toggleScenarioCollapse = () => {
        setIsScenarioCollapsed(!isScenarioCollapsed);
    };
    const isRightPanelOpen = useSelector((state: RootState) => state.rightPanel.isOpen);

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

        <div className="flex-1 h-screen bg-[#161618] relative">
            <div className={`absolute inset-0 overflow-y-auto transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'blur-[2px] pointer-events-none' : ''}`}>
                <div className="min-h-full p-10 pb-24 border border-[#525252] rounded-lg">
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
                            <div className="flex items-center gap-2 mb-3" onClick={toggleScenarioCollapse}>
                                {isScenarioCollapsed ? (
                                    <ChevronDownButton />
                                ) : (
                                    <ChevronUpButton />
                                )}
                            </div>
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isScenarioCollapsed ? 'h-0 opacity-0' : 'h-auto opacity-100 '
                                }`}
                        >
                            <ScenarioCard />
                        </div>
                    </section>

                    {/* Chart and KPIs */}
                    <div className="grid grid-cols-12 gap-6 pt-2 mb-10">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-7 2xl:col-span-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight sm:leading-9 text-left no-underline font-roobert">
                                    Graphs
                                </h2>
                            </div>

                            <Chart
                                data={chartData}
                                selectedMetric={selectedChartMetric}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-5 2xl:col-span-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight sm:leading-9 text-left no-underline font-roobert">
                                    Key Performance Indicators
                                </h2>
                                <button className="bg-[#18181A80] px-2 sm:px-3 py-1 rounded-[5px] text-xs sm:text-sm border border-[#5A5A5AA1] text-[#FCFCFC] font-medium">
                                    Variables +
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap- sm:gap-6 mb-6">
                                {kpiData.map((kpi) => (
                                    <KPICard key={kpi.id} {...kpi} />
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className={`fixed right-0 top-0 h-full z-[60] transition-transform duration-300 ease-in-out
                ${isRightPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <RightSidePanel />
            </div>
        </div>




    );
};

export default DashboardLayout;