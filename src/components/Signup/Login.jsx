import React, { useState } from 'react'
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);
    

    const provider = new GoogleAuthProvider();
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
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log("Successful Login");
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log("Login Failed");
        //     });

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("User successfully logged in as : ",user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("Failed to login, Error : ",error);
                // ...
            });

    }
    const handleLoginChange = () => {
        console.log(loginState)
        setLoginState(prev => !prev)
    }
    return (
        <div>
            <div className='h-screen flex flex-col justify-center items-center'>
                {loginState ? (<>
                    <h2>Login</h2>
                    <p>New to this site? <button onClick={handleLoginChange}>Sign Up</button></p>
                    <div className='flex flex-col'>
                        <label for='label'>Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} />
                        <label for='label'>Password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='w-full' onClick={signInUser}>Log In</button>
                </>) : (<>
                    <h2>Sign Up</h2>
                    <p>Already a member? <button onClick={handleLoginChange}>Log In</button></p>
                    <div className='flex flex-col'>
                        <label for='label'>Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} />
                        <label for='label'>Password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='w-full' onClick={signUpUser}>Sign Up</button>
                </>)}

            </div>

        </div>
    )
}

export default Login