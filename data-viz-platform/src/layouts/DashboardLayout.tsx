import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Clock, Share2, Zap, ChevronUp } from 'lucide-react';
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
        <>
            <div className="flex-1 min-h-0 p-6 bg-[#161618] overflow-auto">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-white" strokeWidth={1.5} />
                        <h1 className="text-xl font-semibold text-white">Charging Station</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-neutral-900 p-2 rounded-lg">
                            <Clock className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                        </button>
                        <button
                            className="bg-neutral-900 px-4 py-2 rounded-lg text-sm text-white"
                            onClick={() => dispatch(togglePanel())}
                        >
                            Edit Variables
                        </button>
                        <button className="bg-neutral-900 p-2 rounded-lg">
                            <Share2 className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Best Scenario Results */}
                <section className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <h2 className="text-lg font-medium text-[#B4FF39]">Best Scenario Results</h2>
                        <ChevronUp className="w-4 h-4 text-[#B4FF39]" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                        <div className="bg-black rounded-lg p-4 bg-[#CCFF0005] border border-custom-green">
                            <p className="text-[#C9FF3B] text-sm">
                                The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                            </p>
                        </div>
                        <div className="bg-black rounded-lg p-4 bg-[#CCFF0005] border border-custom-green">
                            <p className="text-[#C9FF3B] text-sm">
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
            </div>
            <RightPanel />
        </>
    );
};

export default DashboardLayout;