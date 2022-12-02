import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";

const img: any = document.querySelector("#img");

export const Slides = () => {
  return (
    <div id="slider">
      <div id="slides">
        <input id="radio1" type="radio" />
        <input id="radio2" type="radio" />
        <input id="radio3" type="radio" />

        <div>
          <img src="../public/Home.jpg" alt="" />
        </div>
        <div>
          <img src="../public/Menu.jpg" alt="" />
        </div>
        <div>
          <video src="../public/NLW-eSports.mp4"></video>
        </div>
      </div>
    </div>
  );
};
