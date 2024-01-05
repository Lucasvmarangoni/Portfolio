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
            (<Dialog.Title className="text-2xl flex gap-2 text-T1 font-semibold brightness-[2.5]" >
              Acompanhe
            </Dialog.Title>)
          )}

          <div className="grid gap-4">

            {Motion(1.0, 0.7,
              (<Dialog.Title className="text-2xl flex gap-2 text-T1 font-semibold brightness-[2.5]" >
                <p className="PP">
                  Nessa seção, listo o que estou fazendo atualmente.
                </p>
              </Dialog.Title>)
            )}


            {
              now(1.0, 1.1, "Projeto:", "https://github.com/Lucasvmarangoni/sistema-de-documentos-financeiros",
                "Financial file manager (Desenvolvendo)")
            }

          </div>


          <Dialog.Close asChild>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}




