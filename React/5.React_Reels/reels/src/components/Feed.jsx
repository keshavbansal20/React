import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

function Feed() {

    const [loading , setLoading] = useState(false);
    const { signout }= useContext(AuthContext);
    const handleLogout = async () => {
        try{
            
            setLoading(true);

            await signout();
            setLoading(false);
        } catch{
            console.log(err);
            setLoading(false);
        }
    }
    return(
        <div>
            Feed
            <button onClick={handleLogout} disabled={loading}>Logout</button>
        </div>
    )
}

export default Feed;