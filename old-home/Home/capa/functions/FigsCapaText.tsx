import { useEffect } from "react";

function setPositionFig() {
  const viewportWidth: number = window.innerWidth;
  const figDiv: any = document.querySelector("#figDiv");
  let randomPosition: number = Math.floor(Math.random() * (0 - 4 + 1)) + 4;
  if (randomPosition === 1) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "85%";
      figDiv.style.left = "80%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "85%";
      figDiv.style.left = "80%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "83%";
      figDiv.style.left = "76%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "40%";
      figDiv.style.left = "10%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "20%";
      figDiv.style.left = "10%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "30%";
      figDiv.style.left = "10%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "30%";
      figDiv.style.left = "10%";
    } else {
      figDiv.style.top = "22%";
      figDiv.style.left = "20%";
    }
  } else if (randomPosition === 2) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "-3%";
      figDiv.style.left = "37%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-11%";
      figDiv.style.left = "50%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "-15%";
      figDiv.style.left = "48%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "60%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "55%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "40%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "40%";
      figDiv.style.left = "84%";
    } else {
      figDiv.style.top = "66%";
      figDiv.style.left = "-3%";
    }
  } else {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "88%";
      figDiv.style.left = "60%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "80%";
      figDiv.style.left = "74%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "80%";
      figDiv.style.left = "74%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "40%";
      figDiv.style.left = "75%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "35%";
      figDiv.style.left = "75%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "35%";
      figDiv.style.left = "93%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "32%";
      figDiv.style.left = "84%";
    } else {
      figDiv.style.top = "0%";
      figDiv.style.left = "80%";
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
