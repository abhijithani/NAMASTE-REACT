import { useState } from "react";
import {LOGO_URL} from "../utlis/constants"
import { useState } from "react";
const Header = () => {
  const[logbutton,setlogbutton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          src= {LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us </li>
          <li>Cart</li>
          <button className="log_button"
          onClick={() => {
            logbutton == "Login" ? setlogbutton("Logout") : setlogbutton("Login");
          }}
          >{logbutton}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;