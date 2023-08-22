import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2023 All righst reserved.</footer>
    </>
  );
};

export default Layout;