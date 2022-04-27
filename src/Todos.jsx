import React, { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoItems } from './components/TodoItems';

import './styles.css';

export const Todos = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([initialState]);
  const [editTodo, setEditTodo] = useState(null); 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <h1 className='mainTodo'>Todo List</h1>
        <TodoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
        />
        <TodoItems
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}
 