import React  ,{ useState , useEffect} from 'react'
import auth from '../firebase';

export const AuthContext = React.createContext();
export  function AuthProvider({children}) {
    const [currentUser , setUser] = useState();
    const [loading , setLoading] = useState(true);

    async function login(email , password) {
        return await auth.signInWithEmailAndPassword(email, password);

    }

    async function signOut(){
        return await auth.signOut();
    }

    useEffect(() => {
        console.log("added evenr listener");
        let cleanUp = auth.onAuthStateChanged((user) => {
            console.log("user" , user);
            setUser(user);
            setLoading(false);
        })
        return cleanUp;
    },[]);

    const value = {
        login , 
        signOut , 
        currentUser
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
