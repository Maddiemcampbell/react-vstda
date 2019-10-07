import React, { Component } from 'react';


class TaskItem extends Component{
    render(){
        return(
            <div>
                <p>{this.props.newTask}</p>
                <button onClick={()=> {this.props.deleteTask(this.props.id)}}>Delete</button>
            </div>
        )
    }
}


export default TaskItem