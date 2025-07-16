import { useState } from "react";
import {LOGO_URL} from "../utlis/constants"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  const[logbutton,setlogbutton] = useState("Login");
     console.log("header render");

    //if no dependency array => useEffect is called on every render 
    //if dependency array is empty => useEffect is called on intial render (just once)
    // if dependency array is (logbuttoon ) => called everytime logbutton is updated

    useEffect(() => {
      console.log("useEffect called")
    },[]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          src= {LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="./">Home</Link></li>
          <li> <Link to ="./About">About us </Link></li>
          <li><Link to = "./Contact">Contact us</Link> </li>
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