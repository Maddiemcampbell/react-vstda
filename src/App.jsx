import React, { Component } from 'react';
// import AddTask from './components/addTask';

class AddTask extends Component {

  constructor(props) {
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
        {/* <Link to="/addTask" component={AddTask}> */}
        <button>Add New Task</button>
        {/* </Link> */}
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskDescription: '',
      priority: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit() {
    let newTask = {
      taskDescription: this.state.taskDescription,
      priority: this.state.priority,
    }
    this.props.addItem(newTask);
  }


  render() {
    return (
      <div>
        <h1>
          Add New Task
        </h1>
        <label>
          I want to...
        </label>
        <textarea rows="5" className="textArea" type="textarea"/>

        <div className='sel sel--black-panther'>
        <select name="select-profession" id="select-profession dropdown-basic-button" className='form-control'>
          <option value="" disabled>Priorities</option>
          <option value={1}>Low Priority</option>
          <option value={2}>Medium Priority</option>
          <option value={3}>High Priority</option>
        </select>
        </div>

        <button className='butn' onClick={this.submit}>
          Add
        </button>
        <button className='butn'>
          View To Do
        </button>
      </div>
    )
  }
}

export default App;
