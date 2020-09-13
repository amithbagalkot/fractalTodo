import {ADD_TODO, DELETE_TODO, EDIT_TODO} from './constants'
import {states as todos} from './states'

export let reducer = (state=todos, action)=> {
	switch(action.type) {

		case ADD_TODO: 
		let newTodo = action.payload;
		let todos = [...state, newTodo];
		return todos;

		case DELETE_TODO:
		let states = [...state]
		states = states.filter((state)=>state.id!=action.payload);
		return states;

		case EDIT_TODO:
		break;
		
	}
	return state;
}