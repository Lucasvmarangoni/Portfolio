import { Link } from "react-router-dom";

export const ButtonPort = () => {
  return (
    <div
      className="flex justify-center mt-10 brightness-125     
    n2:mt-10
    n3:mt-6
    n4:mt-6
    n5:mt-6
    n6:mt-4
    n7:mt-4
    "
    >
      <button
        className="w-48 h-16  
        text-3xl font-medium text-T1
        border-[#55396285] border-[2px] 
        opacity-50 hover:opacity-70 brightness-150
        setinha hover:after:right-7
        n3:w-48 n3:h-16 n3:text-2xl
        n4:w-32 n4:h-14 n4:text-2xl
        n5:w-32 n5:h-14 n5:text-2xl
        n6:w-32 n6:h-14 n6:text-2xl
        n7:w-32 n7:h-14 n7:text-2xl
        
        "
      >
        <Link to="/portfolio">
          <h1 className="">Portfólio</h1>
        </Link>
      </button>
    </div>
  );
};
