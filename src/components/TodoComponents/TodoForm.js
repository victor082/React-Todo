import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <div className="student-card">
        <p>Task: {props.list.task}</p>
      </div>
    )
}

export default TodoForm;