import * as Dialog from "@radix-ui/react-dialog";
import { Motion, MotionFirst } from "../../../functions/Motion";
import { Link } from "react-router-dom";



export function Now() {

  const link = "underline text-T1 brightness-200 hover:opacity-80 P text-left"

  const now = (duration: number, delay: number, title: string, href: string, activity: string, more?: string | string[]): any => {
    return (
      Motion(duration, delay,
        <div className="flex flex-wrap gap-2" >
          <p className="P">
            {title}
          </p>

          {href !== "!"
            ?
            <Link to={href} target="_blank" rel="noreferrer"
              className={link}
            >{activity}
            </Link>
            :
            <p className={link}>{activity}</p>
          }

          {
            more 
            ?
              <Link to={more[0]} className={link} target="_blank" rel="noreferrer">
                {more[1]}
              </Link>
              : null
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
        <p >Acompanhe</p>
      </Dialog.Trigger>


      <Dialog.Portal>

        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="bg-BGH border border-[#ffffff0e] brightness-150 min-w-[20rem]
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
              now(1.0, 1.1, "Livro:", "!", "Entendendo algoritmos (Aditya Y. Bhargava)")
            }           
            {
              now(1.0, 1.5, "Curso:", "https://univesp.br/sites/58f6506869226e9479d38201/assets/5947e3fa69226ee825baf576/MatrizCurricular_EngenhariaCOMPUTA__O.pdf",
                "Engenharia da Computação - UNIVESP", [`https://www.youtube.com/@univesptv/playlists?view=50&sort=dd&shelf_id=3`, "(Youtube)"])
            }
          </div>


          <Dialog.Close asChild>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}




