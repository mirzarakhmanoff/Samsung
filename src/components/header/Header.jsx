import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="nav__logo">
            <a href="#">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/7051px-Samsung_wordmark.svg.png"
                alt=""
              />
            </a>
          </div>
          <div className="nav__items">
            <ul>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">AI</a>
              </li>
              <li>
                <a href="">Mobile</a>
              </li>{" "}
              <li>
                <a href="">TV & Audio</a>
              </li>{" "}
              <li>
                <a href="">Appliances</a>
              </li>{" "}
              <li>
                <a href="">Computing</a>
              </li>{" "}
              <li>
                <a href="">Displays</a>
              </li>
              <li>
                <a href="">Accessories</a>
              </li>
              <li>
                <a href="">SmartThings</a>
              </li>
            </ul>
          </div>
          <div className="nav__items_2">
            <ul>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#"> Support </a>
              </li>
              <li>
                <a href="#"> For Business</a>
              </li>
            </ul>
          </div>
          <div className="nav__icons">
            <IoSearchOutline />
            <SlBasket />
            <CiUser />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
