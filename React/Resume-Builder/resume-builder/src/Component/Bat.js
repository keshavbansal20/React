import React, { Component   , useState} from 'react';
import { connect } from "react-redux"

function Bat(props){
    const [value, setValue] = useState("");
    return(
        <div>
            <h1>Number of Bats: {props.quantity}</h1>
            <h2>It say's {props.dummyState}</h2>
            <input value={value}
            onChange={(e)=>{
                setValue(e.target.value);
            }}
            ></input>
            <button onClick={()=> {
                props.setBat(value);
                setValue("");
            }}>Buy Bat
            </button>
        </div>
    )
}
const mapStateToProps = store => {
    console.log("in map state to prop" , store);

    return store.Bat;
}

//dispatch
const mapDispatchedtoProps = dispatch => {
    //action
    //handler function
    return{
        setBat:(val) => {
            dispatch({
                type:"buy_bat" ,
                //data send to reducer function
                payload:val
            })
        }
    }
}

export default connect(mapStateToProps , mapDispatchedtoProps)(Bat);