import React, { Component ,useContext } from 'react';
import { Switch , Route , BrowserRouter as Router , Redirect , Link} from "react-router-dom";
import { AuthContext , AuthProvider }  from './contexts/AuthProvider';


import Feed from './components/Feed';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

 function App(){

  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
            
            <PrivateRoute path="/" abc={Feed}></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )

  function PrivateRoute(props){
    console.log(props);
    let Component = props.abc;
    let { currentUser}= useContext(AuthContext);
    return (<Route {...props} render={(props) => {
      return currentUser != null ? <Component {...props}></Component> :
       <Redirect to="/login"></Redirect>
    }}></Route>)
  }
}

export default App;