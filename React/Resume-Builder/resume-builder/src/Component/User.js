import React, { useState , useEffect } from 'react';
import { userFetchMiddleWare} from "../redux/user/userFetchMiddleWare";

import {connect} from "react-redux";

function User(props){


    const {loading ,error , users} = props;
    useEffect(()=>{
        props.fetchUser();
        console.log("will make async request")
    },[]);

    return(
        <div>
            {loading?<h2>Loading...</h2>:
            error ? 
                <h2>{error}</h2> 
                    : <> 
                    <h2>User List</h2>
                        {users.map((user)=>{
                        return(
                            <li style={{listStyle:"none"}}
                            key={user.id}>{user.name}
                            </li>
                        )
                        })}
                     </>
            }
        </div>
    )
}

function mapStatetoProps(store) {
    return store.User;
}

function mapDispatchedtoProps(dispatch){
    return {
        fetchUser:()=> {
            return dispatch(userFetchMiddleWare);
        }
    }
}

export default connect(mapStatetoProps , mapDispatchedtoProps)(User);