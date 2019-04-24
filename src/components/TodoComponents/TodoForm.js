import React from 'react';
import './Todo.css';

function TodoForm() {
    return (
        <div>
            <form>
                <input placeholder="Add To do" />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;