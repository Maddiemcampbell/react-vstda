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
                            <li>Some task</li>
                            <li>Another task</li>
                            <li>More Tasks</li>
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
