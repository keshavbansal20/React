import React , {useState , useEffect} from 'react'
import'./App.css';
import auth from "./firebase";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState(false);
    const [loader , setLoader] = useState(false);
    const [user , setUser] = useState(null);
    const [mainLoader , setMainLoader] = useState(true);
    //user --> usre data
    // loading -> loading
    // error -> show
    const handleSubmit = async () =>{
        // alert(email+password)
        try{
            setLoader(true);
            // setMainLoader(false);
            let res = await auth.signInWithEmailAndPassword(email , password);
            console.log(res.user);
            setUser(res.user);
            setLoader(false);
            
        }catch{
            setError(true);
            setLoader(false);
        }
        setEmail("");
        setPassword("");
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    
    const handleLogout = async()=> {
        setLoader(true);
        await auth.signOut();
        setUser(null);
        setLoader(false);
        // setMainLoader(false)
    }
    useEffect(()=> {
        auth.onAuthStateChanged((user)=> {
            
                setUser(user);
                setMainLoader(false);
            
        });
    },[]);

    return (
       <> 
       { mainLoader == true ? <h1>wait for a second</h1> :
        // {error == true ?<h1> Failed to Login 
        //     <button type="button" onClick = {()=>{
        //         setEmail("");
        //         setPassword("");
        //         setError(false);
        //     }}>Login again</button>
        //     </h1>:
    
        loader == true ? <h1>Loading...</h1> :
            user !=null ?
            <>
                <h1>User LoggedIn {user.uid}
                    <button onClick = {handleLogout}>Logout</button>
                </h1> 

            </>
            :
            <>
                <h1>firebase login</h1>
                <input type="email" value={email}
                onChange = {handleEmailInput}></input>
                <input type="password" value={password}
                onChange = {(e)=> {
                    setPassword(e.target.value)
                }}></input>
                <input type="button" value="submit" onClick={handleSubmit}></input>
            </>
        }
      </>
    );
}


