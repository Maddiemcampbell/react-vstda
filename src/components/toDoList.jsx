import React from 'react';
import ToDoTask from './toDoTask'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='app'>
                <div className='wrapper'>
                    <h2>To Do List</h2>
                    <div>
                        <ul className='listWrapper'>
                            <li>Some task 
                                <button className ='edit babyButn'>Edit</button> 
                                <button className ='babyButn'>Delete</button>
                            </li>
                            <li>Another task
                                <button className ='edit babyButn'>Edit</button> 
                                <button className='babyButn'>Delete</button>
                            </li>
                            <li>More Tasks
                                <button className ='edit babyButn'>Edit</button> 
                                <button className ='babyButn'>Delete</button>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* <div className='wrapper'>
                    <h2>To Do List</h2>
                    <ul>
                        {this.props.taskList.map(todo => (
                            <ToDoTask
                                key = {todo.id}
                                newTask = {newTask}
                            />
                        ))}
                    </ul>
                </div> */}
            </div>
        );
    }
}

export default ToDoList;
