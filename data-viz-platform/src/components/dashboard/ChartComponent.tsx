import React from 'react';
import { useSelector } from 'react-redux';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    ReferenceLine,
    Tooltip,
    TooltipProps
} from 'recharts';
import { RootState } from '../../store/store';


import { CircleHelp, ArrowUpCircle } from 'lucide-react';

interface ChartDataPoint {
    month: string;
    value: number;
    isCurrent?: boolean;
    percentAboveTarget?: number;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: ChartDataPoint;
    }>;
}

interface CustomizedDotProps {
    cx: number;
    cy: number;
    payload: ChartDataPoint;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-[#222324] border border-[#525252] rounded-[5px] p-4 shadow-lg translate-y-[-100%]">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#FFFFFF] font-[700] text-[20px] font-inter leading-[24.2px] mr-12">
                        ${(data.value / 1000).toFixed(2)}k
                    </span>
                    <CircleHelp className="text-[#888888] w-[14px] h-[14px]" />
                </div>
                <div className="flex items-center text-[16px] text-[#878787] font-inter font-[400] leading-[19.36px]">
                    <ArrowUpCircle className="text-[#C8E972] w-[16px] h-[16px] mr-2 " />
                    {data.percentAboveTarget}% above target
                </div>
            </div>
        );
    }
    return null;
};

const CustomizedDot: React.FC<CustomizedDotProps> = ({ cx, cy, payload }) => {
    if (payload.isCurrent) {
        return (
            <>
                <circle cx={cx} cy={cy} r={6} fill="#202123" stroke="#B4FA72" strokeWidth={2} />
                <circle cx={cx} cy={cy} r={3} fill="#B4FA72" />
            </>
        );
    }
    return null;
};

const ChartComponent: React.FC = () => {
    const { chartData, selectedChartMetric } = useSelector((state: RootState) => state.dashboard);

    const formatYAxisTick = (value: number): string => {
        return `$${value / 1000}K`;
    };

    const currentPoint = chartData.find(point => point.isCurrent);

    return (
        <div className="bg-[#222324] rounded-[5px] p-7 border border-[#525252]">
            <div className="flex justify-end mb-10  pr-5">
                <select
                    value={selectedChartMetric}
                    className="bg-[#18181A80] text-[#FCFCFC] px-4 py-2 rounded-[5px] border border-[#5A5A5AA1] font-inter font-[500] text-[14px] leading-[21px] focus:outline-none focus:border-zinc-600"
                >
                    <option>Unsatisfied Demand %</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={363}>
                <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 20, left: 20, bottom: window.innerWidth < 768 ? 40 : 20 }}
                >
                    <CartesianGrid
                        vertical={false}
                        horizontal={true}
                        stroke="#343434"
                        strokeWidth={0.77}
                        strokeDasharray="3 3"
                    />
                    
                    
                    <XAxis
                        dataKey="month"
                        axisLine={true}
                        tickLine={false}
                        tick={(props) => {
                            const { x, y, payload } = props;
                            return (
                                <g transform={`translate(${x},${y})`}>
                                    <text
                                        x={0}
                                        y={0}
                                        dy={16}
                                        textAnchor="middle"
                                        fill="#FFFFFF"
                                    >
                                        {payload.value}
                                    </text>
                                    {payload.value === 'May' && (
                                        <text
                                            x={0}
                                            y={12}
                                            dy={16}
                                            textAnchor="middle"
                                            fill="#575757"
                                            fontSize="12"
                                        >
                                            Now
                                        </text>
                                    )}
                                </g>
                            );
                        }}
                        ticks={['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']}  // Fixed ticks array
                        padding={{ left: 20, right: 20 }}
                        
                    />
                       
                    
                    <YAxis
                        axisLine={true}
                        tickLine={false}
                        tick={{ fill: '#FFFFFF', strokeWidth: 0.77 }}
                        tickFormatter={formatYAxisTick}
                        dx={-10} 
                    />
                    {currentPoint && (
                        <ReferenceLine
                            x={currentPoint.month}
                            stroke="#C8E972"
                            strokeDasharray="3 3"
                            strokeWidth={3}
                        />
                    )}
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: '#C8E972',  
                            strokeWidth: 2.3,
                            strokeDasharray: '5 5'  
                        }}
                        
                    />
                    <Line
                        type="linear" 
                        dataKey="value"
                        stroke="#C8E972"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{
                            r: 6,
                            stroke: '#C8E972',
                            strokeWidth: 3,
                            fill: '#222324'
                        }}
                        isAnimationActive={false}
                    />
                    <Line
                        type="linear"
                        dataKey="value"
                        stroke="#8AA14F33"
                        dot={(props) => <CustomizedDot {...props} />}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartComponent;