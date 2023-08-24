import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  // const setActiveWithClass = ({ isActive }) => (isActive ? "active-link" : "");
  // const setActiveWithStyle = ({ isActive }) => ({
  //   color: isActive ? "green" : "",
  // });

  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2023 All righst reserved.</footer>
    </>
  );
};

export default Layout;
