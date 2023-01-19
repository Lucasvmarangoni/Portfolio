import { Link } from "react-router-dom";

export const ButtonPort = () => {
  return (
    <div
      className="flex justify-center mt-10 brightness-150     
    n2:mt-10
    n3:mt-6
    n4:mt-6
    n5:mt-6
    n6:mt-4
    n7:mt-4
    "
    >
      <button
        className="bg-BGH brightness-125 font-medium text-T1 w-48 h-16 
        hover:text-T2 text-3xl setinha hover:after:right-5"
      >
        <Link to="/portfolio">
          <h1 className="">Portfólio</h1>
        </Link>
      </button>
    </div>
  );
};
