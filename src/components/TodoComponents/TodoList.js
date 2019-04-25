// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

function TodoList(props) {
    return (
        <div className="task-list">
            {props.tasks.map(todo => 
            <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete}/>)
            }
        </div>
    )
}

export default TodoList;