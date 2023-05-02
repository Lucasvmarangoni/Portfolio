import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Email } from "./Email";
import { Whatsapp } from "./Whatsapp";
import { Cross2Icon } from "@radix-ui/react-icons";



export function Contato() {
  let [contact, setContact] = useState(0);
  let [Emailopacity, setEmailopacity] = useState<string>("opacity-75");
  let [whatsappopacity, setWhatsappopacity] = useState<string>("opacity-100");

  const contactArray = [<Email />, <Whatsapp />];

  function email() {
    setContact(contact = 0);
    setEmailopacity(Emailopacity = "opacity-75")
    setWhatsappopacity(whatsappopacity = "opacity-100")

  }
  function whatsapp() {
    setContact(contact = 1);
    setEmailopacity(Emailopacity = "opacity-100")
    setWhatsappopacity(whatsappopacity = "opacity-75")

  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="DialogTrigger ">
        <p>Contato</p>
      </Dialog.Trigger>


      <Dialog.Portal>

        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="bg-BG border border-[#ffffff0e] brightness-150
    p-7 
    rounded-md 
    grid 
    gap-5 
    fixed 
    top-[50%] 
    left-[50%]     
    transform 
    -translate-x-1/2 
    -translate-y-1/2  
    focus:outline-none"
        >
          <Dialog.Title className="text-xl flex gap-2 m-auto " >
            <button id="emailButton" className={`text-black px-3 bg-BGB flex justify-center rounded-md w-32 ${Emailopacity} hover:opacity-75 brightness-150`}
              onClick={email}

            >
              Email
            </button>
            <button id="whatsappButton" className={`text-black px-3 bg-BGB flex justify-center rounded-md w-32 ${whatsappopacity} hover:opacity-75 brightness-150`}
              onClick={whatsapp}
            >
              Whatsapp
            </button>
          </Dialog.Title>

          {contactArray[contact]}

          <Dialog.Close asChild>
            <button className="IconButton"

            >
              <Cross2Icon color="#ffffff85" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}




