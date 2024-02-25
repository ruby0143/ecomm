import axios from 'axios';
import React, { useState, useEffect ,useContext} from 'react'

import { auth } from "../firebase";
import LoginModalContext from '../Context/Context';

function CartItem(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    const [user, setUser] = useState();
    // console.log(productId);
    const { cartTotal,setTotal } = useContext(LoginModalContext)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user, "printing from navbar");
            setUser(user);
        })
    }, [])

    function increaseQty() {
        setQuantity(prev => prev + 1);
        setTotal(props.price*(quantity+1));
        axios.post("http://localhost:3000/addToCart", { uid: user.uid, pid: props.pid })
            .then(res => {
                
                
            })
            .catch(err => console.log(err))

    }
    function reduceQty() {
        setQuantity(prev => prev - 1);
        setTotal(props.price*(quantity-1));
        axios.post("http://localhost:3000/deleteFromCart", { uid: user.uid, pid: props.pid, delete : false })
            .then(res => {
                console.log(res)
                
            })
            .catch(err => console.log(err))

    }

    function removeItem() {
        setQuantity(0)
        setTotal(0)
        axios.post("http://localhost:3000/deleteFromCart", { uid: user.uid, pid: props.pid, delete:true })
            .then(res => {
                console.log(res)
                
            })
            .catch(err => console.log(err))
    }
    console.log(cartTotal);

    return (
        <div>
            {quantity > 0 && (<div className='flex space-x-7 mt-7 '>
                <div className='flex space-x-8'>
                    <img src="https://static.wixstatic.com/media/e32ef9_0949145183234baf87a349649e9457bf~mv2.jpg/v1/fill/w_125,h_115,al_c,q_85,usm_0.66_1.00_0.01/e32ef9_0949145183234baf87a349649e9457bf~mv2.webp" alt="" />
                    <span>{props.title} <br /></span>
                </div>

                <div className='border-2 flex space-x-6 h-8 px-3 border-black '>
                    <button onClick={reduceQty}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQty}>+</button>

                </div>
                <span>₹{props.price * quantity}</span>
                <button className='flex self-start'>
                    <img className='self-start' src="\icons8-close.svg" alt="" onClick={removeItem} />
                </button>


            </div>)}

        </div>
    )
}

export default CartItem
