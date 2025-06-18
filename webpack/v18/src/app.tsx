import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "@/home";
import { About } from "@/about";

export const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">首页</Link> | <Link to="/about">关于</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
