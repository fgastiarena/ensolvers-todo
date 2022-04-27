import React from 'react';

export const TodoItems = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo); 
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            {todos.map((todo) => (
                todo.id &&
                <li className='todo-list' key={todo.id}>
                    <input
                        type='text'
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(e) => e.preventDefault()}
                    />
                    <button
                        className='btn-complete'
                        onClick={() => handleComplete(todo)}
                    >
                        <i className='fa fa-check-circle'></i>
                    </button>

                    <button 
                        className='btn-edit'
                        onClick={() => handleEdit(todo)}
                    >
                        <i className='fa fa-edit'></i>
                    </button>

                    <button
                        className='btn-delete'
                        onClick={() => handleDelete(todo)}
                    >
                        <i className='fa fa-trash'></i>
                    </button>
                </li>


            )

            )}
        </div>
    );
}
