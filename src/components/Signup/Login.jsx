import React, { useEffect, useState } from 'react'
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login({open}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(open);
    
    

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

    const closeModal = () =>{
        setisModalOpen(prev => !prev)
    }
    return (
        <div>
            {isModalOpen&&(

            <div className='
         flex-col min-h-screen w-[31%] -mt-[10vh] bg-[#027373] fixed right-0 py-10 gap-3 px-5 text-[#a9d9ce] items-center'
        style={{ display:"flex"}}>
                <img className="h-[6vh] absolute left-3 w-16" onClick={closeModal} src="\close-icon.svg" alt="" />
                {loginState ? (<>
                    <span className='text-2xl '>Login</span>
                    <hr className='border-1 border-[#a9d9ce] mt-2'/>
                    <p>New to this site? <button onClick={handleLoginChange}>Sign Up</button></p>
                    <div className='flex flex-col w-[50vh] mx-auto gap-3 text-xl mt-20'>
                        <label for='label'>Email</label>
                        <input className='rounded-md h-10 shadow-md' type='email' onChange={(e) => setEmail(e.target.value)} />
                        <label for='label'>Password</label>
                        <input className='rounded-md h-10 shadow-md' type='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='bg-[#a9d9ce] w-40 px-4 py-2 rounded-md shadow-md border-2 text-black' onClick={signInUser}>Log In</button>
                </>) : (<>
                    <h2>Sign Up</h2>
                    <p>Already a member? <button onClick={handleLoginChange}>Log In</button></p>
                    <div className='flex flex-col w-[50vh] mx-auto gap-3 text-xl mt-20'>
                        <label for='label'>Email</label>
                        <input className='rounded-md h-10 shadow-md' type='email' onChange={(e) => setEmail(e.target.value)} />
                        <label for='label'>Password</label>
                        <input className='rounded-md h-10 shadow-md' type='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='bg-[#a9d9ce] w-40 px-4 py-2 rounded-md shadow-md border-2 text-black' onClick={signUpUser}>Sign Up</button>
                </>)}

            </div>
            )}

        </div>
    )
}

export default Login