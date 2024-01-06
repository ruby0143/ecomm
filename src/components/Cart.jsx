import React, { useState, useEffect,useContext } from 'react'
import CartItem from './CartItem'
import axios from 'axios'
import { auth } from "../firebase";


function Cart() {
    const [user, setUser] = useState();
    const [userCart,setCart] = useState([])
    const [cartTotal,setTotal] = useState()
    // console.log(productId);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user, "printing from navbar");
            setUser(user);
        })
    }, [])

    useEffect(() => {
        axios.post("http://localhost:3000/getCart", { uid: user?.uid })
            .then(res => {
                setTotal(res.data.total,"Printing cart total");
                setCart(res.data.message.cartItems)
                setCartContext(res.data.message.cartItems)
                
            })
            .catch(err => console.log(err));
    }, [user])



    return (
        <div className='mt-[11vh] flex justify-center font-family space-x-28 bg-[#f7ffff]'>
            <div className='flex flex-col mt-10 mb-32'>
                <span className='text-2xl pb-4'>My cart</span>
                <hr className='border-1 border-black w-full' />
                {userCart?.map((ele,idx)=>{
                    return <CartItem price = {ele.price} title={ele.title} quantity={ele.quantity}
                    pid={ele.pid}/>
                })}
                
                <hr className='border-1 border-black w-full mt-9' />
            </div>
            <div className='mt-12 w-72'>
                <span className='text-2xl '>Order summary </span>
                <hr className='border-1 border-black w-full mt-2' />
                <div className='flex justify-between mt-6 text-xl'>
                    <span>Total</span>
                    <span>₹{cartTotal}</span>
                </div>
                <span >Tax included</span>
                <button className=" border-2 rounded-md w-full py-2 bg-[#027373] text-white hover:bg-[#a9d9ce] duration-200 max-sm:mb-10 mt-10  ">
                    Checkout
                </button>
                <span className='flex justify-center gap-1 items-center'><img className='h-4' src="\icons8-lock.svg" alt="" />Secure Checkout</span>
            </div>
        </div>
    )
}

export default Cart
