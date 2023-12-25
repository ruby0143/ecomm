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
            <div
        id="dropdown-menu"
        className=" flex-col min-h-screen w-[31%] -mt-[10vh] bg-[#027373] fixed right-0 py-10 gap-3 px-5 text-[#a9d9ce]"
        style={{ display:"none"}}
      >
                <span className='text-2xl '>Login / SignUp</span>
                <hr className='border-1 border-[#a9d9ce] mt-2'/>
                <div className='flex flex-col w-[50vh] mx-auto gap-3 text-xl mt-20'>
                    <label for='label'>Email</label>
                    <input className='rounded-md h-10 shadow-md' type='email' onChange={(e) => setEmail(e.target.value)} />
                    <label for='label'>Password</label>
                    <input className='rounded-md h-10 shadow-md' type='password' onChange={(e) => setPassword(e.target.value)} />
                 <span className='text-lg px-20'>New to this site? Sign Up</span>
                </div>

                <div className='flex gap-3 justify-center  '>

                <button className='bg-[#a9d9ce] w-40 px-4 py-2 rounded-md shadow-md border-2 text-black' onClick={signUpUser}>Sign Up</button>
                <button className='bg-[#a9d9ce] w-40 px-4 py-2 rounded-md shadow-md border-2 text-black' onClick={signInUser}>Log In</button>
                </div>
            </div>

        </div>
    )
}

export default Login