import React , {useState , useEffect} from 'react';

import auth from '../firebase';

export const AuthContext = React.createContext();

export function AuthProvider({children}) {
    const [currentUser , setCurrentUser] = useState();
    const [loading , setLoading] = useState(true);
    function login(email , password) {
        return auth.signInWithEmailAndPassword(email , password);

    }
    
    function signout() {
        return auth.signOut();
    }
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(()=>{
        console.log("inside listener" ,currentUser);
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log("inside listener" , user);
            setCurrentUser(user);
            setLoading(false);
        })
        return function () {
            console.log("hello");
            unsubscribe();
        }
    },[]);

    let value = {
        currentUser , 
        signout , 
        login,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}
