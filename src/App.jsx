import React, { Component } from 'react';
import ToDoList from './components/toDoList';

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
      <div className='app'>
        <ToDoList />
        <div className='wrapper'>
        <h1>Add New Task</h1>
          <label id='labelInput'>
            I want to...
          </label>
          <textarea rows="5" className="textArea" type="textarea" placeholder='add new task here' />

          <div className='select'>
            <select name="select-profession" id="select-profession dropdown-basic-button" className='form-control'>
              <option value="" disabled>Priorities</option>
              <option value={1}>Low Priority</option>
              <option value={2}>Medium Priority</option>
              <option value={3}>High Priority</option>
            </select>
            <div className="select_arrow">
            </div>
          </div>

          <button className='butn' onClick={this.submit}>
            Add
          </button>
        </div>
        
      </div>
    )
  }
}

export default App;
