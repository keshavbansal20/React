import React from 'react'
import {connect} from "react-redux";
function NavBar(props) {
    const cartCount = props.cardCount;
    return (

        <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            NavBar
            <span style={{ marginLeft: "4rem" }}>{cartCount}</span>
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop" , store);
    return store;
}

const HigherOrderComponent = connect(mapStateToProps)(NavBar);
export default HigherOrderComponent;
