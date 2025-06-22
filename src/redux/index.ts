import { combineReducers, configureStore } from "@reduxjs/toolkit";
import VariableReducer from "./VariableReducer"

const rootReducer = combineReducers({
    variables: VariableReducer
});

// Can add middleware here to fetch real data and populate store via API
export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;