let contador: number = 0;

export function Contar(a: string, b: string) {
  let secret: any = document.querySelector("#sicret") 
  contador++;
  const fistText = a.split("").reverse();
  const secondText = b.split("").reverse();
  const viewportWidth: number = window.innerWidth;

  if (contador == 10) {
    if (viewportWidth >= 1100) {
      secret.style.left = "60%";
      secret.style.top = "90%";
    } else if (viewportWidth >= 950 && viewportWidth < 1100) {
      secret.style.left = "60%";
      secret.style.top = "93%";
    } else if (viewportWidth >= 800 && viewportWidth < 950) {
      secret.style.left = "65%";
      secret.style.top = "90%";
    } else if (viewportWidth >= 664 && viewportWidth < 800) {
      secret.style.left = "35%";
      secret.style.top = "94%";
    } else if (viewportWidth >= 564 && viewportWidth < 664) {
      secret.style.left = "35%";
      secret.style.top = "94%";
    } else if (viewportWidth >= 464 && viewportWidth < 564) {
      secret.style.left = "35%";
      secret.style.top = "93%";
    } else if (viewportWidth >= 360 && viewportWidth < 464) {
      secret.style.left = "38%";
      secret.style.top = "93%";
    } else {
      secret.style.left = "20%";
      secret.style.top = "93%";
    }

    const fistSetInterval: any = setInterval(() => {
      if (!fistText.length) {
        secret.innerHTML = fistText;
        return clearInterval(fistSetInterval);
      }
      const fistTextNext: any = fistText.pop();
      secret.innerHTML += fistTextNext;
    }, 50);

    setTimeout(() => {
      secret.innerHTML = a;
    }, 1350);
    setTimeout(() => {
      secret.innerHTML = "";
    }, 1700);
    setTimeout(() => {
      if (viewportWidth >= 1100) {
        secret.style.left = "31%";
      } else if (viewportWidth >= 950 && viewportWidth < 1100) {
        secret.style.left = "34%";
      } else if (viewportWidth >= 800 && viewportWidth < 950) {
        secret.style.left = "37%";
      } else if (viewportWidth >= 664 && viewportWidth < 800) {
        secret.style.left = "24%";
      } else if (viewportWidth >= 564 && viewportWidth < 664) {
        secret.style.left = "28%";
      } else if (viewportWidth >= 464 && viewportWidth < 564) {
        secret.style.left = "28%";
      } else if (viewportWidth >= 360 && viewportWidth < 464) {
        secret.style.left = "24%";
      } else {
        secret.style.left = "4%";
      }
    }, 1720);

    setTimeout(() => {
      const secondSetInterval: any = setInterval(() => {
        if (!secondText.length) {
          secret.innerHTML = secondText;
          return clearInterval(secondSetInterval);
        }
        const secondTextNext: any = secondText.pop();
        secret.innerHTML += secondTextNext;
      }, 50);
    }, 2000);

    setTimeout(() => {
      secret.innerHTML = b;
    }, 4680);

    setTimeout(() => {
      secret.innerHTML = "";
      contador = 0;
    }, 6000);
  }
}
