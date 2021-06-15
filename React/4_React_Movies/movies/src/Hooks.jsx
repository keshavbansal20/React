import React , {useState , useEffect} from 'react'

export default function Hooks() {
    const [count , setCount] = useState(0)
    const [time , setTime] = useState(Date.now());
    function fn() {
            console.log("hello");
            document.title = `You clicked ${count} times`;
        }
        //useEffect update everytime on  any updattion in page
        // useEffect(fn)
          // component did mount  one time after render
        // useEffect(fn,[])
        // after everytime the parameter inside that array changes
        useEffect(fn , [time,count]);
        
        console.log("hello")
    return (
       <>
        <button onClick={()=>{
            setCount(count+1)
        }}>+</button>
        <span>{count}</span>
        <button onClick = {()=> {
            setCount(count-1)
        }}>-</button>

        <p onClick = {()=>{setTime(Date.now())}}>{time}</p>
       </>
    )
}
