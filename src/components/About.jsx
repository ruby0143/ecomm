import React from 'react'

function About() {
    return (
        <div className='font-family mt-[11vh] bg-[#f7ffff]'>
            <div className='text-center flex flex-col'>
                <span className='text-6xl '>About us</span>
                <span className='text-xl'>What do an ex-boxer, an entrepreneur, and a scientist have in common? <br />
                    They all want to create holistic, sustainable, and life-improving medicines.</span>
            </div>

            <div className='text-left flex flex-col w-[40%] space-y-7  m-auto mt-9 mb-10'>
                
             <span>In 2021, Jose, a former boxer from the UAE, discussed the power of CBD on an online platform. He spoke about how             it could reduce inflammation and ease tight muscles, thus treating the cause of pain rather than just the pain             itself. </span>
             <span>Shikhar, an entrepreneur from India, joined the conversation. He shared that the Vijaya plant, an important source             of CBD, has been praised for its medicinal value in ancient scriptures since 3rd millennium BCE. It is also             recognised as an Ayurvedic medicine in India.</span>
             <span>The duo soon met Bhavana, a scientist from Canada. She corrected someone that Cannabis sativa Linn. (Vijaya) does             not cure COVID-19, but is effective in managing symptoms like body ache, lack of appetite, and the general anxiety             around the pandemic.</span>
             <span>
             Jose and Shikhar discovered that Bhavana had conducted extensive research on the medical benefits of the Vijaya             plant for over a decade. She had spent her time formulating products that could leverage the plant's benefits to             address various medical conditions.
             </span>
             <span>
             The three of them then decided to work together and create Gaanj wellness, a brand of wellness products &             medicines that provides people with a safe, natural and effective alternative to allopathic & opioid based             medicines. 
             </span>
             
            </div>

            <section className='bg-[#027373] text-center text-white mb-20'>

                <div className='flex flex-col space-y-10 w-[65%] m-auto py-10 pb-20'>
                <span className='text-5xl '>Cannabis, Hemp, Vijaya, Bhaang…</span>

                <p className='text-xl text-left leading-loose'>Cannabis, more commonly known as Bhaang or Vijaya, is a plant that originated from the Indian subcontinent. Its use can be traced back to as early as the 3rd millennium BCE. It has been used in our country for medicinal, commercial, recreational, and spiritual purposes. Vijaya in Sanskrit means victory. The plant got its name because it is believed to help conquer Arishadvarga or the six enemies of the mind, namely desire, anger, greed, arrogance/ego, delusion and jealousy. This is why the Atharva Veda referred to Vijaya as one of the five sacred plants necessary for humanity. </p>

                <p className='text-xl text-left leading-loose'>Vijaya has a long history of traditional use in Ayurvedic medicine, a system of natural healing that has been practiced in India for thousands of years. In Ayurveda, cannabis is known as bhang and is considered a medicinal herb with a range of therapeutic properties. According to Ayurvedic principles, cannabis is believed to have a balancing effect on the body and mind, and can be used to treat a variety of conditions, including pain, inflammation, anxiety, and insomnia. </p>

                </div>
            </section>

            <section className='text-center w-[70%] m-auto'>
                <span className='text-5xl '>Meet Our Team</span>
                <hr className='border-2 w-10 m-auto mt-5 border-[black]'/>
                <div className='flex justify-center space-x-8 pt-14 pb-2'>
                    <div className='flex flex-col'>
                    <img className='w-80' src="https://static.wixstatic.com/media/e32ef9_87a5ada3f38447f1bfec9ac3ea682f18~mv2.jpg/v1/crop/x_845,y_1277,w_2097,h_2851/fill/w_388,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Shikhar%20M.jpg" alt="" />
                    
                    <span className='text-left text-2xl pb-4'>Shikhar Mishra</span>
                    <p className='w-80 text-left'>
                        
                        Shikhar Mishra started his first business at the age of 16 and currently runs Angetha Agro, a company that works                        with products of value derived from Cannabis. He has a Masters in Entrepreneurship & Venture Development from Delhi                     Technological University. </p>
                    </div>
                    <div className='flex flex-col'>
                    <img className='w-80'  src="https://static.wixstatic.com/media/e32ef9_145a107666784d95adceb078e3a7f1c0~mv2.jpg/v1/fill/w_388,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bhavana%20Rao.jpg" alt="" />
                    <span className='text-left text-2xl pb-4'>Bhavana Rao</span>
                    <p className='w-80 text-left '>
                    Bhavana is a food scientist, chemical engineer and a cannabis product developer. Over the past decade she has                      helped build multiple manufacturing operations in food, beer, stem cells and yes cannabis.
                    </p>
                    </div>
                    <div className='flex flex-col'>
                    <img className='w-80' src="https://static.wixstatic.com/media/e32ef9_f8a6d90995574b0eb1e59d1048e1327a~mv2.jpg/v1/crop/x_14,y_395,w_675,h_955/fill/w_388,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jose%20Mohan.jpg" alt="" />
                    <span className='text-left text-2xl pb-4'>Jose Mohan</span>
                    <p className='w-80 text-left '>
                    
                    Jose works very closely with athletes and organizes several high profile boxing events in the middle eastern countries. 
                    </p>
                    </div>
                    
                </div>

            </section>
        </div>
    )
}

export default About
