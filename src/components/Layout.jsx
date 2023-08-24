import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const setActiveWithClass = ({ isActive }) => (isActive ? "active-link" : "");
  const setActiveWithStyle = ({ isActive }) => ({
    color: isActive ? "green" : "",
  });

  return (
    <>
      <header>
        <NavLink to="/" className={setActiveWithClass}>
          Home
        </NavLink>
        <NavLink to="/posts" className={setActiveWithClass}>
          Posts
        </NavLink>
        <NavLink to="/about" style={setActiveWithStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={setActiveWithStyle}>
          Contact Us
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
