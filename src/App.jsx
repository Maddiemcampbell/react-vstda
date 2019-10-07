import React, { Component } from 'react';
import ToDoTask from './components/toDoTask';
import ToDoList from './components/toDoList';
import EditForm from './components/editForm';
import TaskItem from './components/taskItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: []
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

 addTask(newTask) {
    let taskList = [...this.state.taskList];
    
    taskList.push(newTask);
    
    this.setState({taskList});

    console.log(taskList)
  }

  deleteTask(id) {
   let newList = this.state.taskList.filter(item => item.id!==id)
    this.setState({
     taskList: newList
   })
   console.log(newList)
  }

  editTask(id){
    let item = this.state.list.find(item => item.id===id);

      this.setState({
        mode: 'edit',
        selectedId: id,
        selectedItem: item,
        alert: 'off'   
      }); 
  }

  render() {
    return (
      <div className='app'>
        <ToDoTask addTask={this.addTask}/>
        <ToDoList 
        taskList={this.state.taskList} 
        deleteTask={this.deleteTask}
        editTask={this.editTask}
        />
      </div>
    )
  }
}

export default App;
