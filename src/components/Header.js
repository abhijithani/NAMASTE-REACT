import { useContext, useState } from "react";
import { LOGO_URL } from "../utlis/constants"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utlis/useOnlineStatus";
import Usercontext from "../utlis/Usercontext";

const Header = () => {
  const [logbutton, setlogbutton] = useState("Login");
  //  console.log("header render");  

  useEffect(() => {
    // console.log("useEffect called")
  }, []);

  const useronline = useOnlineStatus();
  const data = useContext(Usercontext);
  console.log(data);



  return (
    <div className="flex justify-between bg-gray-200  sm:bg-grey-200 shadow-xl" >
      <div className="logo-container m-2">
        <img className="w-24 rounded-2xl"
          src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex">
          <li className="px-2 font-semibold">Online Status:{useronline ? "🟢" : "🔴"}</li>
          <li className="px-2 font-semibold" ><Link to="/" >Home</Link></li>
          <li className="px-2 font-semibold"> <Link to="/About" >About us </Link></li>
          <li className="px-2 font-semibold"><Link to="/Contact"  >Contact us</Link> </li>
          <li className="px-2 font-semibold"><Link to="/grocery" >Grocery</Link></li>
          <li className="px-2 font-semibold">Cart</li>

          <button className="px-2 font-semibold"
            onClick={() => {
              logbutton == "Login" ? setlogbutton("Logout") : setlogbutton("Login");
            }}
          >{logbutton}</button>
          <li className="px-2 font-semibold">{data.loggedInContext}</li>
        </ul>
      </div>
    </div >
  );
};

export default Header;