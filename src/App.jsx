import React, { Component } from 'react';
import ToDoTask from './components/toDoTask';
import ToDoList from './components/toDoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      edit: false,
      task: '',
      selectedId: '',
      alert: '',
      description: '',
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
    this.findIndex = this.findIndex.bind(this);
  }

 addTask(description) {
    let taskList = [...this.state.taskList];
    
    taskList.push(description);
    
    this.setState({taskList});

    console.log(taskList)
  }

  deleteTask(id) {
   let newTaskList = this.state.taskList.filter(item => item.id!==id)
    this.setState({
     taskList: newTaskList
   })
   console.log(newTaskList)
  }

  editTask(id){
    let item = this.state.taskList.find(item => item.id===id);

      this.setState({
        description: item.description,
        edit: true,
        selectedId: id,
        alert: 'off'   
      }); 
  }

  findIndex(data){
    for(let i=0; i<this.state.taskList.length; i++){
      if(this.state.taskList[i]['id']=== data){
        return i;
      }
    }
    return -1;
  }

  changeTask(id, item){
    let index = this.findIndex(id);
    let newTaskList = this.state.taskList;
    newTaskList[index] = item
    this.setState({
      taskList: newTaskList,
      edit: false
    })
    console.log(newTaskList)
  }

  render() {
    return (
      <div className='app'>
        <ToDoTask addTask={this.addTask}/>
        <ToDoList 
          taskList={this.state.taskList} 
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          selectedId={this.state.selectedId}
          edit={this.state.edit}
          task={this.state.task}
          description={this.state.description}
          changeTask={this.changeTask}
          findIndex={this.findIndex}
        />
      </div>
    )
  }
}

export default App;
