import { Link } from "react-router-dom";
import { OnOut, OnOver } from "./functions/OverOut";
import { Contato } from "./Contato";
import { Menu } from "./Menu";

// export const button1: any = document.querySelector("#button1");

export function Header() {
  OnOver;
  OnOut;
  return (
    <header className="h-11 w-full bg-BGH brightness-150 flex items-center justify-center">
      <div
        className="flex justify-between items-center absolute
       n0:w-[1030px]   
       n1:w-[830px]    
       n2:w-[781px] 
       n3:w-[576px] 
       n4:w-[530px] 
       n5:w-[430px]
       n6:w-[350px]
       n7:w-[240px]"
      >
        <button
          onMouseOver={OnOver}
          onMouseOut={OnOut}
          className="text-T1 font-medium text-xl flex gap-1 items-center hover:opacity-50 hover:text-[1.29rem] brightness-125
          n4:text-xl
          n5:text-base
          n6:text-base
          n7:text-base
          "
        >
          <img id="img" className="w-5 opacity-60" src="/logo.png" alt="" />
          <Link to="/">
            <h1 className="">Lucas V Marangoni</h1>
          </Link>
        </button>

        <div
          className="text-T1  items-center gap-5 right-0 top-0 brightness-125     
          n2:flex n2:static
          n3:absolute
          n4:absolute
          n5:absolute
          n6:absolute
          n7:absolute
        "
        >
          <div
            className="invisible absolute right-1 top-1
          n2:invisible
          n3:visible
          n4:visible
          n5:visible
          n6:visible
          n7:visible"
          >
            <Menu />
          </div>

          <button
            className=" h-8 w-20 rounded-md hover:opacity-50 hover:text-[1.05rem] block
            n2:h-8 n2:w-20 n2:py-0 n2:static n2:bg-transparent n2:visible
            n3:invisible
            n4:invisible
            n5:invisible
            n6:invisible           
            n7:invisible"
          >
            <Link to="/portfolio">Portfólio</Link>
          </button>

          <button
            className="h-8 w-20 hover:opacity-50 hover:text-[1.05rem]         
          n2:h-8 n2:w-20 n2:py-0 n2:static n2:bg-transparent n2:visible          
          n3:invisible 
          n4:invisible
          n5:invisible
          n6:invisible
          n7:invisible  
          "
          >
            <Contato />
          </button>
        </div>
      </div>
    </header>
  );
}
function preventdefault(e: any) {
  throw new Error("Function not implemented.");
}
