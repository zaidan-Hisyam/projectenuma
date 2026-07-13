import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand-logo">
        ToDoList App
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/mymine" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          My Mine
        </NavLink>
        <NavLink to="/hasil" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Hasil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Tentang
        </NavLink>
      </div>
    </nav>
  );
}
