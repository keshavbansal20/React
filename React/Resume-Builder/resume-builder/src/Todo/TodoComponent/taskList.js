import { connect } from "react-redux"
import React from 'react'

function TaskList(props) {
  
    console.log(props.taskList);
     let { taskList , deletetask} = props;
     console.log(taskList);
    return (
        <div className="task-list">
        <ul>
        {
            taskList.map((taskboj)=>{
                return(
                    <li className="tasklist" key={taskboj.id}>
                        <p>{taskboj.task}</p>
                        <button  onClick = {()=>{deletetask(taskboj.id)}}>Delete</button>

                    </li>

                )
            })
        }
            
        
        </ul>
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop" , store);
 // state variables change  
    return store; //store se Bat wala reducer mangaya
}

const mapDispatchedtoProps = dispatch => {
    //action
    //handler function
    return{
       
        deletetask:(id) => {
            dispatch({
                type:"delete_task" ,
                
                //data send to reducer function
                payload:id
            })
        }
    }
}
export default connect(mapStateToProps ,mapDispatchedtoProps)(TaskList);


// export default TaskList;
