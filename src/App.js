import Home from "../src/Pages/Home";
import Contacto from "../src/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "../src/Components/Navbar";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
