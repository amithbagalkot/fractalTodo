import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput'
function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <h1>Welcome to react world</h1>
    </div>
  );
}

export default App;
