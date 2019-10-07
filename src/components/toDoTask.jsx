import React, { Component } from 'react';

class ToDoTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: '',
            newTask: '',
            id: 0,
            isEditable: false,
        }
        this.handleTask = this.handleTask.bind(this);
        this.handlePriority = this.handlePriority.bind(this)
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    }

    handleTask(e){
        this.setState({newTask: e.target.value});
    }
    
    handlePriority(e){
        this.setState({priority: e.target.value});
    }

    handleSubmitAdd() {
        this.props.addTask(this.state);
        
        this.setState({
            priority: '',
            newTask: '',   
            id: Math.random()+1,     
         });
    }

    render() {
        return (

            <div className='wrapper'>
                <h1>Add New Task</h1>

                <label id='labelInput'>
                    I want to...
                </label>
                <textarea value={this.state.newTask} onChange={this.handleTask} rows='5' className='textArea' type='textarea' placeholder='add new task here' />

                <div className='select'>
                    <select value={this.state.priority} onChange={this.handlePriority} id='dropdown-basic-button' className='form-control' placeholder='Select a Priority' required>
                        <option value='' disabled>Priorities</option>
                        <option value={1}>Low Priority</option>
                        <option value={2}>Medium Priority</option>
                        <option value={3}>High Priority</option>
                    </select>
                    <div className='select_arrow'>
                    </div>
                </div>

                <button className='butn' onClick={this.handleSubmitAdd}>
                    Add
                </button>

            </div>
        )
    }
}

export default ToDoTask;