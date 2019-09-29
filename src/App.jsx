import React, { Component } from 'react';
import AddTask from '../components/addTask';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userList: [],
      selectedTask: [],
    }
  }


  render() {
    return (
      <div className='container'>
        <h1>To Do List</h1>
        <ul>
          <li>{this.state.userList}</li>
        </ul>
        <Link to="/addTask" component={AddTask}>
          <button>Add New Task</button>
        </Link>
      </div>
    );
  }
}

export default App;
