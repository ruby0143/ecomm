import React from 'react'

function Product() {
    return (
        <div className=' max-w-full font-family'>
            <section className='mt-20 relative'>
               <img className='w-full' src="\aaram_blue.png" alt="" />
               <div className='min-h-[34rem] absolute top-0 left-0 flex flex-col w-1/2 items-center justify-center  bg-gradient-to-r from-white to-transparent  '>
               
                <span className='text-8xl pl-8 text-[#027373]'>Aaram</span>
                <span className='text-xl pt-5'>Cooling Roll-On <br />10mL | 500 mg cannabinoids</span>
                <button className="border-2 border-[#027373] rounded-md -ml-14 px-14 py-2 mt-4 text-[#027373] hover:text-white hover:bg-[#027373] ">
                 Shop Now
                </button>
               </div>
            </section>



            <section className='text-center mt-24' >

                <span className='text-7xl'>Aaram by Gaanj</span>
                <div className='flex justify-center  space-x-10'>
                    <img className='h-[60vh]' src="\Aaraam_no bg.png" alt="" />
                    <div className='flex flex-col'>
                    <p className='text-left text-2xl pt-20 text-[#027373]'>Aaram means relief in Awadhi. This topical <br /> cooling roll-on relieves you of issues like <br /> general muscle soreness, spasms, involuntary <br /> contractions, migraines, and sinusitis. <br /> Packaged in a roll-on bottle, it's easy to carry <br /> around and very convenient to use.
                    </p>
                    <button className="border-2 border-[#027373] rounded-md  w-[33%] py-2 mt-6 text-[#027373] hover:text-white hover:bg-[#027373] ">
                    Shop Now
                    </button>
                    </div>
                </div>

            </section>



            <section >
                <div className='flex justify-center space-x-10 text-xl bg-[#409595] pb-20  mt-10 text-white'>


                    <div className='border-r-2 px-4 pt-40 pb-20'>
                    <span className='text-3xl'>Ingredients </span> 
                    <p className='pt-4'>
                    CBD extract; MCT oil;<br /> sunflower lecithin,<br /> proprietary blend of terpenes,<br /> fragrances and essential oils
                    </p>
                    </div>


                    <div className='border-r-2 px-4 pt-40 pb-20 '>
                    <span className='text-3xl'>Use  Cases</span>
                    <p className='pt-4'>
                    Aaram can be used to manage headaches <br /> & migraines, involuntary muscle spasms,<br /> post workout soreness and minor sprains <br /> & strains.
                    </p>
                    </div>


                    <div className='pt-32 pb-20' >  
                        <span className='text-3xl '>Shipping & Delivery</span>
                    
                        <p className='pt-4'>
                        Once you place an order with us, it will <br /> typically take 1 business day for our <br />team to process and pack your order. <br /> We have a standard fee of INR 150 for <br /> all orders. Delivery time for your order <br /> will range between 3-7 business days,<br /> depending on your location.
                        </p> 
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-2'>
                <div className='text-2xl px-44 py-20'>
                    <span className='text-5xl text-[#027373]'>More than just CBD</span>
                    <p className='pt-10 text-left'>
​​All of our formulations contain CBD plus naturally-occurring phytocannabinoids,     terpenes, flavonoids and more in every bottle. This significantly increases the efficacy of our products.
                    </p>
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/5eed11_74bc2bf86b394670ad06447669e55479~mv2.jpg/v1/fill/w_950,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed11_74bc2bf86b394670ad06447669e55479~mv2.jpg" alt="" />
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/5eed11_bf68bef7e642468e9a062c41c676bc5e~mv2.jpg/v1/fill/w_950,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed11_bf68bef7e642468e9a062c41c676bc5e~mv2.jpg" alt="" />
                </div>
                <div className='text-2xl px-24 py-20'>
                    <span className='text-5xl text-[#027373]'> Pure, Potent & Proprietary Formulations </span> 
                    <p className='pt-10 text-left'>
                    All of our formulations are proprietary and formulated by experts who have a decade of experience working in this space and creating best selling cannabis infused products in the international market.
                    </p>
                </div>
                <div className='text-2xl px-44 py-20' >
                    <span className='text-5xl text-[#027373]'>Less is more </span>
                    <p className='pt-10 text-left'>
                    Our proprietary blend of terpenes, essential oils and flavonoids increase the bioavailability of our products, meaning fewer drops generate the desired effects.
                    </p>
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/5eed11_292b60d99ccb4bbaaad7e2382d8a9c56~mv2.jpg/v1/fill/w_950,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed11_292b60d99ccb4bbaaad7e2382d8a9c56~mv2.jpg" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Product
