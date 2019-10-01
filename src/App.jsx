import React, { Component } from 'react';
import ToDoList from './components/toDoList';
import AddTask from './components/addTask';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <ToDoList />
        <AddTask />
      </div>
    )
  }
}

export default App;
