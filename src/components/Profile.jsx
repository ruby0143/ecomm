import React, { useState, useEffect } from 'react'
import { auth } from "../firebase";

function Profile() {
    const [user, setUser] = useState();
    const [firstName, setName] = useState();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user, "printing from navbar");
            setUser(user);
            setName(user.email.slice(0, 1).toUpperCase());
        })
    }, [])

    return (

        <div className='mt-[11vh] p-10 w-10/12 flex m-auto sm:flex-row italic'>
            <div className='flex flex-col m-10 w-3/12 '>
                <div className='border-2 border-zinc-200 flex flex-col items-center my-4'>
                    <div className="m-5 rounded-full flex w-fit text-2xl p-3 px-4 relative bg-[#027373] text-white" id="Loginbutton">{firstName}</div>

                    <div className='m-5  font-medium'>{user?.email}</div>
                </div>
                <div className='border-2 border-zinc-200 flex flex-col text-zinc-600 my-4'> 
                    <p className='m-4'>Home</p>
                    <p className='m-4'>Orders</p>
                    <p className='m-4'>Cart</p>
                    <p className='m-4'>Contact Us</p>
                </div>

            </div>
            <div className='w-9/12 m-10 italic '>
                <div className='m-4 text-2xl '>
                    Manage your profile here
                </div>
                <hr />
                <div className='m-4 flex flex-col'>
                    <label className='my-4'>First Name :</label>
                    <input type='text' className='rounded-md h-10 shadow-md border-2 border-zinc-200 focus:outline-none p-3' />
                </div>
                <div className='m-4 flex flex-col'>
                    <label className='my-4'>Last Name :</label>
                    <input type='text' className='rounded-md h-10 shadow-md border-2 border-zinc-200 focus:outline-none p-3' />
                </div>
                <div className='m-4 flex flex-col'>
                    <label className='my-4'>Mobile:</label>
                    <input type="tel" name="" id="" className='rounded-md h-10 shadow-md border-2 border-zinc-200 focus:outline-none p-3'/>
                </div>
                <div className='m-4 flex flex-col'>
                    <label className='my-4'>Address:</label>
                    <textarea name="" id="" rows="5" className='rounded-md shadow-md border-2 border-zinc-200 focus:outline-none p-3' style={{resize:'none'}}></textarea>
                </div>
            </div>

        </div>

    )
}

export default Profile