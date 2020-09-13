import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../Redux/actions';
function TodoItem({todo}) {
	let dispatch = useDispatch();

	let [editable, setEditable] = useState(false);

	let [name, setName] = useState(todo.name)
	
	function inputChange(e) {
		setName(e.target.value)
	}
	
	updateTodo() {
		dispatch(EditTodo({
			...todo,
			name:name
		}))
		setEditable(!editable);
	}
	
	return(
		<div>

		{ editable? <input 
					type='text'
					value={name}
					onChange = {(e)=>{inputChange(e)}/> : <h3> {todo.name} </h3> }
		
		<button 	onClick={()=>updateTodo()}
					>{editable ? 'update':edit} 	
					</button>
		
		<button
					onClick={()=>
						{dispatch(deleteTodo(todo.id))
						}}>
					delete
					</button>

		</div>
		)
}


export default TodoItem;