import React from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
function NavBar(props) {
    let { basket} = props;
    console.log(basket)
    
    return (

        <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
        NavBar
        {/* <a href="/cart"></a>*/}   
        <Link to="/cart">
        <span style={{ marginLeft: "4rem" }} > {basket?.length}</span>
        
        </Link>
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop" , store);
    return store;
}

const HigherOrderComponent = connect(mapStateToProps)(NavBar);
export default HigherOrderComponent;
// export default NavBar;