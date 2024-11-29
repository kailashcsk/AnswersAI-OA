import React from 'react';
import { useDispatch } from 'react-redux';
import { setChartMetric } from '../../store/silces/dashboardSlice';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

interface ChartProps {
    data: Array<{
        month: string;
        value: number;
        isCurrent?: boolean;
    }>;
    selectedMetric: string;
}


const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#2A2A2A] p-3 rounded-lg border border-[#3A3A3A]">
                <p className="text-white">${payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};

const Chart: React.FC<ChartProps> = ({ data, selectedMetric }) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-[#222324] p-6 rounded-[5px] border border-[#525252]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Graphs</h3>
                <select
                    className="bg-[#2A2A2A] text-white px-4 py-2 rounded-lg border border-[#3A3A3A]"
                    value={selectedMetric}
                    onChange={(e) => dispatch(setChartMetric(e.target.value))}
                >
                    <option value="Unsatisfied Demand %">Unsatisfied Demand %</option>
                    {/* Add other metrics as needed */}
                </select>
            </div>

            <div className='h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#2A2A2A"
                        />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF' }}
                            tickFormatter={(value) => `$${value / 1000}K`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#B4FF39"
                            strokeWidth={2}
                            dot={{ fill: '#B4FF39', r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;