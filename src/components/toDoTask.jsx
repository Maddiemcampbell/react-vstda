import React, { Component } from 'react';

class ToDoTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTask: '',
            priority: '',
            taskList: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleAddTask(){
       const newTask = {
           id: 1 + Math.random,
           value: this.state.newTask.slice()
       };

       const taskList = [...this.state.taskList];

       taskList.push(newTask);

       this.setState({
            newTask: newTask,
            taskList: taskList    
       })
   }

    render() {
        return (
            
            <div className='wrapper'>
                <h1>Add New Task</h1>
                
                <label id='labelInput'>
                    I want to...
                </label>
                <textarea value={this.state.newTask} rows='5' className='textArea' type='textarea' placeholder='add new task here' />

                <div className='select'>
                    <select value={this.state.priority} id='dropdown-basic-button' className='form-control'>
                        <option value='' disabled>Priorities</option>
                        <option value={1}>Low Priority</option>
                        <option value={2}>Medium Priority</option>
                        <option value={3}>High Priority</option>
                    </select>
                    <div className='select_arrow'>
                    </div>
                </div>

                <button className='butn' onClick={this.handleAddTask}>
                    Add
                </button>
           
            </div>
        )
    }
}

export default ToDoTask;