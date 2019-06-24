import React, { Component } from 'react';
import uuid from 'uuid';

import Todos from '../components/Todos/Todos';
import AddTodo from '../components/AddTodo/AddTodo';
import './App.css';


class App extends Component {
  state = {
    todos: [{
        id: uuid.v4(),
        title: 'Eat the lunch',
        completed: false
      },{
        id: uuid.v4(),
        title: 'Walk the dog',
        completed: false
      },{
        id: uuid.v4(),
        title: 'Go to shopping',
        completed: false
      }]
  }

  deleteTodo = id => {
    const todos = [...this.state.todos].filter(todo => todo.id !== id);

    this.setState({ todos });
  }

  addTodo = title => {
    const todos = [
      ...this.state.todos,
      {
        id: uuid.v4(),
        title,
        completed: false
      }
    ];

    this.setState({ todos });
  }

  markTodoDone = id => {
    const todos = [...this.state.todos].map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <h1 className="heading-primary">Todo List</h1>

          <ul>
            <Todos
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              markTodoDone={this.markTodoDone}
            />
          </ul>

          <AddTodo addTodo={this.addTodo} />
          
        </div>
      </div>
    )
  }
}


export default App;