import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            selectedTask: this.props.selectedTask,
            editDescription: this.props.selectedTask.newTask,
            editPriority: this.props.selectedTask.priority
        }
    }

    handleEditClick(){
        let item = {
            id: this.props.selectedId,
            description: this.state.editDescription,
            priority: this.state.editPriority,
            isEditable: true
        }
        this.props.editTask(item);
    }

    hanleEditDescription(e){
        this.setState({
            editDescription: e.target.value
        })
    }

    handleEditPriority(e){
        this.setState({
            editPriority: e.target.value
        })
    }

 render(){
     return(
         <div>
            
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
            
            <button className='butn' onClick={this.handleEditClick}>
                    Edit   
            </button>
         </div>


     )
 }

}

export default EditForm;