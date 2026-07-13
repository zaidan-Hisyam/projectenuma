import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMine from "./pages/MyMine";
import Hasil from "./pages/Hasil";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mymine" element={<MyMine />} />
          <Route path="/hasil" element={<Hasil />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
