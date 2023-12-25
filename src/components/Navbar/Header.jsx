import React, {  useState } from "react";
import Login from "../Signup/Login";


function Header() {

  const [displaystyle, setdisplaystyle] = useState("none");
  const [isModalOpen, setisModalOpen] = useState(false);
  window.onclick = function(event) {
    if (!event.target.matches('#menu-icon')&&!event.target.matches('#dropdown-menu')&&!event.target.matches('#dropdown-items')&&!event.target.matches('#blur')) {
       setdisplaystyle("none")
    }
  }
 
  
  
  
  return (
    <div >
      <div className="h-[10vh] flex justify-between shadow-lg px-4 items-center">
        <img id="menu-icon"
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
        <div className="mr-2 text-xl w-48 align-middle justify-start flex gap-6 text-[#409797] font-semibold">
          <img className="h-[4vh] align-text-bottom" src="\profileIcon.svg" alt="" />
          <a id="Loginbutton" 
           href="" onClick={()=>{setisModalOpen(true)
            console.log(isModalOpen);}} >Login</a>
          <img className="h-[4vh] align-text-bottom"src="\bag.svg" alt="" />
        </div>
      </div>
     <Login open={isModalOpen}/>
     <div className="flex">
      <div
        id="dropdown-menu"
        className="hidden min-h-screen w-[31%] -mt-[10vh] bg-[#027373] fixed"
        style={{ display: displaystyle }}
      >
       <img className="h-[6vh] absolute top-3 right-0  w-16" src="\close-icon.svg" alt="" />
        <ul id="dropsown-items" className="flex flex-col text-[#a9d9ce] text-2xl gap-6 m-auto ">
        <span className="hover:text-white"><a href="">Home</a></span>
        <span className="hover:text-white"><a href="">About Us</a></span>
        <span  className="hover:text-white"><a href="">Topicals</a></span>
        <span className="hover:text-white"><a href="">Ingestables</a></span>
        <span className="hover:text-white"><a href="">Consult a Vaidya</a></span>
        <span className="hover:text-white"><a href="">Contact Us</a></span>
        </ul>
      </div>
      <div id="blur" className=" min-h-screen w-[69%] opacity-40 fixed inset-y-0 right-0 bg-[#f7ffff]" style={{ display: displaystyle }}>

      </div>
     </div>
    </div>
  );
}


export default Header;
