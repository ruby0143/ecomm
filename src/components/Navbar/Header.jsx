import React, { useState } from "react";

function Header() {
  const [displaystyle, setdisplaystyle] = useState("none");
  return (
    <div >
      <div className="h-[10vh] flex justify-between shadow-lg px-4 items-center">
        <img
          onClick={() => {
            if (displaystyle === "none") {
              setdisplaystyle("flex");
            } else {
              setdisplaystyle("none");
            }
          }}
          className="h-10 "
          src="\menu.svg"
          alt=""
        />
        <img
          className=" h-[10vh]"
          src="https://static.wixstatic.com/media/5eed11_b38f1857c3dd4da48ea06749d409527f~mv2.jpeg/v1/crop/x_0,y_879,w_4167,h_2409/fill/w_160,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpeg"
          alt=""
        />
        <div className="mr-2 text-xl w-36 align-middle justify-start flex gap-6 text-[#409797] font-semibold">
          <img className="h-6" src="\profileIcon.svg" alt="" />
          Log In
          <img src="\bag.svg" alt="" />
        </div>
      </div>
      <div
        id="dropdown-menu"
        className="hidden flex-col h-screen text-white text-2xl justify-center items-center w-1/3  gap-4 bg-[#027373] translate-x-0 ease-in-out duration-200 "
        style={{ display: displaystyle }}
      >
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Topicals</a>
        <a href="">Ingestables</a>
        <a href="">Consult a Vaidya</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
}

export default Header;
