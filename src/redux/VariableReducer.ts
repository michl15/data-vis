import { DATA } from "@/constants/dummyData";
import { VarData, Variable } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VariableInitialState {
    allVars: Variable;
    activeVar: string | null;
}

const initialVariables: VariableInitialState = {
    allVars: DATA.dummyVariableDesc,
    activeVar: null
}

export const variableSlice = createSlice({
    name: "variables",
    initialState: initialVariables,
    reducers: {
        setSelected: (state, action: PayloadAction<string>) => {
            const isSelected = state.allVars[action.payload].selected;
            state.allVars[action.payload].selected = !isSelected;
        },
        addVariable: (state, action: PayloadAction<{ varName: string, data: VarData }>) => {
            state.allVars = { ...state.allVars, [action.payload.varName]: action.payload.data }
        },
        setActiveVar: (state, action: PayloadAction<string>) => {
            state.activeVar = action.payload;
        },
        removeActiveVar: (state) => {
            state.activeVar = null
        }

    }
});

export const { setSelected, addVariable, setActiveVar, removeActiveVar } = variableSlice.actions;
export default variableSlice.reducer;