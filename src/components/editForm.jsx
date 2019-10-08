import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            priority: this.props.priority,
            description: this.props.description
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleEditDescription = this.handleEditDescription.bind(this);
        this.handleEditPriority = this.handleEditPriority.bind(this);
    }

    handleEditClick(){
        let task = {
            id: this.props.selectedId,
            description: this.state.description,
            priority: this.state.priority
        }
        this.props.changeTask(task.id, task);
    }

    handleEditDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    handleEditPriority(e){
        this.setState({
            priority: e.target.value
        })
    }

 render(){
     return(
         <div>
            
            <label id='labelInput'>
                I want to...
            </label>
            
            <textarea value={this.state.description} onChange={this.handleEditDescription} rows='5' className='textArea' type='textarea' placeholder='add new task here' />
            
            <div className='select'>
                    <select onChange={this.handleEditPriority} id='dropdown-basic-button' className='form-control' placeholder='Select a Priority' required>
                        <option value='' disabled>Priorities</option>
                        <option value={'#29a329'}>Low Priority</option>
                        <option value={'#ffff99'}>Medium Priority</option>
                        <option value={'#ff4d4d'}>High Priority</option>
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