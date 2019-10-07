import React from 'react';
import TaskItem from './taskItem'

class ToDoList extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <h2>To Do List</h2>
                <ul>
                    {this.props.taskList.map((item , index)=> (
                        <TaskItem
                            key={index}
                            id={item.id}
                            newTask={item.newTask}
                            priority={item.priority}    
                            deleteTask={this.props.deleteTask} 
                        />
                    ))}
                    </ul>
            </div>
                );
            }
        }
        
        export default ToDoList;
