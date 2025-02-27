import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Email } from "./Email";
import { Whatsapp } from "./Whatsapp";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Motion } from "../functions/Motion";



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
    alert("Desabilitado")
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <p className="cursor-pointer text-center text-lg">Contato</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full

        " />
        <Dialog.Content
          className="bg-BGC border border-[#ffffff0e]  p-5 rounded-lg grid gap-4 
          fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none brightness-[1.4]

          "
        >
          <Dialog.Title className="text-xl text-center flex flex-wrap gap-2 justify-center w-full max-wlg
          
          ">
            <button className="text-black px-4 bg-BH rounded-md  hover:brightness-200 
                  w-[48%]   
                 
               
            "
              onClick={email}
            >
              Email
            </button>
            <button className="text-black px-4 bg-BH rounded-md brightness-[1.5] hover:brightness-200 w-[48%] "
              onClick={whatsapp}
            >
              Whatsapp
            </button>
          </Dialog.Title>

          {contactArray[contact]}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}





// export default function ContactDialog() {
//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>
//         <p className="cursor-pointer text-center text-lg">Contato</p>
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/50" />
//         <Dialog.Content
//           className="bg-[#09090aea] border border-[#ffffff0e] w-full max-w-lg p-5 rounded-lg grid gap-4 
//           fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
//         >
//           <Dialog.Title className="text-xl text-center flex flex-wrap gap-2 justify-center">
//             <button className="text-black px-4 py-2 bg-gray-300 rounded-md brightness-[1.5] hover:brightness-200 w-full max-w-48"
//               onClick={email}
//             >
//               Email
//             </button>
//             <button className="text-black px-4 py-2 bg-gray-300 rounded-md brightness-[1.5] hover:brightness-200 w-full max-w-48"
//               onClick={whatsapp}
//             >
//               Whatsapp
//             </button>
//           </Dialog.Title>

//           {contactArray[contact]}
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }
