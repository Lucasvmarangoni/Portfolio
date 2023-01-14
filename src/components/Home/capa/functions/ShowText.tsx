let contador: number = 0;

export function Contar(a: string, b: string) {
  let sicret: any = document.querySelector("#sicret");
  contador++;
  const fistText = a.split("").reverse();
  const secondText = b.split("").reverse();
  const viewportWidth: number = window.innerWidth;

  if (contador == 10) {
    if (viewportWidth >= 1100) {
      sicret.style.left = "60%";
      sicret.style.top = "90%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      sicret.style.left = "60%";
      sicret.style.top = "93%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      sicret.style.left = "65%";
      sicret.style.top = "90%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      sicret.style.left = "35%";
      sicret.style.top = "94%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      sicret.style.left = "35%";
      sicret.style.top = "94%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      sicret.style.left = "35%";
      sicret.style.top = "93%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      sicret.style.left = "38%";
      sicret.style.top = "93%";
    } else {
      sicret.style.left = "20%";
      sicret.style.top = "93%";
    }

    const fistSetInterval: any = setInterval(() => {
      if (!fistText.length) {
        sicret.innerHTML = fistText;
        return clearInterval(fistSetInterval);
      }
      const fistTextNext: any = fistText.pop();
      sicret.innerHTML += fistTextNext;
    }, 50);

    setTimeout(() => {
      sicret.innerHTML = a;
    }, 1350);
    setTimeout(() => {
      sicret.innerHTML = "";
    }, 1700);
    setTimeout(() => {
      if (viewportWidth >= 1100) {
        sicret.style.left = "31%";
      } else if (viewportWidth >= 950 && viewportWidth < 1100) {
        sicret.style.left = "34%";
      } else if (viewportWidth >= 800 && viewportWidth < 950) {
        sicret.style.left = "37%";
      } else if (viewportWidth >= 664 && viewportWidth < 800) {
        sicret.style.left = "24%";
      } else if (viewportWidth >= 564 && viewportWidth < 664) {
        sicret.style.left = "28%";
      } else if (viewportWidth >= 464 && viewportWidth < 564) {
        sicret.style.left = "28%";
      } else if (viewportWidth >= 360 && viewportWidth < 464) {
        sicret.style.left = "24%";
      } else {
        sicret.style.left = "4%";
      }
    }, 1720);

    setTimeout(() => {
      const secondSetInterval: any = setInterval(() => {
        if (!secondText.length) {
          sicret.innerHTML = secondText;
          return clearInterval(secondSetInterval);
        }
        const secondTextNext: any = secondText.pop();
        sicret.innerHTML += secondTextNext;
      }, 50);
    }, 2000);

    setTimeout(() => {
      sicret.innerHTML = b;
    }, 4280);

    setTimeout(() => {
      sicret.innerHTML = "";
      contador = 0;
    }, 6000);
  }
}
