import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartData {
    month: string;
    value: number;
    isCurrent?: boolean;
    percentAboveTarget?: number;
    day?: number;
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
        { month: 'Apr', day: 1, value: 40000, percentAboveTarget: 3.5 },
        { month: 'Apr', day: 15, value: 35000, percentAboveTarget: 3.2 },
        { month: 'Apr', day: 30, value: 38000, percentAboveTarget: 3.8 },

        { month: 'May', day: 1, value: 20000, isCurrent: true, percentAboveTarget: 4.6 },
        { month: 'May', day: 15, value: 22000, percentAboveTarget: 4.8 },
        { month: 'May', day: 30, value: 25000, percentAboveTarget: 5.0 },

        { month: 'Jun', day: 1, value: 45000, percentAboveTarget: 5.1 },
        { month: 'Jun', day: 15, value: 48000, percentAboveTarget: 5.3 },
        { month: 'Jun', day: 30, value: 50000, percentAboveTarget: 5.5 },

        { month: 'Jul', day: 1, value: 90000, percentAboveTarget: 7.2 },
        { month: 'Jul', day: 15, value: 85000, percentAboveTarget: 7.0 },
        { month: 'Jul', day: 30, value: 88000, percentAboveTarget: 7.1 },

        { month: 'Aug', day: 1, value: 60000, percentAboveTarget: 4.8 },
        { month: 'Aug', day: 15, value: 62000, percentAboveTarget: 5.0 },
        { month: 'Aug', day: 30, value: 58000, percentAboveTarget: 4.7 },

        { month: 'Sep', day: 1, value: 35000, percentAboveTarget: 3.9 },
        { month: 'Sep', day: 15, value: 32000, percentAboveTarget: 3.7 },
        { month: 'Sep', day: 30, value: 34000, percentAboveTarget: 3.8 },

        { month: 'Oct', day: 1, value: 58000, percentAboveTarget: 4.7 },
        { month: 'Oct', day: 15, value: 60000, percentAboveTarget: 4.9 },
        { month: 'Oct', day: 30, value: 62000, percentAboveTarget: 5.0 }
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