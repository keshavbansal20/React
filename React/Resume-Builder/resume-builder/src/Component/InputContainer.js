import React,{useState} from 'react'
import { connect } from "react-redux"

function InputContainer(props) {
    const[value , setTask] = useState("");
    return (
        <div>
    
        <div className="input-container">
            <input type="text"   value={value} 
                onChange={(e)=>{
                    setTask(e.target.value);
                }} 
            ></input>
            <button onClick={()=> {
                props.setTask(value);
                setTask("");
            }}>Submit</button>
        </div>
        </div>
    )
}





const mapStateToProps = store => {
    console.log("in map state to prop" , store);
 // state variables change  
    return store.InputContainer; //store se Bat wala reducer mangaya
}

const mapDispatchedtoProps = dispatch => {
    //action
    //handler function
    return{
        setTask:(val) => {
            dispatch({
                type:"input_item" ,
                //data send to reducer function
                payload:val
            })
        }
    }
}
export default connect(mapStateToProps , mapDispatchedtoProps)(InputContainer);
