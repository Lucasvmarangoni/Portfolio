import { Link, NavLink } from "react-router-dom";
import { OnOut, OnOver } from "./functions/OverOut";
import { Contato } from "./Contato";
import { Menu } from "./Menu";


export function Header() {
  OnOver;
  OnOut;
  return (
    <header className="h-11 w-full bg-BGH flex items-center justify-center scroll-item">
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
          className="text-T1 font-medium text-xl flex gap-1 items-center 
          n4:text-xl
          n5:text-base
          n6:text-base
          n7:text-base
          "
        >

          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="brightness-[2.8] "  onMouseOver={OnOver}
          onMouseOut={OnOut}
            width="26" height="26" viewBox="0 0 137.000000 167.000000"
            preserveAspectRatio="xMidYMid meet" pointer-events-none>

            <g transform="translate(0.000000,167.000000) scale(0.100000,-0.100000)"
              fill="#3b27535b" >
              <path d="M595 1608 c-113 -40 -221 -189 -270 -373 l-18 -65 32 -82 c18 -47 28
              -84 22 -86 -35 -12 -134 -87 -179 -137 -93 -102 -128 -197 -139 -377 -6 -103
              -5 -109 22 -163 28 -58 104 -126 174 -154 17 -8 31 -20 31 -28 0 -8 7 -30 16
              -49 31 -64 36 -65 415 -62 l341 3 29 33 c16 18 29 43 29 56 0 19 15 32 69 65
              88 52 145 116 161 180 15 65 -2 248 -30 324 -44 118 -142 232 -242 283 -27 13
              -48 29 -48 34 0 5 11 39 25 76 31 83 31 101 -1 199 -48 150 -135 267 -229 311
              -55 26 -155 32 -210 12z m182 -73 c50 -21 110 -91 153 -179 21 -45 42 -92 46
              -105 6 -21 4 -23 -17 -17 -13 4 -67 16 -119 28 -113 24 -241 20 -360 -12 -41
              -11 -76 -20 -77 -20 -11 -1 3 45 36 114 85 183 199 247 338 191z m53 -341 c16
              -16 -27 -127 -66 -173 -30 -35 -41 -41 -73 -41 -23 0 -48 8 -63 19 -26 21 -74
              116 -84 169 -6 29 -4 31 27 35 57 8 249 1 259 -9z m-356 -36 c36 -123 86 -202
              147 -234 48 -24 110 -18 157 16 47 34 95 112 114 182 8 32 17 48 27 48 32 0
              61 -13 61 -26 0 -8 -23 -75 -51 -150 -47 -123 -50 -137 -36 -151 23 -24 46 -9
              69 47 l21 50 48 -27 c27 -14 71 -49 97 -77 92 -98 124 -176 137 -343 6 -83 5
              -97 -14 -137 -15 -29 -39 -56 -74 -80 -29 -20 -56 -36 -60 -36 -5 0 -6 17 -3
              38 3 20 10 114 16 209 13 196 9 216 -50 246 -32 16 -68 17 -407 15 l-373 -3
              -31 -31 c-38 -38 -38 -41 -19 -287 7 -97 10 -180 7 -183 -10 -10 -100 59 -124
              96 -19 27 -23 46 -23 114 1 164 43 283 135 379 52 56 127 102 149 94 7 -3 18
              -23 24 -45 7 -22 19 -43 27 -46 23 -8 45 4 45 25 0 16 -51 160 -95 271 -5 13
              -1 20 16 27 34 14 59 13 63 -1z m586 -493 c10 -12 10 -54 -1 -213 l-14 -197
              -349 -3 c-193 -1 -353 1 -357 5 -4 5 -12 73 -18 153 -6 80 -14 166 -17 191
              -10 82 -24 79 385 79 309 0 360 -2 371 -15z m-20 -509 c0 -55 -3 -56 -355 -56
              -310 0 -325 1 -335 19 -5 11 -10 29 -10 40 0 21 3 21 350 21 l350 0 0 -24z"/>
                          </g>
          </svg>

          <Link to="/home" className=""> {/*alterar o to= devolta para / quando voltar a ter uma pagina inicial home utilizável. */}
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
            className=" h-8 w-24 text-lg rounded-md hover:brightness-150 hover:text-[1.05rem] block  
            n2:h-8 n2:w-24 n2:py-0 n2:static n2:bg-transparent n2:visible 
            n3:invisible
            n4:invisible
            n5:invisible
            n6:invisible           
            n7:invisible"
          >
            <NavLink to="/projetos">Projetos</NavLink>
          </button>



          <button
            id="contato"
            className="h-8 w-24 text-lg rounded-md  hover:brightness-150 hover:text-[1.05rem] 
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
