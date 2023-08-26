import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Motion } from "../../functions/motion";



export function Now() {

  const link = "underline text-T1 brightness-200 hover:opacity-80 P"

  const now = (duration: number, delay: number, title: string, href: string, activity: string): any => {
    return (
      Motion(duration, delay,
        <div className="flex flex-wrap gap-2" >
          <p className="P">
            {title}
          </p>

          {href !== "!" 
          ?
            <a href={href} target="_blank" rel="noreferrer"
            className={link}
          >{activity}
          </a> 
          :
          <p className={link}>{activity}</p>
          }
        </div >
      )
    )
  }

  return (
    <Dialog.Root >
      <Dialog.Trigger asChild className="text-T1 cursor-pointer border-b-[2px] 
      brightness-200 border-[#3b27535b] max-w-fit p-1 px-3 rounded-lg hover:opacity-100 hover:text-[0.97rem]
      ">
        <p >Atualmente</p>
      </Dialog.Trigger>


      <Dialog.Portal>

        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="bg-BG border border-[#ffffff0e] brightness-150 min-w-[20rem]
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
          {Motion(1.0, 0.5,
            (<Dialog.Title className="text-2xl flex gap-2 text-T1 font-semibold brightness-200" >
              Atualmente estou:
            </Dialog.Title>)
          )}




          <div className="grid gap-4">
            {
              now(1.0, 0.7, "Desenvolvendo:", "https://github.com/Lucasvmarangoni/currency-converter", "Currency Converter (v1.0.0)")
            }

            {
              now(1.0, 0.8, "Bootcamp:", "https://www.xpeducacao.com.br/bootcamp/arquiteto-de-solucoes", "Arquiteto de Soluções (XPe)")
            }
            {
              now(1.0, 0.9, "Bootcamp:", "https://www.xpeducacao.com.br/pos-graduacao/pos-seguranca-cibernetica", "Analista em Defesa Cibernética (XPe)")
            }
            {
              now(1.0, 1.0, "Livro:", "!", "Entendendo algoritmos (Aditya Y. Bhargava)")
            }            
          </div>


          <Dialog.Close asChild>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}




