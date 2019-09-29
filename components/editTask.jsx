import React, { Component } from 'react';

class EditTask extends Component {

    constructor(props){
        super(props);

        this.state ={
            userList: [],
            selectedTask: [],
        }
    }

    render(){
        return(
            <div>
                <h1>
                    Edit Task
                </h1>
                <label>I want to...</label>
                <input></input>
                <select>
                    <option value='lowPriority'>
                        1. Low priority
                    </option>
                    <option value='mediumPriority'>
                        2. Medium priority
                    </option>
                    <option value='highPriority'>
                        3. High priority
                    </option>
                    <button>
                        Submit
                    </button>
                    <button>
                        View To Do
                    </button>
                </select>
            </div>
        )
    }
}

export default EditTask;