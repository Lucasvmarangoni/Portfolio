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
        setinha hover:after:right-7"
      >
        <Link to="/portfolio">
          <h1 className="">Portfólio</h1>
        </Link>
      </button>
    </div>
  );
};
