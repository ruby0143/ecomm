import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { auth } from "../firebase";

function Product() {
    const [productData, setData] = useState();
    const [productId,setProductId] = useState(useLocation().pathname.split('/')[2]);
    const [user, setUser] = useState();
    // console.log(productId);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user, "printing from navbar");
            setUser(user);
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/products")
        .then(res =>{
            // console.log(res);
            setData(res.data.message.products[productId-1]);
        })
        .catch(err=>{
            console.log(err);
        })

        
    }, [productId])
    

    function addToCart(){
        axios.post("http://localhost:3000/addToCart",{uid : user.uid, pid : productId})
        .then(resp => {
            console.log(resp);
        })
        .catch(err=> console.log(err));
    }

    return (
        <div className=' max-w-full font-family'>
            <section className='mt-20 relative'>
                <img className='w-full max-md:h-[23rem]' src={productData?.header.image} alt="" />
                <div className='h-full absolute top-0 left-0 flex flex-col w-1/2 items-center justify-center  bg-gradient-to-r from-white to-transparent max-md:w-[70%]  '>
                    <span className='text-8xl pl-8 text-[#027373] max-md:text-3xl max-md:self-start'>{productData?.header.title}</span>
                    <span className='text-xl pt-5 max-md:px-5'>{productData?.header.description}<br />{productData?.header.quantity}</span>
                    <button className="border-2 border-[#027373] rounded-md -ml-14 px-14 py-2 mt-4 text-[#027373] hover:text-white hover:bg-[#027373] " onClick={addToCart}>
                        Add to cart
                    </button>
                </div>
            </section>



            <section className='text-center mt-24 ' >

                <span className='text-7xl max-md:text-4xl'>{productData?.about.title}</span>
                <div className='flex justify-center lg:space-x-10 max-md:flex-col max-md:items-center'>
                    <img className='h-[60vh] max-md:h-96 max-md:pt-5' src="\Aaraam_no bg.png" alt="" />
                    <div className='flex flex-col w-96 '>
                        <p className='text-left text-2xl pt-20 text-[#027373] max-md:text-lg max-md:pt-10 '>{productData?.about.description}
                        </p>
                        <button className="border-2 border-[#027373] rounded-md  w-[33%] py-2 mt-6 text-[#027373] hover:text-white hover:bg-[#027373] max-md:self-center ">
                            Shop Now
                        </button>
                    </div>
                </div>

            </section>



            <section >
                <div className='flex w-screen justify-center min-lg:space-x-10 text-xl bg-[#409595] pb-20 mt-10 text-white max-md:flex-col max-md:items-center max-md:pb-0 '>


                    <div className='border-r-2 px-20 pt-40 pb-20 w-[33%] max-md:border-b-2 max-md:px-10 max-md:w-full max-md:py-32  '>
                        <span className='text-3xl'>Ingredients </span>
                        <p className='pt-4'>
                           {productData?.useCases.ingredients}
                        </p>
                    </div>


                    <div className='border-r-2 px-10 pt-40 pb-20 w-[33%] max-md:border-b-2 max-md:px-10 max-md:w-full max-md:py-32'>
                        <span className='text-3xl'>Use  Cases</span>
                        <p className='pt-4'>
                        {productData?.useCases.useCases}
                        </p>
                    </div>


                    <div className='pt-32 px-10 pb-20 w-[33%] max-md:border-b-2 max-md:px-10 max-md:w-full max-md:py-32' >
                        <span className='text-3xl '>Shipping & Delivery</span>

                        <p className='pt-4'>
                        {productData?.useCases.shipping}
                        </p>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-2 max-md:flex max-md:flex-col max-md:mb-5'>
                <div className='text-2xl px-44 py-20 max-md:px-5 max-md:text-lg'>
                    <span className='text-5xl text-[#027373] max-md:text-4xl'>More than just CBD</span>
                    <p className='pt-10 text-left'>
                        All of our formulations contain CBD plus naturally-occurring phytocannabinoids,     terpenes, flavonoids and more in every bottle. This significantly increases the efficacy of our products.
                    </p>
                </div>
                <div className='max-md:order-2'>
                    <img src="https://static.wixstatic.com/media/5eed11_74bc2bf86b394670ad06447669e55479~mv2.jpg/v1/fill/w_950,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed11_74bc2bf86b394670ad06447669e55479~mv2.jpg" alt="" />
                </div>
                <div className='max-md:order-4'>
                    <img src="https://static.wixstatic.com/media/5eed11_bf68bef7e642468e9a062c41c676bc5e~mv2.jpg/v1/fill/w_950,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed11_bf68bef7e642468e9a062c41c676bc5e~mv2.jpg" alt="" />
                </div>
                <div className='text-2xl px-24 py-20 max-md:px-5 max-md:text-lg max-md:order-3'>
                    <span className='text-5xl text-[#027373]  max-md:text-4xl'> Pure, Potent & Proprietary Formulations </span>
                    <p className='pt-10 text-left'>
                        All of our formulations are proprietary and formulated by experts who have a decade of experience working in this space and creating best selling cannabis infused products in the international market.
                    </p>
                </div>
                <div className='text-2xl px-44 py-20 max-md:px-5 max-md:text-lg max-md:order-5' >
                    <span className='text-5xl text-[#027373]  max-md:text-4xl'>Less is more </span>
                    <p className='pt-10 text-left'>
                        Our proprietary blend of terpenes, essential oils and flavonoids increase the bioavailability of our products, meaning fewer drops generate the desired effects.
                    </p>
                </div>
                <div className='max-md:order-6'>
                    <img src="https://static.wixstatic.com/media/5eed11_292b60d99ccb4bbaaad7e2382d8a9c56~mv2.jpg/v1/fill/w_950,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed11_292b60d99ccb4bbaaad7e2382d8a9c56~mv2.jpg" alt="" />
                </div>
            </section>

            <section className='bg-[#f7d3a4] flex justify-center'>
                <div className=' w-[90%] flex flex-col py-10 items-center gap-10 my-10 bg-white'>
                    <span className='text-5xl max-md:text-4xl '>From our customers</span>
                    <div className=' text-xl text-left flex justify-center space-x-16 max-md:flex-col max-md:items-center max-md:space-x-0 max-md:space-y-7 max-md:px-3 max-md:text-lg'>
                        <div className='border-2 px-5 py-5 w-[28%] flex flex-col bg-white space-y-1 shadow-sm max-md:w-full max-md:px-5 ' >
                        <p>{productData?.testimonials[0].review}</p>
                        <span className='pt-3'>{productData?.testimonials[0].name}</span>
                        <span>{productData?.testimonials[0].role}</span>   
                        <span>{productData?.testimonials[0].reason}</span>   
                        </div>
                        <div className='border-2 px-5 py-5 w-[28%] flex flex-col bg-white space-y-1 shadow-sm max-md:w-full max-md:px-5'>
                        <p>{productData?.testimonials[1].review}</p>
                        <span className='pt-3'>{productData?.testimonials[1].name}</span>
                        <span>{productData?.testimonials[1].role}</span>   
                        <span>{productData?.testimonials[1].reason}</span>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
