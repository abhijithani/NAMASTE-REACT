import { useState } from "react";
import {LOGO_URL} from "../utlis/constants"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Header = () => {
  const[logbutton,setlogbutton] = useState("Login");
     console.log("header render");

    useEffect(() => {
      console.log("useEffect called")
    },[]);

    const useronline = useOnlineStatus();
 
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          src= {LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{useronline ? "🟢" : "🔴"}</li>
          <li><Link to="/" className="header-links">Home</Link></li>
          <li> <Link to = "/About" className="header-links">About us </Link></li>
          <li><Link to = "/Contact" className="header-links" >Contact us</Link> </li>
          <li><Link to = "/grocery" className="header-links">Grocery</Link></li>
          <li>Cart</li>
          <button className="log_button"
          onClick={() => {
            logbutton == "Login" ? setlogbutton("Logout") : setlogbutton("Login");
          }}
          >{logbutton}</button>
        </ul>
      </div>
    </div >
  );
};

export default Header;