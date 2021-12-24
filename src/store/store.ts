import { combineReducers, compose, createStore } from "redux";
import allReducers from "../Reducers/TodoReducer";

const reducer = combineReducers({ allReducers });

export const store = createStore(
    reducer
);

export type RootState = ReturnType<typeof reducer>
