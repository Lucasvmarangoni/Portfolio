import { useEffect } from "react";

function setPositionFig() {
  const viewportWidth: number = window.innerWidth;
  const figDiv: any = document.querySelector("#figDiv");
  let randomPosition: number = Math.floor(Math.random() * (0 - 4 + 1)) + 4;
  if (randomPosition === 1) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "19%";
      figDiv.style.left = "90%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "12%";
      figDiv.style.left = "95%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "12%";
      figDiv.style.left = "93%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "41%";
      figDiv.style.left = "27%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "35%";
      figDiv.style.left = "27%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "35%";
      figDiv.style.left = "27%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "34%";
      figDiv.style.left = "24%";
    } else {
      figDiv.style.top = "24%";
      figDiv.style.left = "20%";
    }
  } else if (randomPosition === 2) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "-2%";
      figDiv.style.left = "37%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-13%";
      figDiv.style.left = "34%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "-13%";
      figDiv.style.left = "37%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "64%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "62%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "59%";
      figDiv.style.left = "71%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "56%";
      figDiv.style.left = "71%";
    } else {
      figDiv.style.top = "44%";
      figDiv.style.left = "21%";
    }
  } else {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "8%";
      figDiv.style.left = "67%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "0%";
      figDiv.style.left = "74%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "0%";
      figDiv.style.left = "74%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "41%";
      figDiv.style.left = "65%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "35%";
      figDiv.style.left = "65%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "35%";
      figDiv.style.left = "63%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "34%";
      figDiv.style.left = "67%";
    } else {
      figDiv.style.top = "24%";
      figDiv.style.left = "69%";
    }
  }
}

export function FigsCapaText() {
  let randonFig: number = Math.floor(Math.random() * (0 - 6 + 1)) + 6;

  useEffect(() => {
    setPositionFig();
  }, []);

  return (
    <div
      id="figDiv"
      className="mr-1 absolute 
    "
    >
      <img
        className="h-11 opacity-60 
        
        n6:h-11 n7:h-8
        "
        src={`/fig/${randonFig}.png`}
        alt="fig1"
      />
    </div>
  );
}