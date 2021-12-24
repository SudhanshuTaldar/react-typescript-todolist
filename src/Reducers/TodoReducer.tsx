import { actionType, initialtype, Data } from "../interfaces/Interfaces";
import { combineReducers } from "redux";

const init: initialtype = {
    task: []
}
export const TodoReducer = (state = init, { type, payload }: any) => {

    switch (type) {
        case 'ADD_TODO':
            return {
                ...state,
                task: [...state.task, payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                task: state.task.filter((task: Data) => task.id !== payload)
            }
        case "EDIT_TODO":
            console.log(payload)
            return {
                ...state,
                task: state.task.map((ele) =>
                    ele.id === payload.id ? { ...ele, task: payload.task, deadline: payload.deadline } : ele)
            }
        default:
            return state;
    }
}
const allReducers = combineReducers({
    todo: TodoReducer
});
export default allReducers