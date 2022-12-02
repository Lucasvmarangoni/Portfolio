let i = 0;
const txt: string = "Lorem ipsum typing effect!";
const speed = 50;

export const typeWriter = (): void => {
  if (i < txt.length) {
    const text: any = document.querySelector("#text");
    text.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// export const showText = (id: any, text: string, interval: number): void => {
//   const char = text.split("").reverse();

//   const typer = setInterval(() => {
//     if (!char.length) {
//       return clearInterval(typer);
//     }
//     const next: any = char.pop();
//     id.innerHTML += next;
//   }, interval);
// };
