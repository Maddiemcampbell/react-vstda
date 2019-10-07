import React, { Component } from 'react';


class TaskItem extends Component{
    render(){
        return(
            <div>
                <p>{this.props.newTask}</p>
                <button onClick={()=> {this.props.deleteTask(this.props.id)}}>Delete</button>
                <button onClick={()=> {this.props.editTask(this.props.id)}}>Edit</button>
            </div>
        )
    }
}


export default TaskItem