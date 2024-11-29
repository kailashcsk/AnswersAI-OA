import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from './silces/dashboardSlice';
import variableSlice from './silces/variableSlice';
import rightPanelReducer from './silces/rightPanelSlice';
import authReducer from './silces/authSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardSlice,
        variables: variableSlice,
        rightPanel: rightPanelReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;