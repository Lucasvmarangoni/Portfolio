import { Link } from "react-router-dom";

export const ErrorNoFount = () => {
  return (
    <div className="grid justify-center items-center gap-10 mt-20">
      <h1
        className="text-5xl font-bold text-T1 
      n6:text-4xl
      n7:text-3xl
      "
      >
        404 NOT FOUND
      </h1>
      <p className="m-auto text-T1 text-3xl">Retorne para o site:</p>

      <div className="text-3xl text-T2 m-auto text-center grid gap-4">
        <div className="rounded-sm hover:text-T1 setinha hover:after:right-2 grid items-center">
          <Link to="/">Home</Link>
        </div>
        <div className="rounded-sm hover:text-T1 setinha hover:after:right-[-9px] grid items-center">
          <Link to="/portfolio">Portfólio</Link>
        </div>

        
      </div>
    </div>
  );
};
