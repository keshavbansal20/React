import React from "react";
import { Route , Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { withRouter } from "react-router";
const PrivateRoute = (props) => {
    //map staet to props 
    console.log("hello")
    let auth = props.auth;
    let Component = props.component;

    console.log(auth.uid);
    console.log(Component);
    return (<Route {...props}
        render={({ props }) => {
            return( auth.uid ? 
                <Component {...props} />
             : <Redirect {...props}to="/"
                />)
        }
        }
    />
);
};


function mapStateToProps(state){
    return { auth:state.firebase.auth }
}

export default  (connect(mapStateToProps))(PrivateRoute);