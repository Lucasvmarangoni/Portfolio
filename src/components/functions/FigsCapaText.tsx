import { useEffect } from "react";

function setPositionFig() {
  const viewportWidth: number = window.innerWidth;
  const figDiv: any = document.querySelector("#figDiv");
  let randomPosition: number = 5 //Math.floor(Math.random() * (0 - 101 + 1)) + 101;
  if (randomPosition >= 30 && randomPosition < 60) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "19%";
      figDiv.style.left = "90%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "10%";
      figDiv.style.left = "95%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "14%";
      figDiv.style.left = "93%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "39%";
      figDiv.style.left = "27%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "37%";
      figDiv.style.left = "27%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "35%";
      figDiv.style.left = "27%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "36%";
      figDiv.style.left = "24%";
    } else {
      figDiv.style.top = "22%";
      figDiv.style.left = "20%";
    }
  } else if (randomPosition < 30) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "-2%";
      figDiv.style.left = "37%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-13%";
      figDiv.style.left = "34%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "-10%";
      figDiv.style.left = "37%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "62%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "64%";
      figDiv.style.left = "78%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "60%";
      figDiv.style.left = "73%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "59%";
      figDiv.style.left = "72%";
    } else {
      figDiv.style.top = "43%";
      figDiv.style.left = "19%";
    }
  } else {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "8%";
      figDiv.style.left = "67%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-2%";
      figDiv.style.left = "74%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "2%";
      figDiv.style.left = "74%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "39%";
      figDiv.style.left = "65%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "37%";
      figDiv.style.left = "65%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "35%";
      figDiv.style.left = "63%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "36%";
      figDiv.style.left = "67%";
    } else {
      figDiv.style.top = "22%";
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
        className="h-11 opacity-60 "
        src={`/fig/${randonFig}.png`}
        alt="fig1"
      />
    </div>
  );
}
