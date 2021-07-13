import React, { Component } from 'react'

export default class Todo2 extends Component {
    state = {
        taskList:[{"id":1,"task":"helloWorld"}, ] , 
       
    }
    

    delete = (id ) => {
        console.log(id)
        let filteredtasks = this.state.taskList.filter(function(task){
            return task.id != id;
        })
        // console.log(filteredtasks)
        this.setState({
            taskList: filteredtasks
        })
    }
    setCurretTask = (currTask) => {
        console.log(this.state.taskList)
        // let tempArr=[];
        // for(let i = 0 ;i < this.state.taskList.length;i++){
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(this.state.currTask);
        let tempArr = [...this.state.taskList ,{id:this.state.taskList.length+1 , task:currTask}]
        console.log(tempArr)
        this.setState({
            taskList:tempArr
        })

        

    }
    render() {
        console.log(this.state.currTask);
       
        return (
            <div>
            <InputContainer setCurretTask={this.setCurretTask}></InputContainer>
            <TaskList list={this.state.taskList} delete={this.delete}></TaskList>
            </div>
        )
        
    }
}


class InputContainer extends Component {
    state = { 
        currTask:""
     }
     handlecurrTask = (e) =>{
        let currValue = e.target.value
        this.setState({
            currTask:currValue
        })
        console.log(currValue);
    }
    sendCurrentTask = () => {
        this.props.setCurretTask(this.state.currTask);
        this.setState({
            currTask:""
        })

    }
    render() { 
        return (
            <div className="input-container">
                <input type="text"   value={this.state.currTask} onChange={this.handlecurrTask} ></input>
                <button onClick={this.sendCurrentTask}>Submit</button>
            </div>
              );
    }
}
 
class TaskList extends Component {
    state = {  }
    render() { 
        return (
            <div className="task-list">
                 <ul >
                    {this.props.list.map((taskobj)=>{
                        return(

                            
                            <li className="tasklist" key={taskobj.id}>
                            <p>{taskobj.task}</p>
                            <button  onClick = {()=>{this.props.delete(taskobj.id)}}>Delete</button>
                           </li>
                        )
                    })}
                </ul>
            </div>
          );
    }
}
 
