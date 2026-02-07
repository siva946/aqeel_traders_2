import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { companyInfo } from "../data/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", isRoute: true },
    { name: "About Us", path: "#about", isRoute: false },
    { name: "Products", path: "/products", isRoute: true },
    { name: "Services", path: "#services", isRoute: false },
    { name: "Contact", path: "#contact", isRoute: false },
  ];

  const othersDropdown = [
    { name: "Scrap Metal", path: "/others/scrap-metal" },
    { name: "Automobile", path: "/others/automobile" },
    { name: "Stainless Steel", path: "/others/stainless-steel" },
  ];

  const isActive = (path, isRoute) =>
    isRoute ? location.pathname === path : false;

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
              .desktop-nav { display: flex !important; gap: 30px; align-items: center; }
              .mobile-toggle { display: none !important; }
            }
            .dropdown-menu {
              position: absolute;
              top: 100%;
              left: 0;
              background: #fff;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              border-radius: 4px;
              padding: 10px 0;
              min-width: 180px;
              margin-top: 10px;
            }
            .dropdown-menu a {
              display: block;
              padding: 10px 20px;
              color: var(--color-text);
              font-weight: 500;
            }
            .dropdown-menu a:hover {
              background: #f5f5f5;
              color: var(--color-primary);
            }
          `}</style>
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontWeight: "500",
                  color: isActive(link.path, link.isRoute)
                    ? "var(--color-primary)"
                    : "var(--color-text)",
                  borderBottom: isActive(link.path, link.isRoute)
                    ? "2px solid var(--color-secondary)"
                    : "none",
                  paddingBottom: "5px",
                }}
              >
                {link.name}
              </Link>
            ) : location.pathname === "/" ? (
              <a
                key={link.name}
                href={link.path}
                style={{
                  fontWeight: "500",
                  color: "var(--color-text)",
                  paddingBottom: "5px",
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={`/${link.path}`}
                style={{
                  fontWeight: "500",
                  color: "var(--color-text)",
                  paddingBottom: "5px",
                }}
              >
                {link.name}
              </Link>
            ),
          )}

          {/* Others Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setIsOthersOpen(true)}
            onMouseLeave={() => setIsOthersOpen(false)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: "500",
                color: "var(--color-text)",
                cursor: "pointer",
                paddingBottom: "5px",
              }}
            >
              Others <ChevronDown size={16} />
            </div>
            {isOthersOpen && (
              <div className="dropdown-menu">
                {othersDropdown.map((item) => (
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: isActive(link.path, link.isRoute)
                    ? "var(--color-primary)"
                    : "var(--color-text)",
                  textAlign: "center",
                }}
              >
                {link.name}
              </Link>
            ) : location.pathname === "/" ? (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "var(--color-text)",
                  textAlign: "center",
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={`/${link.path}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "var(--color-text)",
                  textAlign: "center",
                }}
              >
                {link.name}
              </Link>
            ),
          )}

          {/* Others Mobile Dropdown */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "var(--color-text)",
                marginBottom: "10px",
              }}
            >
              Others
            </div>
            {othersDropdown.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "var(--color-text-light)",
                  padding: "8px 0",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
