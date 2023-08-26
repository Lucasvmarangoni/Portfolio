import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Motion } from "../../functions/motion";



export function Now() {

  const link = "underline text-T1 brightness-200 hover:opacity-80"

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
          {Motion(1.0, 0.5,
            (<Dialog.Title className="text-2xl flex gap-2 text-T1 font-semibold brightness-200" >
              Atualmente estou:
            </Dialog.Title>)
          )}



          <div className="grid gap-4">
            {Motion(1.0, 0.7,
              <div className="flex flex-wrap gap-2">
                <p className="P">
                  Desenvolvendo o projeto:
                </p>
                <a href="https://github.com/Lucasvmarangoni/currency-converter"
                  className={link}
                >Currency Converter (v1.0.0)
                </a>
              </div>
            )}
            {Motion(1.0, 0.8,
              <div className="flex flex-wrap gap-2">
                <p className="P">
                  Bootcamp:
                </p>
                <a href="https://www.xpeducacao.com.br/bootcamp/arquiteto-de-solucoes"
                  className={link}
                >Arquiteto de Soluções (XPe)
                </a>
              </div>
            )}
            {Motion(1.0, 0.9,
              <div className="flex flex-wrap gap-2">
                <p className="P">
                  Bootcamp:
                </p>
                <a href="https://www.xpeducacao.com.br/pos-graduacao/pos-seguranca-cibernetica"
                  className={link}
                >Analista em Defesa Cibernética (XPe)
                </a>
              </div>
            )}
            {Motion(1.0, 1.0,
              <div className="flex flex-wrap gap-2">
                <p className="P">
                  Livro:
                </p>
                <span
                  className={link}
                >Entendendo algoritmos (Aditya Y. Bhargava)
                </span>
              </div>
            )}
          </div>


          <Dialog.Close asChild>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}




