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

  addTask = item => {
    const newTasksArray = [
      ...this.state.tasks,
      { task: item, completed: false, id: Date.now() }
    ];
    this.setState({ tasks: newTasksArray })
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List:</h1>
        </div>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm addTask={this.addTask} />
      </div>
    )
  }
}

export default App;
