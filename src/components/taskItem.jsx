import React, { Component } from 'react';


class TaskItem extends Component{
    render(){
        return(

            <div className='listWrapper' style={{background: this.props.priority}}>
                <input type='checkbox' id='complete' className='complete-button strike-through'/>
                <p>{this.props.description}</p>
                <button className='smallButn delete-todo' onClick={()=> {this.props.deleteTask(this.props.id)}}>Delete</button>
                <button className='smallButn edit-todo' onClick={()=> {this.props.editTask(this.props.id)}}>Edit</button>
            </div>
        )
    }
}


export default TaskItem