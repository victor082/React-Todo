import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import List from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOnState: List,
      List: {
        task: '',
        id: '',
        completed: ''
      }
    }
  }
  handleChanges = event => {
    console.log(event.target.task)
    this.setState({
      List: {
        ...this.state.List,
        [event.target.task]: event.target.value
      }
    })
  }
  addTodo = event => {
    event.preventDefault();
    this.setState({
      listOnState: [...this.state.listOnState, this.state.List],
      List: {}
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
