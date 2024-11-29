import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TypeScript interfaces
interface Variable {
    id: string;
    name: string;
    value: string | number;
    description: string;
    isActive: boolean;
    category?: string;
    unit?: string;
}

interface VariablesState {
    list: Variable[];
    isEditMode: boolean;
    selectedVariables: string[];
    hoveredVariable: string | null;
}

// Initial state with dummy data
const initialState: VariablesState = {
    list: [
        {
            id: '1',
            name: 'Infrastructure Units',
            value: '€421.07',
            description: 'This describes variable two and what the shown data means.',
            isActive: true,
            category: 'infrastructure',
            unit: '€'
        },
        {
            id: '2',
            name: 'Charging Growth',
            value: '33.07',
            description: 'This describes variable two and what the shown data means.',
            isActive: true,
            category: 'growth'
        },
        {
            id: '3',
            name: 'Localization change',
            value: '21.9',
            description: 'This describes variable two and what the shown data means.',
            isActive: true,
            category: 'localization',
            unit: '%'
        },
        {
            id: '4',
            name: 'Fleet growth',
            value: '7.03',
            description: 'This describes variable two and what the shown data means.',
            isActive: true,
            category: 'fleet',
            unit: '%'
        }
    ],
    isEditMode: false,
    selectedVariables: ['1', '2', '3', '4'], // Initially all variables are selected
    hoveredVariable: null
};

const variableSlice = createSlice({
    name: 'variables',
    initialState,
    reducers: {
        toggleEditMode: (state) => {
            state.isEditMode = !state.isEditMode;
        },

        toggleVariable: (state, action: PayloadAction<string>) => {
            const variable = state.list.find(v => v.id === action.payload);
            if (variable) {
                variable.isActive = !variable.isActive;

                // Update selected variables
                if (variable.isActive) {
                    state.selectedVariables.push(action.payload);
                } else {
                    state.selectedVariables = state.selectedVariables.filter(
                        id => id !== action.payload
                    );
                }
            }
        },

        updateVariable: (state, action: PayloadAction<{
            id: string;
            updates: Partial<Variable>;
        }>) => {
            const { id, updates } = action.payload;
            const variable = state.list.find(v => v.id === id);
            if (variable) {
                Object.assign(variable, updates);
            }
        },

        setHoveredVariable: (state, action: PayloadAction<string | null>) => {
            state.hoveredVariable = action.payload;
        },

        addVariable: (state, action: PayloadAction<Omit<Variable, 'id'>>) => {
            const newId = (state.list.length + 1).toString();
            state.list.push({
                ...action.payload,
                id: newId
            });
        },

        removeVariable: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(variable => variable.id !== action.payload);
            state.selectedVariables = state.selectedVariables.filter(
                id => id !== action.payload
            );
        },

        reorderVariables: (state, action: PayloadAction<string[]>) => {
            // Reorder based on array of ids
            const reorderedList = action.payload
                .map(id => state.list.find(v => v.id === id))
                .filter((v): v is Variable => v !== undefined);
            state.list = reorderedList;
        }
    }
});

// Export actions and reducer
export const {
    toggleEditMode,
    toggleVariable,
    updateVariable,
    setHoveredVariable,
    addVariable,
    removeVariable,
    reorderVariables
} = variableSlice.actions;

export default variableSlice.reducer;

// Selector helper
export const selectVariableById = (id: string) => (state: { variables: VariablesState }) =>
    state.variables.list.find(v => v.id === id);

// Export the state type
export type { VariablesState, Variable };