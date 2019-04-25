import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
    }

    onUpdate = (event) => {
        this.setState({[event.target.name]: event.target.value} )
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({ task: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder="Add new task.."
                type="text"
                name="task"
                id="new-task"
                onChange={this.onUpdate}
                value={this.state.input}
                />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

export default TodoForm;