import { Link, NavLink } from "react-router-dom";
import { OnOut, OnOver } from "./functions/OverOut";
import { Contato } from "./Contato";
import { Menu } from "./Menu";


export function Header() {
  OnOver;
  OnOut;
  return (
    <header className="h-11 w-full bg-BGH flex items-center justify-center scroll-item ">
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
          className="text-T1 font-medium text-xl flex gap-1 items-center hover:text-[1.2rem]  hover:brightness-200
          n4:text-xl
          n5:text-base
          n6:text-base
          n7:text-base
          "
        >
          {/* brightness-[2.7]  */}
          <img id="img" src="./logo.svg" className="" alt="icone de um homem com capus utilizando computador" />

          <Link to="/" className=""> {/*alterar o to= devolta para / quando voltar a ter uma pagina inicial home utilizável. */}
            <h1 className="text-T1">Lucas V Marangoni</h1>
          </Link>
        </button>

        <div
          className="text-T1 mt-[2px] items-center gap-5 right-0 top-0 hover:opacity-100 
          n2:flex n2:static
          n3:absolute
          n4:absolute
          n5:absolute
          n6:absolute
          n7:absolute
        "
        >
          <div
            className="invisible absolute right-0 top-0
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
            className=" h-8 w-24 text-lg rounded-md  hover:text-[1.05rem] block 
            n2:h-8 n2:w-24 n2:py-0 n2:static n2:bg-transparent n2:visible 
            n3:invisible
            n4:invisible
            n5:invisible
            n6:invisible           
            n7:invisible"
          >
            <NavLink className="" to="/projetos">Projects</NavLink>
          </button>



          <button
            id="contato"
            className="h-8 w-24 text-lg rounded-md  hover:brightness-200 hover:text-[1.05rem] 
          n2:h-8 n2:w-24 n2:py-0 n2:static n2:bg-transparent n2:visible      
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
