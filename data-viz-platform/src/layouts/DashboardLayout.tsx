import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Clock, Share2, Zap, ChevronUp, Sparkles, History } from 'lucide-react';
import Chart from '../components/dashboard/Chart';
import KPICard from '../components/dashboard/KPICard';
import ScenarioCard from '../components/dashboard/ScenarioCard';
import { RootState } from '../store/store';
import { setLoading, setError } from '../store/silces/dashboardSlice';
import RightPanel from './RightPanel';
import { togglePanel } from '../store/silces/rightPanelSlice';

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
                    <Zap className="lightning-icon fill-current pr-2"/>
                        <h1 className="charging-station-heading">Charging Station</h1>
                    </div>

                    {/* Right Section */}
                    <div className="flex gap-2">
                        {/* Clock Button */}
                        <button className="bg-neutral-900 p-2 rounded-lg">
                            <History className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                        </button>

                        {/* Edit Variables Button */}
                        <button
                            className="bg-neutral-900 px-4 py-2 rounded-lg text-sm text-white"
                            onClick={() => dispatch(togglePanel())}
                        >
                            Edit Variables
                        </button>

                        {/* Share Button */}
                        <button className="action-button">
                            <svg
                                className="button-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M16 8.05a4 4 0 1 1-2.34 7.45L8.34 13.4a4 4 0 1 1 0-2.82l5.32-2.1A4 4 0 1 1 16 8.05z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Best Scenario Results */}
                <section className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles
                            className="w-[18px] h-[18px] text-[#DAFD7F] fill-current"

                        />
                        <h2 className="best-scenario-heading">
                            Best Scenario Results
                        </h2>
                        <ChevronUp className="w-4 h-4 text-[#DCFF7FFD]" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                        <div className="bg-black rounded-lg p-4 bg-[#CCFF0005] border border-custom-green">
                            <p className="text-[#C9FF3B] text-[16px] font-medium leading-6 text-left no-underline decoration-skip-ink-none">
                                The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                            </p>
                        </div>
                        <div className="bg-black rounded-lg p-4 bg-[#CCFF0005] border border-custom-green">
                            <p className="text-[#C9FF3B] text-[16px] font-medium leading-6 text-left no-underline decoration-skip-ink-none">
                                The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                            </p>
                        </div>
                    </div>

                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <div className="bg-black border border-neutral-800 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-medium text-white">Graphs</h2>
                                <select className="bg-neutral-900 text-sm text-white px-3 py-1.5 rounded-lg border border-neutral-800">
                                    <option>Unsatisfied Demand %</option>
                                </select>
                            </div>
                            <Chart
                                data={chartData}
                                selectedMetric={selectedChartMetric}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium text-white">Key Performance Indicators</h2>
                            <button className="bg-neutral-900 px-3 py-1 rounded-lg text-sm text-white">
                                Variables +
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
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