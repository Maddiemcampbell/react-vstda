import React, { Component } from 'react';
import ToDoTask from './components/toDoTask';
import ToDoList from './components/toDoList';

class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <ToDoTask/>
        <ToDoList />
      </div>
    )
  }
}

export default App;
