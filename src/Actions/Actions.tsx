import { actionType,Data } from "../interfaces/Interfaces";

export type data = number
export function addTodo(data:Data){
	return {
		type: "ADD_TODO",
        payload:data
	};
};
export function deleteTodo(data:data):actionType{
	return {
		type: "DELETE_TODO",
        payload:data
	};
};
export function editTodo(data:Data){
	return {
		type: "EDIT_TODO",
        payload:data
	};
};
