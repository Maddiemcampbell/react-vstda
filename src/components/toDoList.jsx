import React from 'react';
import TaskItem from './taskItem'

class ToDoList extends React.Component {
    render() {
            var display;
            if (this.props.mode === 'edit'){
                display = <EditForm 
                    changeItem={this.props.changeItem}
                    selectedItem={this.props.selectedItem}
                    selectedId={this.props.selectedId}
                />
            }
                else {
                    display = this.props.taskList.map((item , index)=> (
                            <TaskItem
                                key={index}
                                id={item.id}
                                newTask={item.newTask}
                                priority={item.priority}    
                                deleteTask={this.props.deleteTask} 
                                editTask={this.props.editTask}
                            />
                        ))
                    }
                }
           
            }
    
    
        
        export default ToDoList;
