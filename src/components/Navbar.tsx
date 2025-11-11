import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hedef-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark text-light shadow-sm sticky-top position-relative">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="hedef-logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <span className="h3 mb-0 text-light fw-bold d-none d-md-block">
            Hedef Doğa Sporları
          </span>
        </Link>
        {!isOpen && (
          <button
            className="btn btn-outline-primary d-md-none"
            onClick={toggleMenu}
            aria-label="Menü"
          >
            <i className="bi bi-list"></i>
          </button>
        )}
        <div
          className={`mobile-menu d-md-none ${
            isOpen ? "open" : ""
          } position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-95 d-flex flex-column justify-content-center align-items-center text-center`}
        >
          <button
            className="btn btn-outline-light position-absolute top-0 end-0 m-3"
            onClick={toggleMenu}
            aria-label="Menüyü Kapat"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className="navbar-nav gap-4 fw-bold fs-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-light"
                onClick={toggleMenu}
              >
                <i className="bi bi-house-door me-2"></i> Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className="nav-link text-light"
                onClick={toggleMenu}
              >
                <i className="bi bi-calendar-event me-2"></i> Etkinlikler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-light"
                onClick={toggleMenu}
              >
                <i className="bi bi-people me-2"></i> Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-light"
                onClick={toggleMenu}
              >
                <i className="bi bi-envelope me-2"></i> İletişim
              </NavLink>
            </li>
          </ul>
        </div>
        <nav className="d-none d-md-flex">
          <ul className="navbar-nav d-flex flex-row gap-3 mb-0 fw-medium">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-light">
                <i className="bi bi-house-door me-1"></i> Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className="nav-link text-light">
                <i className="bi bi-calendar-event me-1"></i> Etkinlikler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-light">
                <i className="bi bi-people me-1"></i> Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-light">
                <i className="bi bi-envelope me-1"></i> İletişim
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <style>{`
        .mobile-menu {
          opacity: 0;
          transform: translateY(-100%);
          transition: opacity 0.4s ease, transform 0.4s ease;
          z-index: 1050;
          pointer-events: none;
        }
        .mobile-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
      `}</style>
    </header>
  );
}
