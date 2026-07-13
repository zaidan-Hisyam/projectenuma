import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand-logo">
        ToDoList App
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Tugas
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Tentang
        </NavLink>
      </div>
    </nav>
  );
}
