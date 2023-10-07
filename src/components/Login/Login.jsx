import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';


const Login = () =>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const handleUserSingIn = ()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            const user= result.user;
            console.log(user);
        })
        .then((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            <h2>To gain access please provide authorized credentials</h2>
            <button onClick={handleUserSingIn} type='button'>Google Login</button>
        </div>
    );
}
export default Login;