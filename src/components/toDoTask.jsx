import React, { Component } from 'react';

class ToDoTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: '',
            descriprion: '',
            id: 0,
        }
        this.handleTask = this.handleTask.bind(this);
        this.handlePriority = this.handlePriority.bind(this)
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    }

    handleTask(e){
        this.setState({description: e.target.value});
    }
    
    handlePriority(e){
        this.setState({priority: e.target.value});
    }

    handleSubmitAdd() {
        this.props.addTask(this.state);
        
        this.setState({
            priority: '',
            description: '',   
            id: Math.random()+1,     
         });
    }

    render() {
        return (

            <div className='wrapper todo'>
                <h1>Add New Task</h1>

                <label id='labelInput'>
                    I want to...
                </label>
                <textarea value={this.state.description} onChange={this.handleTask} rows='5' className='textArea create-todo-text update-todo-text' type='textarea' placeholder='add new task here' />

                <div className='select'>
                    <select value={this.state.priority} onChange={this.handlePriority} id='dropdown-basic-button' className='form-control create-todo-priority' placeholder='Select a Priority' required>
                        <option value='' disabled>Priorities</option>
                        <option value={'#F7F89C'}>Low Priority</option>
                        <option value={'#CCFF99'}>Medium Priority</option>
                        <option value={'#FFA799'}>High Priority</option>
                    </select>
                    <div className='select_arrow'>
                    </div>
                </div>

                <button className='butn create-todo' onClick={this.handleSubmitAdd}>
                    Add
                </button>

            </div>
        )
    }
}

export default ToDoTask;