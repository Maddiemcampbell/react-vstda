import React from 'react';
import TaskItem from './taskItem'
import EditForm from './editForm'

class ToDoList extends React.Component {
    render() {
            var display;
            if (this.props.edit === true){
                display = <EditForm 
                    task={this.props.task}
                    changeTask={this.props.changeTask}
                    description={this.props.description}
                    selectedId={this.props.selectedId}
                />
            }
                else {
                    display = this.props.taskList.map((item , index)=> (
                            <TaskItem
                                key={index}
                                id={item.id}
                                description={item.description}
                                priority={item.priority}    
                                deleteTask={this.props.deleteTask} 
                                editTask={this.props.editTask}
                            />
                        ))
                    }
                    return(
                        <div className='wrapper'>
                            {display}
                        </div>
                    )
                }
           
            }
    
    
        
        export default ToDoList;
