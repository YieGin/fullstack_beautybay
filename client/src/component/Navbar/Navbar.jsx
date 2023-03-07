import "./style/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img2 from "../Images/2.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [Humberger_mune, setHumberger_mune] = useState(false);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="Navbar_main1">
      <div className="Navbar_main">
        <Link to="./">
          <div className="logo">
            <img className="Img2" src={Img2} alt="" />
          </div>
        </Link>
        <div className="Navbar_right">
          <Link to="/Cart">
            <ul className="menu">
              <li className="li-text">
                <a className="A-text">SHOP ({cart.length})</a>
              </li>
            </ul>
          </Link>
          <ul className="menu">
            <li className="li-text">
              <a className="A-text">ABOUT BEAUTY BAY</a>
            </li>
          </ul>
          <ul className="menu">
            <li className="li-text">
              <a className="A-text">WHERE TO BUY</a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setHumberger_mune(true);
          }}
          className="Humberger_mune"
        >
          <p className="Humberger_mune_lines"></p>
          <p className="Humberger_mune_lines"></p>
          <p className="Humberger_mune_lines"></p>
        </div>
        {Humberger_mune && (
          <div className="Humberger_open">
            <svg
              onClick={() => {
                setHumberger_mune(false);
              }}
              className="Humberger_svgg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
            <div className="tk-blobbba">
              <div className="qsdsqq"></div>
            </div>
            <div className="Humberger_open1">
              <a>
                <h1
                  onClick={() => {
                    setHumberger_mune(false);
                  }}
                  className="Text-inside"
                >
                  SHOP
                </h1>
              </a>
              <a>
                <h1
                  onClick={() => {
                    setHumberger_mune(false);
                  }}
                  className="Text-inside"
                >
                  ABOUT BEAUTY BAY
                </h1>
              </a>
              <h1
                onClick={() => {
                  setHumberger_mune(false);
                }}
                className="Text-inside"
              >
                WHERE TO BUY
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
