import React, { useEffect, useLayoutEffect } from "react";
import "./style/LandingPage.css";
import Img3 from "../Images/3.jpg";
import { Parallax } from "react-parallax";
import { getUsers } from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const LandingPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxImage3 = {
    bgImageStyle: {
      width: "100%",
      filter: "brightness(0.6)",
      objectFit: "contain",
    },
  };

  const { title } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="Landing_main">
      <Parallax {...parallaxImage3} strength={-700} bgImage={Img3}>
        <section className="Images-6-section">
          <div className="Landing_1">
            <h1 className="Beauty">BEAUTY</h1>
            <div className="Lane"></div>
            <h1 className="Bay">BAY</h1>
            <h2 className="Official">OFFICIAL MODALS MAKEUP </h2>
          </div>
        </section>
      </Parallax>
      <div className="share_div">
        <h1 className="Share_social">FOR THE BEAUTY OBSESSED BY BEAUTY BAY</h1>
      </div>
      <div className="page-content">
        {title.map((item) => (
          <div key={item.id}>
            <div className="card">
              <img className="Img33" src={item.img} alt="" />
              <div className="content">
                <h2 className="title">{item.name}</h2>
                <p className="copy">$ {item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="btn"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Landing_2">
        <h1>REASONS TO LOVE BEAUTY BAY</h1>
        <div className="Landing2_flex">
          <ul className="ListOf_landing2">
            <svg
              className="core-messages-item_svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 152 60"
            >
              <path d="M68.73,23.52v-.14a5.05,5.05,0,0,0,2.88-4.7A6.31,6.31,0,0,0,69.83,14l-.2.15,1.85-1.39c-1.33-1.3-3.4-2.06-6.24-2.06H56v13.6l-1.67,1.24V36h8.82c6,0,8.89-2.4,8.89-7A5.69,5.69,0,0,0,68.73,23.52Zm-6,7.57H60.09V26H63c2,0,3.13.62,3.13,2.54S65,31.09,62.73,31.09Zm2.49-13.61a2.39,2.39,0,0,1,.49,1.65c0,1.47-.66,2.26-2.42,2.26h-3.2v0l1.67-1.26V15.61H65a2.45,2.45,0,0,1,1.91.63Z"></path>
              <path d="M53.53,46.37a3.68,3.68,0,1,0,3.68,3.68A3.67,3.67,0,0,0,53.53,46.37Z"></path>
              <path d="M101.21,46.37a4,4,0,1,0,4,4A4,4,0,0,0,101.21,46.37Z"></path>
              <path d="M115.26,33.25l-8.57-16a3.94,3.94,0,0,0-3.47-2H90.14V3.86A3.86,3.86,0,0,0,86.28,0H40.41a3.86,3.86,0,0,0-3.86,3.86V43.77a3.87,3.87,0,0,0,3.86,3.87h3.47a9.59,9.59,0,0,0-.3,2.41,10,10,0,0,0,19.9,0,10.07,10.07,0,0,0-.29-2.41H91.55a10.07,10.07,0,0,0-.3,2.41,10,10,0,0,0,19.91,0,10.07,10.07,0,0,0-.3-2.41h.68a3.86,3.86,0,0,0,3.91-3.8V34A1.53,1.53,0,0,0,115.26,33.25ZM53.55,56.82h0a6.77,6.77,0,0,1-6.77-6.77v0c0-.1,0-.2,0-.29s0-.11,0-.16a.92.92,0,0,0,0-.16l0-.21s0-.07,0-.1,0-.17,0-.24v-.06l.06-.28h0a6.79,6.79,0,0,1,4.76-5l.07,0,.17,0,.12,0,.16,0,.21,0,.14,0,.23,0h.11l.21,0h.82l.22,0h.11l.22,0,.14,0,.22,0,.15,0,.13,0,.17,0,.07,0a6.78,6.78,0,0,1,4.75,5h0a2.33,2.33,0,0,1,0,.28v.06a2,2,0,0,1,0,.24s0,.07,0,.1,0,.14,0,.21a.81.81,0,0,1,0,.16.81.81,0,0,1,0,.16,2.71,2.71,0,0,1,0,.29v0A6.77,6.77,0,0,1,53.55,56.82ZM87,16.84V44.45H61.76a10,10,0,0,0-16.45,0h-4.9a.67.67,0,0,1-.68-.68V3.86a.68.68,0,0,1,.68-.68H86.28a.69.69,0,0,1,.68.68Zm14.25,40h0a6.77,6.77,0,0,1-6.77-6.77v-.33a.76.76,0,0,0,0-.15c0-.06,0-.12,0-.17a1.23,1.23,0,0,1,0-.2.49.49,0,0,0,0-.12,1.57,1.57,0,0,0,0-.23v-.07l.06-.26v0a6.76,6.76,0,0,1,4.75-5l.07,0,.17,0,.13,0,.15,0,.21,0,.14,0,.23,0h.11l.21,0h.83l.21,0h.11l.23,0,.14,0,.21,0,.15,0,.13,0,.17,0,.07,0a6.81,6.81,0,0,1,4.76,5h0l.06.28v.05c0,.08,0,.16,0,.25a.38.38,0,0,0,0,.1,1.49,1.49,0,0,1,0,.21c0,.05,0,.1,0,.15a1,1,0,0,0,0,.17V50s0,.05,0,.07A6.78,6.78,0,0,1,101.21,56.82Zm11.06-13a.68.68,0,0,1-.73.61h-2.11a10,10,0,0,0-16.45,0H90.14v-26h13.08a.75.75,0,0,1,.66.36L106.7,24H97.51V35.65h14.76Z"></path>
            </svg>
            <p>Free delivery anyone</p>
            <p>Spend over ??25 on your haul.</p>
          </ul>
          <ul className="ListOf_landing2">
            <svg
              className="core-messages-item_svg"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 152 60"
            >
              <defs>
                <style>.cls-1{}</style>
              </defs>
              <rect
                className="cls-1"
                x="40.73"
                y="35.98"
                width="9.82"
                height="6.55"
                rx="0.5"
              ></rect>
              <path
                className="cls-1"
                d="M105.52,45.32a1.71,1.71,0,1,0,1.79,1.7A1.74,1.74,0,0,0,105.52,45.32Z"
              ></path>
              <path
                className="cls-1"
                d="M84.74,45.32A1.71,1.71,0,1,0,86.52,47,1.75,1.75,0,0,0,84.74,45.32Z"
              ></path>
              <path
                className="cls-1"
                d="M111.25,31h-6.87V4.89A4.89,4.89,0,0,0,99.5,0H40.63a4.89,4.89,0,0,0-4.89,4.89V42.72a4.89,4.89,0,0,0,4.89,4.89H64.05V55a5,5,0,0,0,5,5h42.18a5,5,0,0,0,5-5V36A5,5,0,0,0,111.25,31ZM71.36,50.35H69.17V40.74h2.19Zm3.54,0-3.28-4.52.84-.64a5.51,5.51,0,0,0,2.21-4.45h2.14a7.66,7.66,0,0,1-2.23,5.45l3,4.16Zm5.4,0H78.23v-9.6H80.3Zm8.2,0h-2v-.42a3.49,3.49,0,1,1-2-6.4,3.39,3.39,0,0,1,2,.61V43.7h2Zm5-4.7h0c-.78,0-1.91.57-1.91,1.61v3.1h-2V43.7h2v.87h0a2.44,2.44,0,0,1,1.93-.87Zm7.71,4.7h-2v-3.5c0-1-.5-1.49-1.37-1.49a1.39,1.39,0,0,0-1.48,1.5v3.49h-2V43.7h2v.75a2.39,2.39,0,0,1,2-.93h0a2.62,2.62,0,0,1,2.8,2.6Zm0-19.34H69.07a5,5,0,0,0-5,5v8.42H40.63a1.72,1.72,0,0,1-1.71-1.71v-23H101.2Zm0-20.78H38.92V4.89a1.72,1.72,0,0,1,1.71-1.71H99.5a1.71,1.71,0,0,1,1.7,1.71Zm8.09,40.12h-2v-.42a3.49,3.49,0,1,1-2-6.4,3.4,3.4,0,0,1,2,.61V43.7h2Zm2.09.14a1.25,1.25,0,1,1,1.24-1.24A1.24,1.24,0,0,1,111.38,50.48Z"
              ></path>
            </svg>
            <p>Free delivery anyone</p>
            <p>Spend over ??25 on your haul.</p>
          </ul>
          <ul className="ListOf_landing2">
            <svg
              className="core-messages-item_svg"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 152 60"
            >
              <path d="M66.69,14.6V8.48L54.34,15.61l12.35,7.14V17a9.92,9.92,0,1,1-12,9.7,1.2,1.2,0,0,0-2.39,0A12.31,12.31,0,1,0,66.69,14.6Z"></path>
              <path d="M93.35,24.17a17.61,17.61,0,0,0-4.89.68c0-.33,0-.65,0-1A23.88,23.88,0,1,0,64.61,47.75,23.62,23.62,0,0,0,75.68,45,17.92,17.92,0,1,0,93.35,24.17ZM75.45,41.5A20.69,20.69,0,1,1,85.3,23.88a21.11,21.11,0,0,1-.12,2.26A17.94,17.94,0,0,0,75.45,41.5ZM93.36,56.82h0c-.23,0-.47,0-.7,0h0l-.68,0h0l-.68-.08h0a14.74,14.74,0,0,1,.09-29.17h0l.65-.08h0l.64-.05h.72a14.74,14.74,0,0,1,0,29.47Z"></path>
              <path d="M89.82,35.48h-.44c-2.15,0-2.85,1.39-3.17,3.16L84.86,46.3c-.33,1.94.67,3.24,3.06,3.24h.44c2.27,0,3-1.48,3.31-3.26l.52-2.94c.28-1.57-.35-2.75-1.89-2.75h-.09a2.82,2.82,0,0,0-2.15,1.16l.54-3c.13-.74.39-1.13,1-1.13s.85.3.7,1.13l-.15.85h2.39l.15-.85C93.06,36.61,92.21,35.48,89.82,35.48Zm-1,7.12c.63,0,1,.39.87,1.24l-.42,2.41c-.13.75-.47,1.2-1.13,1.2s-1-.37-.85-1.24l.42-2.41C87.86,43,88.19,42.6,88.82,42.6Z"></path>
              <path d="M98.51,35.46h-.37c-2.23,0-3.07,1.43-3.47,3.7L93.5,45.8c-.46,2.59,1,3.74,3.16,3.74H97c2.2,0,3.07-1.41,3.47-3.74l1.17-6.64C102.1,36.66,100.79,35.46,98.51,35.46Zm.72,3.72-1.16,6.64c-.19,1-.48,1.57-1.22,1.57s-1.11-.55-.93-1.57l1.17-6.64c.2-1.17.57-1.59,1.26-1.59S99.44,38,99.23,39.18Z"></path>
            </svg>
            <p>Free delivery anyone</p>
            <p>Spend over ??25 on your haul.</p>
          </ul>
          <ul className="ListOf_landing2">
            <svg
              className="core-messages-item_svg"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 152 60"
            >
              <path d="M114.27,14.66c-.6-.1-1.07-.59-1.41-1.46a1.88,1.88,0,0,1-1.67.5c-.7-.21-1.2-1-1.52-2.37-.31,1.38-.82,2.16-1.52,2.37a1.86,1.86,0,0,1-1.66-.5c-.34.87-.82,1.36-1.41,1.46a2.46,2.46,0,0,1-1.88-.79l.55,2.07a6.32,6.32,0,0,0,1.09.15l.43,0c1,.08,2.54.13,4.4.13s3.36-.05,4.4-.12l.46,0a6.13,6.13,0,0,0,1.07-.15l.54-2.07A2.42,2.42,0,0,1,114.27,14.66Z"></path>
              <path d="M103.78,16.45v1.49a36,36,0,0,0,5.89.31,35.8,35.8,0,0,0,5.89-.31V16.45a30.55,30.55,0,0,1-5.89.31A30.72,30.72,0,0,1,103.78,16.45Z"></path>
              <path d="M120,8.15H99.31a.49.49,0,0,0-.49.49V19.88a.49.49,0,0,0,.49.49H120a.49.49,0,0,0,.49-.49V8.64A.49.49,0,0,0,120,8.15ZM116.9,13l-.82,3.13h0v1.95c0,.22,0,.68-6.4.68s-6.39-.46-6.39-.68v-2h0L102.45,13a.27.27,0,0,1,.14-.3.25.25,0,0,1,.31.08c.31.43,1.3,1.5,2.1,1.38q.7-.12,1.14-1.5a.27.27,0,0,1,.19-.17.24.24,0,0,1,.24.08s.75.85,1.44.64c.46-.14,1.07-.81,1.38-3.22a.21.21,0,0,1,0-.11h0a.08.08,0,0,1,0,0h0a.29.29,0,0,1,.17-.07h.07a.33.33,0,0,1,.17.07l0,.05h0a.36.36,0,0,1,0,.11c.31,2.41.92,3.08,1.38,3.22.68.21,1.43-.63,1.43-.64a.26.26,0,0,1,.25-.08.27.27,0,0,1,.19.17c.28.92.67,1.42,1.14,1.5.8.13,1.78-.95,2.1-1.38a.25.25,0,0,1,.31-.08A.27.27,0,0,1,116.9,13Z"></path>
              <path d="M122.78,0H29.22a6.45,6.45,0,0,0-6.45,6.45v47.1A6.45,6.45,0,0,0,29.22,60h93.56a6.45,6.45,0,0,0,6.45-6.45V6.45A6.45,6.45,0,0,0,122.78,0Zm3.27,53.55a3.28,3.28,0,0,1-3.27,3.27H29.22A3.28,3.28,0,0,1,26,53.55V6.45a3.28,3.28,0,0,1,3.27-3.27h93.56a3.28,3.28,0,0,1,3.27,3.27Z"></path>
              <polygon points="35.95 34.32 41.95 34.32 41.95 38.81 46.23 38.81 46.23 26.97 41.95 26.97 41.95 31.14 35.95 31.14 35.95 26.97 31.66 26.97 31.66 38.81 35.95 38.81 35.95 34.32"></polygon>
              <path d="M52.32,36.88h6.12l.88,1.93h4.55L58.27,27H52.65L47.18,38.81h4.28Zm3-6.81,1.83,4H53.57Z"></path>
              <path d="M70.55,39H71c6.49,0,7.13-4,7.13-6.36V27H73.9v5.62c0,1.35-.42,2.91-3.08,2.91h-.07c-2.68,0-3.14-1.56-3.14-2.91V27H63.34v5.65C63.34,35,63.8,39,70.55,39Z"></path>
              <polygon points="83.81 26.97 79.52 26.97 79.52 38.81 90.89 38.81 90.89 35.45 83.81 35.45 83.81 26.97"></polygon>
              <path d="M45.84,44.72v-.2c0-2.34-1.14-4-5.55-4H31.65V52.36H36V48.83h4.34C44.65,48.83,45.84,47.08,45.84,44.72Zm-4.45,0c0,.62-.33,1.13-1.49,1.13H36V43.55H39.9c1.16,0,1.49.52,1.49,1.09Z"></path>
              <path d="M50.08,40.52,44.6,52.36h4.28l.86-1.93h6.13l.87,1.93h4.55l-5.6-11.84ZM51,47.67l1.8-4,1.83,4Z"></path>
              <path d="M69.64,44.87l-1.7,0c-1.77-.07-2.12-.42-2.12-.93S66.19,43,68.1,43h.13c2,0,2.29.67,2.35,1.13h4.53v-.08c0-1.73-.9-3.7-6.58-3.7h-.69c-5.15,0-6.45,1.54-6.45,3.57v.13c0,1.89,1.16,3.52,5.53,3.61l1.66,0c1.92.05,2.24.45,2.24,1s-.3,1.08-2.45,1.08h-.1c-2.21,0-2.38-1-2.43-1.4H61.23v.1c0,1.57.63,4,6.93,4h.4c5.84,0,6.74-2,6.74-3.93v-.19C75.3,46.33,74.25,45,69.64,44.87Z"></path>
              <path d="M84.72,44.87l-1.7,0c-1.77-.07-2.12-.42-2.12-.93s.37-.89,2.28-.89h.13c2,0,2.29.67,2.35,1.13h4.53v-.08c0-1.73-.9-3.7-6.58-3.7h-.69c-5.15,0-6.46,1.54-6.46,3.57v.13c0,1.89,1.17,3.52,5.54,3.61l1.66,0c1.92.05,2.24.45,2.24,1s-.3,1.08-2.45,1.08h-.1c-2.21,0-2.38-1-2.43-1.4H76.31v.1c0,1.57.63,4,6.93,4h.4c5.84,0,6.74-2,6.74-3.93v-.19C90.38,46.33,89.33,45,84.72,44.87Z"></path>
            </svg>
            <p>Free delivery anyone</p>
            <p>Spend over ??25 on your haul.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
