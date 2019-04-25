import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
  };

  addTask = task => {
    const newTasksArray = [
      ...this.state.tasks,
      { task: task, completed: false, id: Date.now() }
    ];
    this.setState({ tasks: newTasksArray })
  };

  toggleComplete = id => {
    const newTasksArrayThatIMade = this.state.tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })

    this.setState({tasks: newTasksArrayThatIMade})
  }

  removeCompleted = () => {
    const newTasksArray = this.state.tasks.filter((task) => {
      if (!task.completed) {
        return true
      }
      else {
        return false
      }
    } )
    this.setState({ tasks: newTasksArray})
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List:</h1>
        </div>
        <div>
        <TodoForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks}
        toggleComplete={this.toggleComplete} />
         <button onClick={this.removeCompleted} className="clear-btn">Clear Item</button>
      </div>
    )
  }
}

export default App;
