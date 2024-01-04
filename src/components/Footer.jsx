import React from "react";

function Footer() {
  return (
    <div className=" font-family flex  justify-start space-x-36 max-md:justify-start max-md:space-x-5 max-sm:flex-col max-sm:items-center overflow-x-hidden">
     
      <div className=" items-center  flex flex-col px-3 py-10 max-w-[50%] max-md:w-[35%] max-md:justify-center max-sm:order-2 max-sm:w-full">
        <img
          className="w-[70vh] max-md:w-[40vh] "
          src="https://static.wixstatic.com/media/5eed11_b38f1857c3dd4da48ea06749d409527f~mv2.jpeg/v1/crop/x_0,y_931,w_4167,h_2306/fill/w_621,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpeg"
          alt=""
        />
        <span>A brand by:</span>
        <img
          className="w-[40vh] max-md:w-[24vh] "
          src="https://static.wixstatic.com/media/21b55a_7ac941b9ca9441e1944528055f6e2950~mv2.png/v1/fill/w_386,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AA%20without%20bg.png"
          alt=""
        />
      </div>
  

      <div className=" right-0 bottom-0   flex gap-[6rem] mt-3 pt-20 max-md:w-[40%] max-md:gap-1 max-sm:w-screen max-sm:justify-center">
        <div className=" flex flex-col text-xl gap-2 font-semibold max-md:text-base ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Explore Our Shop</a>
        <a href="">Consult a Vaidya</a>
        <a href="">Contact us</a>
        <hr className="border-1 border-[#409797] mt-7" />
        <span className="mt-3 text-[#409797]">support@angethaagro.com</span>
        <span className="mt-3 text-[#409797]">+91 9740172610</span>
        </div>
        <div className=" flex flex-col text-xl font-semibold gap-2  max-md:text-base">
        <a style={{overflowWrap:"break-word"}}  href="">Shipping Policy</a>
        <a style={{overflowWrap:"break-word"}}  href="">Refund&Returns</a>
        <a style={{overflowWrap:"break-word"}}  href="">Store Policy</a>
        <a style={{overflowWrap:"break-word"}}  href="">FAQ</a>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
