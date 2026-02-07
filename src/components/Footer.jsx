import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { companyInfo } from "../data/data";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-3">
          <div>
            <h3 className="footer-title">{companyInfo.name}</h3>
            <p className="footer-tagline">{companyInfo.tagline}</p>
            <p className="footer-description">
              Exporting premium quality Indian food products to the world.
            </p>
          </div>

          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Export Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">Contact Us</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin size={18} color="var(--color-secondary)" />
                {companyInfo.contact.location}
              </li>
              <li className="footer-contact-item">
                <Mail size={18} color="var(--color-secondary)" />
                <a href={`mailto:${companyInfo.contact.email}`}>
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="footer-contact-item phone">
                <Phone size={18} color="var(--color-secondary)" />
                <div>
                  <a href={`tel:${companyInfo.contact.phone1}`}>
                    {companyInfo.contact.phone1}
                  </a>
                  <br />
                  <a href={`tel:${companyInfo.contact.phone2}`}>
                    {companyInfo.contact.phone2}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
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
