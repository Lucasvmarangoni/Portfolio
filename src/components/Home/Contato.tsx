import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export let inputEmail = document.querySelector(
  "inputEmail"
) as HTMLInputElement;

export let inputDescription = document.querySelector(
  "inputDescription"
) as HTMLInputElement;


export const Contato = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <p>Contato</p>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content
        className="bg-BG border border-[#ffffff0e]
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
        <Dialog.Title className="DialogTitle">
          <p>Contato</p>
        </Dialog.Title>
        <Dialog.Description className="mt-0">
          <div className="grid gap-4 justify-center">
            <form
              id="form"
              method="POST"
              action="https://lucasvmarangoni.vercel.app/send"
              className="grid row-span-3 gap-3"
            >
              <div className="text-T2 grid gap-2 w-5 ">
                <label htmlFor="inputName">Nome:</label>
                <input
                  className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                  id="inputName"
                  name="name"
                  type="text"
                  required
                />
              </div>

              <div className="text-T2 grid gap-2 w-5 ">
                <label className="text-T2" htmlFor="inputEmail">
                  Email:
                </label>
                <input
                  className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                  id="inputEmail"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <div className="text-T2 grid gap-2 w-64">
                <label className="text-T2" htmlFor="inputDescription">
                  Mensagem:
                </label>
                <textarea
                  className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                  id="inputDescription"
                  name="mensage"
                  required
                />
              </div>
            </form>
            <button
              form="form"
              type="submit"
              className="bg-BGB w-64 font-semibold py-2 text-base setinha hover:after:right-[103px] hover:opacity-70"
            >
              Enviar
            </button>
          </div>
        </Dialog.Description>

        <Dialog.Close asChild>
          <button className="IconButton">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
