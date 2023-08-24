import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/posts" className={setActive}>
          Posts
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2023 All righst reserved.</footer>
    </>
  );
};

export default Layout;
