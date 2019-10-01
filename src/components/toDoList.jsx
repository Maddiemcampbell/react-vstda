import React from 'react';
import ToDoTask from './toDoTask'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='wrapper'>
                    <h2>To Do List</h2>
                    <ToDoTask />
                </div>
            </div>
        );
    }
}

export default ToDoList;