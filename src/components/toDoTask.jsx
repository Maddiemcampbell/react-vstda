import React, { Component } from 'react';

class ToDoTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: '',
            newTask: '',
            id: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitAdd() {
        this.props.handleAddTask(this.state);
        this.setState({
            id: this.state.id+1,
            newTask: '',
            priority: '',
        })
    }

    render() {
        return (

            <div className='wrapper'>
                <h1>Add New Task</h1>

                <label id='labelInput'>
                    I want to...
                </label>
                <textarea value={this.state.newTask} onChange={this.handleChange} rows='5' className='textArea' type='textarea' placeholder='add new task here' />

                <div className='select'>
                    <select value={this.state.priority} onChange={this.handleChange} id='dropdown-basic-button' className='form-control'>
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