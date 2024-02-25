import React, { useState, useEffect, useContext } from 'react'
import CartItem from './CartItem'
import axios from 'axios'
import { auth } from "../firebase";
import LoginModalContext from '../Context/Context';

function Cart() {
    const [user, setUser] = useState();
    const [userCart, setCart] = useState([])

    // console.log(productId);
    const { cartTotal, setTotal } = useContext(LoginModalContext)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user, "printing from navbar");
            setUser(user);
        })
    }, [])

    useEffect(() => {
        axios.post("http://localhost:3000/getCart", { uid: user?.uid })
            .then(res => {
                setTotal(res.data.total, "Printing cart total");
                setCart(res.data.message.cartItems)


            })
            .catch(err => console.log(err));
    }, [user])

    const canMakePaymentCache = 'canMakePaymentCache';

    // useEffect(()=> {
    //     // Check if Google Pay is supported
    //     if (!window.PaymentRequest) {
    //         console.log('Web payments are not supported in this browser.');
    //         return;
    //     }

    //     // Create supported payment method
    //     const supportedInstruments = [
    //         {
    //             supportedMethods: ['https://tez.google.com/pay'],
    //             data: {
    //                 pa: 'anget97401@barodampay',
    //                 pn: 'Angetha Agro',
    //                 tr: '1234ABCD',  // Your custom transaction reference ID
    //                 url: 'http://localhost:5173/cart',
    //                 mc: '1234', // Your merchant category code
    //                 tn: 'Purchase in Merchant',
    //                 am: '10.00',
    //                 cu: 'INR'
    //             },
    //         }
    //     ];

    //     // Create order detail data
    //     const details = {
    //         total: {
    //             label: 'Total',
    //             amount: {
    //                 currency: 'INR',
    //                 value: '10.01', // sample amount
    //             },
    //         },
    //         displayItems: [{
    //             label: 'Original Amount',
    //             amount: {
    //                 currency: 'INR',
    //                 value: '10.01',
    //             },
    //         }],
    //     };

    //     // Create payment request object
    //     let request = null;
    //     try {
    //         request = new PaymentRequest(supportedInstruments, details);
    //     } catch (e) {
    //         console.log('Payment Request Error: ' + e.message);
    //         return;
    //     }

    //     if (!request) {
    //         console.log('Web payments are not supported in this browser.');
    //         return;
    //     }

    //     // Function to check if payment can be made
    //     function checkCanMakePayment(request) {
    //         // Check canMakePayment cache, use cache result directly if it exists.
    //         if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
    //             return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
    //         }

    //         // If canMakePayment() isn't available, default to assume the method is
    //         // supported.
    //         var canMakePaymentPromise = Promise.resolve(true);

    //         // Feature detect canMakePayment().
    //         if (request.canMakePayment) {
    //             canMakePaymentPromise = request.canMakePayment();
    //         }

    //         return canMakePaymentPromise
    //             .then((result) => {
    //                 // Store the result in cache for future usage.
    //                 sessionStorage[canMakePaymentCache] = result;
    //                 return result;
    //             })
    //             .catch((err) => {
    //                 console.log('Error calling canMakePayment: ' + err);
    //             });
    //     }

    //     // Function to show the payment UI
    //     var canMakePaymentPromise = checkCanMakePayment(request);
    //     canMakePaymentPromise
    //         .then((result) => {
    //             showPaymentUI(request, result);
    //         })
    //         .catch((err) => {
    //             console.log('Error calling checkCanMakePayment: ' + err);
    //         });

    //     // Check if payment can be made and show the payment UI
    //     const handleBuyClicked = async () => {
    //         const canMakePaymentResult = await checkCanMakePayment(request);
    //         showPaymentUI(request, canMakePaymentResult);
    //     };

        

    // },[])

    return (
        <div className='mt-[11vh] flex justify-center font-family space-x-28 bg-[#f7ffff]'>
            <div className='flex flex-col mt-10 mb-32'>
                <span className='text-2xl pb-4'>My cart</span>
                <hr className='border-1 border-black w-full' />
                {userCart?.map((ele, idx) => {
                    return <CartItem price={ele.price} title={ele.title} quantity={ele.quantity}
                        pid={ele.pid} />
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
                <button className=" border-2 rounded-md w-full py-2 bg-[#027373] text-white hover:bg-[#a9d9ce] duration-200 max-sm:mb-10 mt-10  " id='checkOut'>
                    Checkout
                </button>
                <span className='flex justify-center gap-1 items-center'><img className='h-4' src="\icons8-lock.svg" alt="" />Secure Checkout</span>
            </div>
        </div>
    )
}

export default Cart
