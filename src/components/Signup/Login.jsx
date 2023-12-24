import React, { useState } from 'react'
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpUser = async (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("User created as : ", userCredential)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Failed to create user, error log: ", error);
                // ..
            });
    }

    const signInUser = async (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Successful Login");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Login Failed");
            });

    }

    return (
        <div>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h2>Login</h2>
                <p>New to this site? Sign Up</p>
                <div className='flex flex-col'>
                    <label for='label'>Email</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} />
                    <label for='label'>Password</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='w-full' onClick={signUpUser}>Sign Up</button>
                <button className='w-full' onClick={signInUser}>Log In</button>
            </div>

        </div>
    )
}

export default Login