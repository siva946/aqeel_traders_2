import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { companyInfo } from "../data/data";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary)",
        color: "#fff",
        padding: "60px 0 20px",
      }}
    >
      <div className="container">
        <div className="grid grid-3">
          <div>
            <h3 style={{ color: "var(--color-secondary)" }}>
              {companyInfo.name}
            </h3>
            <p style={{ marginBottom: "20px", color: "#ccc" }}>
              {companyInfo.tagline}
            </p>
            <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
              Exporting premium quality Indian food products to the world.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#fff" }}>Quick Links</h4>
            <ul style={{ lineHeight: "2" }}>
              <li>
                <Link to="/" style={{ color: "#ccc" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "#ccc" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" style={{ color: "#ccc" }}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "#ccc" }}>
                  Export Services
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "#ccc" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff" }}>Contact Us</h4>
            <ul style={{ lineHeight: "2", color: "#ccc" }}>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <MapPin size={18} color="var(--color-secondary)" />{" "}
                {companyInfo.contact.location}
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Mail size={18} color="var(--color-secondary)" />{" "}
                {companyInfo.contact.email}
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Phone size={18} color="var(--color-secondary)" />{" "}
                {companyInfo.contact.phone}
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#999",
          }}
        >
          <p>
            © 2026 {companyInfo.name}. All Rights Reserved. | Export & Import of
            Food Products
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
