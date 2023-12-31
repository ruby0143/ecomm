import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import LoginModalContext from "../../Context/Context";
import Login from "../Signup/Login"


function Header() {
  const { loginDisplayMode, setloginDisplayMode, userContext } = useContext(LoginModalContext)
  const [navDisplay, setnavDisplay] = useState("none");
  const [user, setUser] = useState();
  const [firstName, setName] = useState();
  const [profileDisplay,setProfile] = useState("none");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      // console.log(user, "printing from navbar");
      setUser(user);
      setName(user.email.slice(0, 1).toUpperCase());
      
    })
  }, [])

  window.onclick = function (event) {
    if (!event.target.matches('#menu-icon') && !event.target.matches('#dropdown-menu') && !event.target.matches('#dropdown-items')&& !event.target.matches('#loginDiv')&& !event.target.matches('#Loginbutton') ) {
      setnavDisplay("none")
      setloginDisplayMode("none")
    
    }
   
  }
  //  console.log(navDisplay);
  // console.log(userContext, "header user");


  const loginDisplay = () => {
    console.log(loginDisplayMode);
    if (loginDisplayMode === "none" ) {
      setloginDisplayMode("flex")
    }
    else setloginDisplayMode("none")

   
  }

  

  const displayProfile = () => {
    // console.log(displayMode);
    if (profileDisplay === "none") {
      setProfile("flex")
    }
    else setProfile("none")
  }

  return (
    <div  >
      <div className="h-[11vh] w-screen justify-between shadow-lg flex px-4 items-center bg-white fixed z-10 border-b-2 border-[#a9d9ce] ">
        <img  id="menu-icon"
          onClick={() => {
            if (navDisplay === "none") {
              setnavDisplay("flex");
            } else {
              setnavDisplay("none");
            }
          }}
          className="h-8 justify-self-center hover:cursor-pointer"
          src="\menu.svg"
          alt=""
        />
        <img
          className=" h-[10vh]  "
          src="https://static.wixstatic.com/media/5eed11_b38f1857c3dd4da48ea06749d409527f~mv2.jpeg/v1/crop/x_0,y_879,w_4167,h_2409/fill/w_160,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpeg"
          alt=""
        />
        <div className=" text-xl overflow-hidden align-middle justify-end flex space-x-4 text-[#409797] font-semibold">

          <button onClick={loginDisplay} >{user ? (<><div className="rounded-full border-2 p-2 px-3  relative bg-[#027373] text-white font-normal" id="Loginbutton" onMouseOver={displayProfile}>{firstName}</div></>) : (<div id="Loginbutton">Login</div>)}</button>
          
          <div className="flex items-center ">
            <img className="h-[4vh] align-text-bottom hover:cursor-pointer" src="\bag.svg" alt="" />
          </div>
 
          <div className="" style={{ display: profileDisplay }}>
            Hello
          </div>
        </div>
      </div>


      <div id="loginDiv">
        <Login />
      </div>
      <div className="flex">
        <div
          id="dropdown-menu"
          className=" min-h-screen w-[31%] bg-[#027373] fixed z-20"
          style={{ display: navDisplay }}
        >
          <img id="CloseIcon" className="h-[5vh] absolute top-3 right-0  w-16 hover:cursor-pointer" src="\close-icon.svg" alt="" />
          <ul id="dropsown-items" className="flex flex-col text-[#a9d9ce] text-2xl gap-6 m-auto ">
            <span className="hover:text-white"><a href="">Home</a></span>
            <span className="hover:text-white"><a href="">About Us</a></span>
            <span className="hover:text-white"><a href="">Topicals</a></span>
            <span className="hover:text-white"><a href="">Ingestables</a></span>
            <span className="hover:text-white"><a href="">Consult a Vaidya</a></span>
            <span className="hover:text-white"><a href="">Contact Us</a></span>
          </ul>
        </div>
        <div id="blur" className=" min-h-screen w-[69%] opacity-40 fixed inset-y-0 right-0 bg-[#f7ffff]" style={{ display: navDisplay }}>

        </div>
      </div>
    </div>
  );
}


export default Header;
