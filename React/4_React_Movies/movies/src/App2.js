import React from 'react'
let {Switch , Route ,BrowserRouter as Router , Redirect} from "react-router-dom";
import Feed from "./component/Feed";
import Login from "./component/Login";
import Signup from "./component/Signup'
let isSignedUp = Math.random()<0.5?true:false;
export default function App2() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component = {Login}></Route>
                <Route path = "/signup" component = {Sugnup}></Route>
                <PrivateRoute path="/" exact component={Feed}></PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}

function PrivateRoute(parentProps){
    let Component = parentProps.component;
    return(
        <Route {...parentprops}
            render={
                (props) => {
                    isSignedUp = true? 
                        <Component {...props}></Component>: <Redirect to="/login"></Redirect>
                }
            }
        >
        
        </Route>
    )
}

