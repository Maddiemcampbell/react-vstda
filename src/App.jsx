import React, { Component } from 'react';
import ToDoTask from './components/toDoTask';
import ToDoList from './components/toDoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask() {
    let taskList = [...this.state.taskList];
    
    taskList.push(newTask);
    
    this.setState({ taskList })
  }

  render() {
    return (
      <div className='app'>
        <ToDoTask handleAddTask={this.handleAddTask}/>
        <ToDoList />
      </div>
    )
  }
}

export default App;
