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
    className="invisible text-black  font-semibold bg-BGB p-2 rounded-md absolute cursor-default  hover:brightness-200
    n4:w-96 n4:text-lg
    n6:w-80 
    n7:w-60 n7:text-base
    "
    id="sendButton"
  >
    <p>{text}</p>
  </span>
}

export const SendRequiredButton = `bg-BGB font-semibold py-2 text-xl setinha hover:after:right-[103px]  hover:brightness-200
 n4:w-96
 n6:w-80
 n7:w-60
`
