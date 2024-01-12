import { useEffect } from "react";

function setPositionFig() {
  const viewportWidth: number = window.innerWidth;
  const figDiv: any = document.querySelector("#figDiv");
  let randomPosition: number = Math.floor(Math.random() * (0 - 4 + 1)) + 4;
  if (randomPosition === 1) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "-23%";
      figDiv.style.left = "92%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-23%";
      figDiv.style.left = "83%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "-27%";
      figDiv.style.left = "83%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "-27%";
      figDiv.style.left = "10%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "-27%";
      figDiv.style.left = "6%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "-53%";
      figDiv.style.left = "-2%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "-53%";
      figDiv.style.left = "8%";
    } else {
      figDiv.style.top = "-50%";
      figDiv.style.left = "10%";
    }
  } else if (randomPosition === 2) {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "-23%";
      figDiv.style.left = "32%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-20%";
      figDiv.style.left = "36%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "-25%";
      figDiv.style.left = "38%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "-65%";
      figDiv.style.left = "70%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "-77%";
      figDiv.style.left = "70%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "89%";
      figDiv.style.left = "75%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "88%";
      figDiv.style.left = "89%";
    } else {
      figDiv.style.top = "-50%";
      figDiv.style.left = "12%";
    }
  } else {
    if (viewportWidth >= 1100) {
      figDiv.style.top = "-23%";
      figDiv.style.left = "67%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      figDiv.style.top = "-23%";
      figDiv.style.left = "70%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      figDiv.style.top = "-24%";
      figDiv.style.left = "72%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      figDiv.style.top = "-65%";
      figDiv.style.left = "72%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      figDiv.style.top = "-74%";
      figDiv.style.left = "69%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      figDiv.style.top = "-65%";
      figDiv.style.left = "73%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      figDiv.style.top = "-52%";
      figDiv.style.left = "75%";
    } else {
      figDiv.style.top = "-50%";
      figDiv.style.left = "73%";
    }
  }
}

export function FigsBackText() {
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
