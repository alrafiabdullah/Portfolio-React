import React from "react";

import Brand from "../../assets/final.png";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

import "./header.scss";

function Header() {
  return (
    <div className="main">
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <a href="https://abdullah-alrafi.netlify.app/">
            <img className="logo" src={Brand} alt="Abdullah Al Rafi" />
          </a>
        </div>
        <ul className="navigation">
          <li className="parent">About</li>
          <li className="parent">Projects</li>
          <li className="parent">Contact</li>
        </ul>
      </nav>
    </div>
    // <div className="main">
    //   <nav>
    //     <input type="checkbox" id="check" hidden />
    //     <label htmlFor="check" className="checkbtn">
    //       <FaHamburger className="burger" size={40} />
    //       <FaWindowClose className="cancel" size={40} />
    //     </label>

    //     <a href="/">
    //       <img src={Brand} alt="Abdullah Al Rafi" />
    //     </a>
    //     <ul>
    //       <li>
    //         <a href="#">About</a>
    //       </li>
    //       <li>
    //         <a href="#">Projects</a>
    //       </li>
    //       <li>
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
}

export default Header;
