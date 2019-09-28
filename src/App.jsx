import React, { Component } from 'react';

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
        <button>Add New Task</button>
      </div>
    );
  }
}

export default App;
