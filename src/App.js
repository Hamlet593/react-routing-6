import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
