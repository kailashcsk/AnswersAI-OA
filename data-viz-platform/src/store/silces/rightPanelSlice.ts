import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Variable {
    id: string;
    name: string;
    category: string;
    isActive: boolean;
    description?: string;
    isSelected?: boolean;
}

interface RightPanelState {
    isOpen: boolean;
    searchQuery: string;
    selectedVariables: string[];
    categories: {
        [key: string]: Variable[];
    };
    activeVariable: string | null;
    isLoading: boolean;
}

const initialState: RightPanelState = {
    isOpen: false,
    searchQuery: '',
    selectedVariables: [],
    activeVariable: null,
    isLoading: false,
    categories: {
        'Variable category 1': [
            { id: '1', name: 'Carbon 1', category: 'Variable category 1', isActive: true },
            { id: '2', name: 'Co2 Distribution', category: 'Variable category 1', isActive: true },
            { id: '3', name: 'Fleet sizing', category: 'Variable category 1', isActive: true }
        ],
        'Variable Category 2': [
            { id: '4', name: 'Parking Rate', category: 'Variable Category 2', isActive: true },
            { id: '5', name: 'Border Rate', category: 'Variable Category 2', isActive: true },
            { id: '6', name: 'Request rate', category: 'Variable Category 2', isActive: true }
        ],
        'Variable Category 3': [
            { id: '7', name: 'Variable 1', category: 'Variable Category 3', isActive: true }
        ]
    }
};

const rightPanelSlice = createSlice({
    name: 'rightPanel',
    initialState,
    reducers: {
        togglePanel: (state) => {
            state.isOpen = !state.isOpen;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        toggleVariable: (state, action: PayloadAction<string>) => {
            const variableId = action.payload;
            Object.values(state.categories).forEach(category => {
                const variable = category.find(v => v.id === variableId);
                if (variable) {
                    variable.isActive = !variable.isActive;
                }
            });
        },
        setActiveVariable: (state, action: PayloadAction<string | null>) => {
            state.activeVariable = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const {
    togglePanel,
    setSearchQuery,
    toggleVariable,
    setActiveVariable,
    setLoading
} = rightPanelSlice.actions;

export default rightPanelSlice.reducer;