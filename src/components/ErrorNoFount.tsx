import { Link } from "react-router-dom";

export const ErrorNoFount = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1 className="text-5xl font-bold text-T1">404 NOT FOUND</h1>
     
      <p className="m-auto text-T1 text-3xl">Retorne para o site:</p>
      <div className="m-auto text-3xl text-T2 grid justify-center gap-8">
       
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/">
          <h1 className="">Home</h1>
        </Link>
      </div>
    </div>
  );
};
