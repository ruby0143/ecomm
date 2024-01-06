import React from 'react'

function CartItem() {
    return (
        <div>
            <div className='flex space-x-7 mt-7 '>
                <div className='flex space-x-8'> 
                    <img src="https://static.wixstatic.com/media/e32ef9_0949145183234baf87a349649e9457bf~mv2.jpg/v1/fill/w_125,h_115,al_c,q_85,usm_0.66_1.00_0.01/e32ef9_0949145183234baf87a349649e9457bf~mv2.webp" alt="" />
                    <span>Aaram - Cooling Roll-on <br />
                    ₹1,799.00</span>
                    </div>
                   
                    <div className='border-2 flex space-x-6 h-8 px-3 border-black '>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    
                    </div>
                    <span>₹3,598.00</span>
                    <img className='self-start' src="\icons8-close.svg" alt="" />

                
                </div>
        </div>
    )
}

export default CartItem
