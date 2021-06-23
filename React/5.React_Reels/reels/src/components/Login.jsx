import React, { useState , useContext } from 'react';
 import {AuthContext} from "../contexts/AuthContext";
function Login(props){
    const { login } = useContext(AuthContext);
    const[email , setEmail] = useState("");
    const[password ,setPassword] = useState("");
    const[loading ,setLoader] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{    
            console.log("logging in");
            setLoader(true)
            await login(email , password);
            setLoader(false);
            props.history.push("/");

        } catch(err){
            setLoader(false);
        }
        setEmail("");
        setPassword("");
    }
    return(
        <div>
            <h1>Firebase login</h1>
            <input type="email" value={email} 
            onChange = {(e) => { setEmail(e.target.value)}}></input>
            <input type="password" 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}></input>

            <input type="button" value="submit" onClick={handleSubmit} disabled={loading}></input>
        </div>
    )
}



export default Login;