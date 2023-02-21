import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav className="hidden">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfólio</Link>
          </li>
          <li>
            <Link to="*">404 not found</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
