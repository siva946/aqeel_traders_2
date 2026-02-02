import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { companyInfo } from "../data/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          {/* Placeholder for Logo */}
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "var(--color-primary)",
              borderRadius: "50%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontFamily: "var(--font-heading)",
            }}
          >
            AT
          </div>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            {companyInfo.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "none" }}>
          <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; gap: 30px; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontWeight: "500",
                color: isActive(link.path)
                  ? "var(--color-primary)"
                  : "var(--color-text)",
                borderBottom: isActive(link.path)
                  ? "2px solid var(--color-secondary)"
                  : "none",
                paddingBottom: "5px",
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: isActive(link.path)
                  ? "var(--color-primary)"
                  : "var(--color-text)",
                textAlign: "center",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
