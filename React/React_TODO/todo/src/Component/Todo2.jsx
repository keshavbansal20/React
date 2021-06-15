import React, { Component } from 'react'

export default class Todo2 extends Component {
    state = {
        taskList:["helloWorld" ] , 
        currTask:""
    }
    handlecurrTask = (e) =>{
        let currValue = e.target.value
        this.setState({
            currTask:currValue
        })
    }

    delete = (taskobj ) => {
        console.log(taskobj)
        let filteredtasks = this.state.taskList.filter(function(task){
            return task != taskobj;
        })
        // console.log(filteredtasks)
        this.setState({
            taskList: filteredtasks
        })
    }
    setCurretTask = () => {
        console.log(this.state.taskList)
        let tempArr=[];
        for(let i = 0 ;i < this.state.taskList.length;i++){
            tempArr.push(this.state.taskList[i]);
        }
        tempArr.push(this.state.currTask);
        console.log(tempArr)
        this.setState({
            taskList:tempArr
        })

    }
    render() {
        console.log(this.state.currTask);
       let taskarr = this.state.taskList;   
        return (
            <div>
            <div className="input-container">
                <input type="text" className="input"  value={this.state.currTask} onChange={this.handlecurrTask} ></input>
                <button onClick={this.setCurretTask}>Submit</button>
            </div>
            <div className="task-list">
                <ul className="list">
                    {taskarr.map((taskobj)=>{
                        return(

                            
                            <li className="tasklist" key={taskobj.id}>
                            <p>{taskobj}</p>
                            <button  onClick = {()=>{this.delete(taskobj)}}>Delete</button>
                           </li>
                        )
                    })}
                </ul>
            </div>
            </div>
        )
        
    }
}
