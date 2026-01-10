import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProyectoEducativo from "./pages/ProyectoEducativo";
import Galeria from "./pages/Galeria";
import Admision from "./pages/Admision";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Sobre-Nosotros" element={<About />} />
        <Route path="/Proyecto-Educativo" element={<ProyectoEducativo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Admision" element={<Admision />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
