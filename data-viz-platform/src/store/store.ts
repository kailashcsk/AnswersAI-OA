import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from './silces/dashboardSlice';
import variableSlice from './silces/variableSlice';
import rightPanelReducer from './silces/rightPanelSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardSlice,
        variables: variableSlice,
        rightPanel: rightPanelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;