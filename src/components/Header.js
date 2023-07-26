import React from "react";
import hamberger from "../images/menus.png";
import youtube from "../images/youtube-logo.png";
import user from "../images/profile-user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg sticky bg-[white] top-0">
      <div className="flex col-span-1">
        <img src={hamberger} className="h-8 cursor-pointer" alt="hamnberger" onClick={()=>toggleMenuHandler()}/>
        <img src={youtube} className="h-8 ml-4" alt="youtube-logo" />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-[620px] h-10 rounded-l-full border-2 border-solid border-[black] p-2"
        />
        <button className="border-2 border-black px-[25px] py-1.5 rounded-r-full bg-[lightgrey]">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img src={user} className="h-8" alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
