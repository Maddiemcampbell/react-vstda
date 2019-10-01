import React, { Component } from 'react';

class AddTask extends Component {

    constructor(props){
        super(props);

        this.state = {
            taskDescription: '',
            priority: 1,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    submit(){
        let newTask = {
            taskDescription: this.state.taskDescription,
            priority: this.state.priority,
        }
        this.props.addItem(newTask);
    }


    render(){
        return(
            <div>
                <h1>
                    Add New Task
                </h1>
                <label>I want to...</label>
                <input name='description' value={this.state.taskDescription} onChange={this.handleChange} placeholder='add your task!' />
                <select>
                    <option value={1}>Low Priority</option>
                    <option value={2}>Medium Priority</option>
                    <option value={3}>High Priority</option>
                    <button onClick={this.submit}>
                        Add
                    </button>
                    <button>
                        View To Do
                    </button>
                </select>
            </div>
        )
    }
}

export default AddTask;