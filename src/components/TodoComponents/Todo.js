import React from 'react';

function Todo(props) {
    let className = "todo";
    if (props.todo.completed) {
        className += " completed";
    }

    function updateCompleteHere() {
        props.toggleComplete(props.todo.id)
    }

    return (
        <div className={className} onClick={updateCompleteHere}>
        <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;