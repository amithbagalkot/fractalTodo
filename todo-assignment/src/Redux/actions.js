import {ADD_TODO, DELETE_TODO,EDIT_TODO} from './constants.js'

export function addTodo(todo) {
	return {
		type: ADD_TODO,
		payload: todo
	}
}

export function deleteTodo(todoId) {
	return {
		type: DELETE_TODO,
		payload: todoId
	}
}

export function editTodo(todo) {
	return {
		type: EDIT_TODO,
		payload: todo
	}
}