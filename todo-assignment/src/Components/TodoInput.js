import React from 'react';
import {addTodo} from '../Redux/actions';
import {useDispatch} from 'react-redux';
import {useState} from 'react'

function TodoInput() {
	let [name, setName] = useState();
	let dispatch = useDispatch();

	function inputChange(e) {
		setName(e.target.value)
	}

	function createTodo() {
		dispatch(addTodo(
		{
				id:Math.random()*2,
				name:name
		}

		))
	}

	return(
		<div className='row'>
		<input type='text' value={name} 
		onChange={(e)=>inputChange(e)} />
		<button onClick={()=>createTodo()}>Add</button>
		</div>
		)
}


export default TodoInput;