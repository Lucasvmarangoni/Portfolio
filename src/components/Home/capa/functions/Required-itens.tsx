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
    className="invisible text-black text-base font-semibold bg-[#1d1229] p-2 rounded-md absolute cursor-default hover:brightness-125 
    n4:w-96
    n6:w-80
    n7:w-60
    "
    id="sendButton"
  >
    <p>{text}</p>
  </span>
}

export const SendRequiredButton = `bg-BGB font-semibold py-2 text-base setinha hover:after:right-[103px] hover:brightness-150 
 n4:w-96
 n6:w-80
 n7:w-60
`
