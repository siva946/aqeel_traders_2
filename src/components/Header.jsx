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
    <header>
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <div className="logo-circle">AT</div>
          <div className="logo-content">
            <span className="logo-text">{companyInfo.name}</span>
            <span className="logo-tagline">{companyInfo.tagline2}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path, link.isRoute) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ) : location.pathname === "/" ? (
              <a key={link.name} href={link.path} className="nav-link">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={`/${link.path}`} className="nav-link">
                {link.name}
              </Link>
            ),
          )}

          {/* Others Dropdown */}
          <div
            className="dropdown-container"
            onMouseEnter={() => setIsOthersOpen(true)}
            onMouseLeave={() => setIsOthersOpen(false)}
          >
            <div className="dropdown-trigger">
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
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-nav-link ${isActive(link.path, link.isRoute) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ) : location.pathname === "/" ? (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={`/${link.path}`}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </Link>
            ),
          )}

          {/* Others Mobile Dropdown */}
          <div className="mobile-others">
            <div className="mobile-others-title">Others</div>
            {othersDropdown.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-others-link"
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
