import React, { useState, useEffect } from 'react'
import { auth } from "../firebase";
import axios from 'axios';


function Profile() {
    const [user, setUser] = useState();
    const [nameIcon, setIcon] = useState();
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user, "printing from navbar");
            setUser(user);
            setIcon(user.email.slice(0, 1).toUpperCase());
        })
    }, [])

    useEffect(() => {
        axios.post("http://localhost:3000/users", { uid: user?.uid })
            .then(resp => {
                // console.log(resp);
                const data = resp.data.message;
                setName(data.firstName);
                setLastName(data.lastName);
                setMobile(data.mobile);
                setAddress(data.address);
            })
            .catch(err => console.log(err));
    }, [user])

    function updateData() {
        const body = {
            uid: user.uid,
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            address: address
        }
        setTimeout(() => {
            axios.post("http://localhost:3000/updateUser", body)
                .then(resp => {
                    // console.log(resp);
                    console.log(resp);
                })
                .catch(err => console.log(err));
        }, 3000)

    }

    return (

        <div className='mt-[11vh] p-10 w-10/12 flex m-auto sm:flex-row italic max-md:flex-col max-md:w-full max-md:items-center'>
            <div className='flex flex-col m-10 w-3/12 max-md:w-full max-md:items-center max-md:m-0'>
                <div className='border-2 border-zinc-200 flex flex-col items-center my-4'>
                    <div className="m-5 rounded-full flex w-fit text-xl p-3 px-4 relative bg-[#027373] text-white" id="Loginbutton">{nameIcon}</div>

                    <div className='m-5  font-medium'>{user?.email}</div>
                </div>
                <div className='border-2 border-zinc-200 flex lg:flex-col text-zinc-600 my-4 '>
                    <p className='m-4'>Home</p>
                    <p className='m-4'>Orders</p>
                    <p className='m-4'>Cart</p>
                    <p className='m-4'>Contact Us</p>
                </div>

            </div>
            <div className='w-9/12 m-10 italic max-md:m-0 max-md:w-full'>
                <div className='m-4 text-2xl '>
                    Manage your profile here
                </div>
                <hr />
                <div className='m-4 flex flex-col max-md:m-0'>
                    <label className='my-4'>First Name :</label>
                    <input type='text' className='rounded-md h-10 shadow-md border-2 border-zinc-200 focus:outline-none p-3' value={firstName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='m-4 flex flex-col max-md:m-0'>
                    <label className='my-4'>Last Name :</label>
                    <input type='text' className='rounded-md h-10 shadow-md border-2 border-zinc-200 focus:outline-none p-3' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='m-4 flex flex-col max-md:m-0'>
                    <label className='my-4'>Mobile:</label>
                    <input type="tel" name="" id="" className='rounded-md h-10 shadow-md border-2 border-zinc-200 focus:outline-none p-3' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className='m-4 flex flex-col max-md:m-0'>
                    <label className='my-4'>Address:</label>
                    <textarea name="" id="" rows="5" className='rounded-md shadow-md border-2 border-zinc-200 focus:outline-none p-3' value={address} style={{ resize: 'none' }} onChange={(e) => setAddress(e.target.value)} ></textarea>
                </div>
                <div className='flex justify-center '>

                    <button className="m-auto border-2 border-white px-7 py-2 bg-[#027373] text-white  rounded-md max-md:mt-10" onClick={updateData}>Save Changes</button>
                </div>
            </div>

        </div>

    )
}

export default Profile