import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hedef-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark text-light shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="hedef-logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <span className="h3 mb-0 text-light fw-bold">
            Hedef Doğa Sporları
          </span>
        </Link>

        <nav
          className={`d-md-flex align-items-center ${isOpen ? "d-block" : "d-none d-md-flex"}`}
        >
          <ul className="navbar-nav d-md-flex flex-row gap-3 mb-0 fw-medium">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Etkinlikler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="d-md-none btn btn-outline-secondary"
          onClick={toggleMenu}
          aria-label="Menü"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
