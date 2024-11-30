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
            {
                id: '1',
                name: 'Carbon 1',
                category: 'Variable category 1',
                isActive: false,
                description: 'Carbon 1 represents the primary carbon emission metric used to track environmental impact across operations.'
            },
            {
                id: '2',
                name: 'Co2 Distribution',
                category: 'Variable category 1',
                isActive: true,
                description: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.'
            },
            {
                id: '3',
                name: 'Fleet sizing',
                category: 'Variable category 1',
                isActive: true,
                description: 'Fleet sizing determines the optimal number of vehicles needed to meet service demand while maintaining efficiency.'
            }
        ],
        'Variable Category 2': [
            {
                id: '4',
                name: 'Parking Rate',
                category: 'Variable Category 2',
                isActive: false,
                description: 'Parking Rate defines the cost structure for vehicle storage and management across different locations.'
            },
            {
                id: '5',
                name: 'Border Rate',
                category: 'Variable Category 2',
                isActive: true,
                description: 'Border Rate calculates the pricing adjustments for cross-border operations and international services.'
            },
            {
                id: '6',
                name: 'Request rate',
                category: 'Variable Category 2',
                isActive: true,
                description: 'Request rate measures the frequency and distribution of service requests across different time periods.'
            },
            {
                id: '7',
                name: 'Variable 1',
                category: 'Variable Category 2',
                isActive: false,
                description: 'Border Rate calculates the pricing adjustments for cross-border operations and international services.'
            },
            {
                id: '8',
                name: 'Variable 1',
                category: 'Variable Category 2',
                isActive: false,
                description: 'Request rate measures the frequency and distribution of service requests across different time periods.'
            },
            {
                id: '9',
                name: 'Variable 1',
                category: 'Variable Category 2',
                isActive: true,
                description: 'Border Rate calculates the pricing adjustments for cross-border operations and international services.'
            }
        ],
        'Variable Category 3': [
            {
                id: '10',
                name: 'Variable 1',
                category: 'Variable Category 3',
                isActive: false,
                description: 'Variable 1 is a key metric that influences overall system performance and efficiency.'
            },
            {
                id: '11',
                name: 'Variable 1',
                category: 'Variable Category 3',
                isActive: true,
                description: 'Variable 1 is a key metric that influences overall system performance and efficiency.'
            },
            {
                id: '11',
                name: 'Variable 1',
                category: 'Variable Category 3',
                isActive: true,
                description: 'Variable 1 is a key metric that influences overall system performance and efficiency.'
            }
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