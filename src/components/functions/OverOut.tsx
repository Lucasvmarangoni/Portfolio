import { useEffect } from "react";

export const OnOver: any = () => {
  const img: any = document.querySelector("#img");
  return (img.style = "transform: rotate(15deg)");
};

export const OnOut: any = () => {
  const img: any = document.querySelector("#img");
  return (img.style = "transform: rotate(0deg)");
};
