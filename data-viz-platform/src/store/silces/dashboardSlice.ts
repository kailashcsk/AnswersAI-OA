import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartData {
    month: string;
    value: number;
    isCurrent?: boolean;
}

interface KPIData {
    id: string;
    title: string;
    value: string | number;
    description: string;
    icon?: string;
}

interface ScenarioResult {
    id: string;
    description: string;
}

interface DashboardState {
    chartData: ChartData[];
    kpiData: KPIData[];
    scenarioResults: ScenarioResult[];
    selectedChartMetric: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: DashboardState = {
    chartData: [
        { month: 'Apr', value: 40000 },
        { month: 'May', value: 20000, isCurrent: true },
        { month: 'Jun', value: 45000 },
        { month: 'Jul', value: 90000 },
        { month: 'Aug', value: 60000 },
        { month: 'Sep', value: 35000 },
        { month: 'Oct', value: 58000 },
    ],
    kpiData: [
        {
            id: '1',
            title: 'Infrastructure Units',
            value: '€421.07',
            description: 'This describes variable two and what the shown data means.'
        },
        {
            id: '2',
            title: 'Charging Growth',
            value: '33.07',
            description: 'This describes variable two and what the shown data means.'
        },
        {
            id: '3',
            title: 'Localization change',
            value: '21.9%',
            description: 'This describes variable two and what the shown data means.'
        },
        {
            id: '4',
            title: 'Fleet growth',
            value: '7.03%',
            description: 'This describes variable two and what the shown data means.'
        }
    ],
    scenarioResults: [
        {
            id: '1',
            description: 'The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.'
        },
        {
            id: '2',
            description: 'The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.'
        }
    ],
    selectedChartMetric: 'Unsatisfied Demand %',
    isLoading: false,
    error: null
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setChartMetric: (state, action: PayloadAction<string>) => {
            state.selectedChartMetric = action.payload;
        },
        updateKPIData: (state, action: PayloadAction<KPIData[]>) => {
            state.kpiData = action.payload;
        },
        updateChartData: (state, action: PayloadAction<ChartData[]>) => {
            state.chartData = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        }
    }
});

export const {
    setChartMetric,
    updateKPIData,
    updateChartData,
    setLoading,
    setError
} = dashboardSlice.actions;

export default dashboardSlice.reducer;