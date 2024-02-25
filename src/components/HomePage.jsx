import React, { useState } from "react";
import { Link } from 'react-router-dom';


function HomePage() {
  const [image, setimage] = useState(
    "https://static.wixstatic.com/media/e32ef9_bfc0fe40ca004d81b60eb36acb109fb7~mv2.jpg/v1/crop/x_173,y_0,w_678,h_1024/fill/w_404,h_610,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Aaraam_2.jpg"
  );

  const [image2, setimage2] = useState(
    "https://static.wixstatic.com/media/nsplsh_97f90f8e2e0a428d91c969887eaa53e1~mv2.jpg/v1/crop/x_651,y_0,w_949,h_1426/fill/w_423,h_635,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Slumber%20Sleep%20Aid.jpg"
  );

  return (
    <div className="font-family  ">
      <div className="bg-[#fbfbfb]">
        <div className=" inset-x-0 top-0 text-center py-10 ">
          <div className="text-2xl mt-14 ">
            Ascend to new heights of wellness with the
          </div>
          <br />
          <span className="text-6xl  max-md:text-5xl">Transformative Effects of CBD</span>
          <br />
          <br />
          <img
            className="w-screen"
            src="\Copy of All products_whitebg.png"
            alt=""
          />
          <span className="text-2xl">Gaanj Wellness is an exquisite destination <br /> for the discerning wellness seeker</span>
          <br />
          <button className="border-2 rounded-xl px-32 py-3 mt-4 text-white bg-[#027373] hover:text-black hover:bg-white ">
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-[#f7ffff]">
        <div className="flex justify-center mt-10  ">
          <hr className="border-1 border-black w-96 mt-7 border-solid " />
          <span className="px-5 text-5xl text-center max-md:text-4xl">Featured Products</span>
          <hr className="border-1 border-black w-96  mt-7" />
        </div>
        <div className="flex w-full justify-center items-center max-sm:flex-col">
          <div className="text-left w-[70vh] h-[70vh] pt-14 px-10 flex flex-col justify-center max-sm:w-screen max-sm:order-2 max-sm:h-[30vh] max-sm:pt-4">
            <span className="text-4xl max-sm:pt-5  ">Topicals</span>
            <br />
            <p className="text-xl max-md:text-base ">
              Looking for fast-acting long-lasting relief for pain? Whether it
              is minor ache or chronic discomfort, our roll-ons offer convenient
              and effective targeted pain treatment.
            </p>
            <br />

            <button className=" border-2 rounded-xl w-[25vh] py-2 bg-[#027373] text-white hover:bg-[#a9d9ce] duration-200 max-sm:mb-10   ">
              Shop Now
            </button>
          </div>
          <div className="pr-44 ml-20 max-md:pr-8 max-sm:ml-10 max-sm:order-1 max-sm:mt-10">
            <img
              className="h-[60vh] max-md:w-[80vh] max-md:h-[40vh]"
              onMouseOver={() => {
                setimage(
                  "https://static.wixstatic.com/media/e32ef9_98ff64afe81747bd80c27e0552dd6bc4~mv2.jpg/v1/fill/w_403,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1_jpeg.jpg"
                );
              }}
              onMouseOut={() => {
                setimage(
                  "https://static.wixstatic.com/media/e32ef9_bfc0fe40ca004d81b60eb36acb109fb7~mv2.jpg/v1/crop/x_173,y_0,w_678,h_1024/fill/w_404,h_610,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Aaraam_2.jpg"
                );
              }}
              src={image}
              alt=""
            />
          </div>
        </div>


        <div className="flex w-screen justify-center items-center max-sm:flex-col max-sm:mt-10">
          <div className=" pr-44 ml-10 max-md:pr-8 ">
            <img
              className="h-[60vh] max-md:w-[80vh] max-md:h-[40vh]  "
              onMouseOver={() => {
                setimage2(
                  "https://static.wixstatic.com/media/e32ef9_126c9ed79fcd400b99b734448a526cea~mv2.jpg/v1/crop/x_157,y_0,w_1030,h_1500/fill/w_421,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tula_orange_edited.jpg"
                );
              }}
              onMouseOut={() => {
                setimage2(
                  "https://static.wixstatic.com/media/nsplsh_97f90f8e2e0a428d91c969887eaa53e1~mv2.jpg/v1/crop/x_651,y_0,w_949,h_1426/fill/w_423,h_635,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Slumber%20Sleep%20Aid.jpg"
                );
              }}
              src={image2}
              alt=""
            />
          </div>
          <div className="text-left w-[70vh] h-[70vh] p-14 flex flex-col justify-center max-sm:w-screen max-sm:h-[40vh] max-sm:pt-4 max-sm:px-10">
            <span className="text-4xl max-md:text-3xl ">Ingestibles</span>
            <br />
            <p className="text-xl max-md:text-base ">
              Bring balance to your body. Our tincture provides relief from a
              variety of issues such as stress, anxiety, poor sleep quality, and
              irregular blood pressure.
            </p>
            <br />
              
            <button style={{ boxShadow: "5px 4px #a9d9ce" }} className="border-2 rounded-xl  w-[25vh] py-2 bg-[#027373] duration-150 text-white hover:bg-[#a9d9ce] active:translate-y-2 active:translate-x-1 ">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <section className="bg-[#027373] text-center text-white py-14 mt-10">
        <span className="text-5xl max-md:text-2xl ">Explore our Shop</span>
        <p className="text-base pt-10">Browse through our well-curated collection of THC-free hemp-derived products, including tinctures and roll-ons,<br /> artfully formulated with natural ingredients to promote balance and elevate one's self-care routine.</p>
        <div className="flex justify-evenly py-16 w-full max-sm:flex-col max-sm:items-center max-sm:space-y-10">
          <div className="max-h-fit overflow-hidden " >
            <div className="shadow-inner">
              <img className="h-[35vh] max-sm:h-[25vh] hover:-translate-y-14 duration-500" src="https://static.wixstatic.com/media/e32ef9_716d02aac2b245578d5cb434c4f00b11~mv2.jpg/v1/fill/w_365,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Aaram_blue_edited.jpg" alt="" />
            </div>
            <span className="text-3xl ">Aaram</span>
            <br />
            <span className="text-xl ">₹ 1,799</span>
            <br />
            <Link to="/product/1">
            <button className="border-2 border-white px-7 py-2 bg-white text-[#027373] mt-2 rounded-md">Read More</button>
            </Link>
          </div>
          <div className="max-h-fit overflow-hidden">
            <img className="h-[35vh] max-sm:h-[25vh] hover:-translate-y-12 duration-500" src="https://static.wixstatic.com/media/5eed11_f3abb26fd5554362966350e7998498c8~mv2.jpg/v1/fill/w_365,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Aaram_blue_edited.jpg" alt="" />
            <span className="text-3xl">Vishraam</span>
            <br />
            <span className="text-xl ">₹ 2,799</span>
            <br />
            <Link to="/product/2">
            <button className="border-2 border-white px-7 py-2 bg-white text-[#027373] mt-2 rounded-md">Read More</button>
            </Link>
          </div>
        </div>
      </section>
      <section className=" mt-20 pt-20 text-center w-screen ">
        <span className="text-5xl">Why CBD?</span>
        <div className="flex py-10 items-center max-md:flex-col">

          <img className="w-[90vh] opacity-55 max-md:w-[70vh] " src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1140/https://www.lovehappensmag.com/blog/wp-content/uploads/2022/03/cbd-advocates-1140x660.jpg" alt="" />

          <p className="text-left text-2xl px-32 py-5 max-md:text-xl max-md:px-5">
            CBD works by interacting with the body's endocannabinoid system (ECS). The Endocannabinoid System (ECS) is a         neuromodulatory system that is spread throughout our body. Similar to our Central Nervous System (CNS), it plays a         very important role in modulating and regulating our        nervous system. It helps maintain the human body's       homeostasis, i.e. helping the body adjust its internal         self-regulating functions by adjusting itself to external         conditions.</p>
        </div>
      </section>

      <section className="text-center my-10">
        <span className="text-5xl max-md:text-4xl">Functions of the Endocannabinoid System </span>
        <p className="py-10 text-2xl max-md:text-xl">The ECS plays a crucial role in maintaining homeostasis, or balance,<br /> in the body by regulating a wide range of physiological processes, like</p>
        <div className="flex justify-center lg:space-x-4  text-white max-md:px-5 max-sm:flex-col max-sm:px-0 max-sm:items-center max-sm:space-y-5">
          <div className="bg-[#027373] h-[30vh] w-[23vh] max-sm:h-[25vh] ">MEMORY</div>
          <div className="bg-[#027373] h-[30vh] w-[23vh] max-sm:h-[25vh] ">MOOD</div>
          <div className="bg-[#027373] h-[30vh] w-[23vh] max-sm:h-[25vh] ">SLEEP</div>
          <div className="bg-[#027373] h-[30vh] w-[23vh] max-sm:h-[25vh] ">APPETITE</div>
          <div className="bg-[#027373] h-[30vh] w-[23vh] max-sm:h-[25vh] ">PAIN</div>
          <div className="bg-[#027373] h-[30vh] w-[23vh] max-sm:h-[25vh] ">IMMUNE RESPONSES</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
