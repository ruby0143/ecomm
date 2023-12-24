import React from "react";

function Footer() {
  return (
    <div className="flex justify-between">
      <div className="  bottom-0 left-0 items-center flex flex-col px-5 py-10 max-w-[50%]">
        <img
          className="w-[70vh] "
          src="https://static.wixstatic.com/media/5eed11_b38f1857c3dd4da48ea06749d409527f~mv2.jpeg/v1/crop/x_0,y_931,w_4167,h_2306/fill/w_621,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpeg"
          alt=""
        />
        <span>A brand by:</span>
        <img
          className="w-[40vh] "
          src="https://static.wixstatic.com/media/21b55a_7ac941b9ca9441e1944528055f6e2950~mv2.png/v1/fill/w_386,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AA%20without%20bg.png"
          alt=""
        />
      </div>

      <div className="w-1/2 right-0 bottom-0  content-start h-1/2 flex gap-[6rem] mt-3 pt-20 ">
        <div className=" flex flex-col text-xl gap-2 font-semibold ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Explore Our Shop</a>
        <a href="">Consult a Vaidya</a>
        <a href="">Contact us</a>

        
        <hr className="border-1 border-[#409797] mt-7" />
        <span className="mt-3 text-[#409797]">support@angethaagro.com</span>
        <span className="mt-3 text-[#409797]">+91 9740172610</span>
        </div>
        <div className=" flex flex-col text-xl font-semibold gap-2 ">
        <a href="">Shipping Policy</a>
        <a href="">Refund&Returns</a>
        <a href="">Store Policy</a>
        <a href="">FAQ</a>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
