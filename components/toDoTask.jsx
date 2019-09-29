import React, { Component } from 'react';

class toDoTask extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            newTask: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({newTask: e.target.value})
    }

    render(){
        return(
            <div>
                <li>{this.props.description}</li>
                <button onClick={() => this.props.deleteItem(this.props.id)}>delete</button>
                <button onClick={() => this.props.editItem(this.props.id)}>edit</button>
            </div>
        )
    }
}

export default toDoTask;