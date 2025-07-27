import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

 export const AuthContext = createContext(null)
  const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
           displayName : name,
           photoURL : photo,
        })
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('observing current user', currentUser);
            setUser(currentUser);
            if(currentUser){
                const userInfo = {
                    email : currentUser.email
                }
                axiosPublic.post('/jwt' , userInfo)
                .then(res => {
                    localStorage.setItem('access-token', res.data.token)
                     setLoading(false);

                })
            }else{
                 localStorage.removeItem('access-token')
            }
           
        })
        return () => {
            return unSubscribe();
        }
    },[axiosPublic])


    const authInfo = { user, loading, createUser, signInUser, logOut, updateUserProfile, signInGoogle }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;