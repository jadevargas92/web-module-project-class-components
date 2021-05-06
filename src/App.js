import React from 'react';
import ReactDom from 'react-dom'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Todo from './components/Todo'
import './components/Todo.css'

const toDoData = [
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDos: toDoData
    }
  }

  addToDo = newToDo => {
    this.setState({
      toDos: [...this.state.toDos, {
        task: newToDo,
        id: Date.now(),
        completed: false
      }]
    })
  }

  toggleCompleted = toDoID => {
    this.setState({
      toDos: this.state.toDos.map(toDo => {
        if(toDo.id === toDoID) {
          return {
            ...toDo,
            completed: !toDo.completed
          }
        }
        return toDo;
      })
    })
  }

  clearCompleted =() => {
    this.setState({
      toDos: this.state.toDos.filter(toDo => !toDo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addToDo={this.addToDo} />
        <TodoList toDos={this.state.toDos} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
