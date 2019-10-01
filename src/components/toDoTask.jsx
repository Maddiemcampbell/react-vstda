import React, { Component } from 'react';

class ToDoTask extends Component {
    render(){
        return(
            <div>
                <li>{this.props.description}</li>
                <button className='listButton'>delete</button>
                <button className='listButton'>edit</button>
            </div>
        )
    }
}

export default ToDoTask;