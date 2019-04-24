import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

const list = [
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
      listOnState: list,
      list: {
        task: '',
        id: '',
        completed: ''
      }
    };
  }
  handleChanges = event => {
    console.log(event.target.value)
    this.setState({
      list: {  
      ...this.state.list,
      [event.target.task]: event.target.value
    }
    });
  }

  addList = event => {
    event.preventDefault();
    this.setState({
      listOnState: [...this.state.listOnState, this.state.list],
      list: {}
    });
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>To do App</h1>

        <div className="class-list">
          {this.state.listOnState.map(list => (
            <TodoForm list={list} key={list.name} />
          ))}
        </div>
        <div>
             <form onSubmit={this.addList}>
                 <input placeholder="Add To do" 
                 value={this.state.list.task}/>
                 <button>Add to do</button>
                 <button>Clear Completed</button>
             </form>
         </div>
      </div>
    );
  }
}

export default App;
