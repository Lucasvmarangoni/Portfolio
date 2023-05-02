export const MOver = (item?: any) => {
  const sendButton = document.querySelector("#sendButton") as HTMLImageElement | any;
  if (!item)
    sendButton.style = "visibility: visible;";
};
export const MOut = (item?: any) => {
  const sendButton: any = document.querySelector("#sendButton") as HTMLButtonElement
  if (!item)
    sendButton.style = "visibility: hidden;";
};

export function SpanTag(text: string) {
  return <span
    className="w-64 invisible text-black text-sm font-semibold bg-[#1d1229] p-2 rounded-md absolute"
    id="sendButton"
  >
    <p>{text}</p>
  </span>
}

export const SendObligatoryButton = "bg-BGB w-64 font-semibold py-2 text-base setinha hover:after:right-[103px] hover:opacity-70"
