import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Award,
  ShieldCheck,
  Truck,
  Package,
  ClipboardCheck,
  Ship,
  CheckCircle,
  Linkedin,
  Instagram,
  Facebook,
  PhoneCall,
} from "lucide-react";

import {
  companyInfo,
  exportDestinations,
  products,
  getProductImage,
} from "../data/data";

import ProductCard from "../components/ProductCard";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Welcome to <span className="text-gold">{companyInfo.name}</span>
          </h1>
          <p className="hero-subtitle">{companyInfo.tagline}</p>

          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/aqeel-traders-7252103a7" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/mr__samsul" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/1bMzvD2VAf/" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="tel:+916383618434">
                <PhoneCall size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container grid grid-2 intro-grid">
          <div>
            <h4 className="text-gold intro-subtitle">Allowed & Trusted</h4>
            <h2 className="intro-title">Exporting Excellence from India to the World</h2>
            <p className="intro-description">{companyInfo.description}</p>

            <ul className="intro-list">
              <li className="intro-list-item">
                <ShieldCheck size={20} /> Premium Quality Assurance
              </li>
              <li className="intro-list-item">
                <Globe size={20} /> Global Export Network
              </li>
            </ul>

            <a href="#about" className="intro-link">
              Read More About Us <ArrowRight size={18} />
            </a>
          </div>

          <div className="intro-image-container">
            <img src="/hero_spices.png" alt="Company Spices" className="intro-image" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container grid grid-4">
          <div>
            <Award size={48} />
            <h3>Premium Quality</h3>
            <p>Sourced from the best farms in India.</p>
          </div>

          <div>
            <Globe size={48} />
            <h3>Global Reach</h3>
            <p>Exporting to over 25 countries.</p>
          </div>

          <div>
            <ShieldCheck size={48} />
            <h3>Trusted Partner</h3>
            <p>Reliable trade practices & transparency.</p>
          </div>

          <div>
            <Truck size={48} />
            <h3>Timely Delivery</h3>
            <p>Efficient logistics network.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding products-section">
        <div className="container text-center">
          <h2>Our Products</h2>

          <div className="products-carousel-track">
            {products.slice(0, 4).flatMap(cat =>
              cat.items.slice(0, 3).map((item, idx) => (
                <ProductCard
                  key={idx}
                  name={item}
                  category={cat.category}
                  image={getProductImage(item)}
                />
              ))
            )}
          </div>

          <Link to="/products" className="btn btn-primary">
            View More Products
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center">Export Solutions</h2>

          <div className="grid grid-2 services-grid">
            {[
              { title: "Product Inspection", icon: <ClipboardCheck size={40} />, desc: "Quality check before shipment" },
              { title: "Packaging", icon: <Package size={40} />, desc: "Private labeling solutions" },
              { title: "Logistics", icon: <Ship size={40} />, desc: "Efficient shipping" },
              { title: "Documentation", icon: <Globe size={40} />, desc: "Custom clearance" },
            ].map((s, i) => (
              <div key={i} className="service-card">
                {s.icon}
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container text-center">
          <h2>Why Choose Aqeel Traders?</h2>

          <div className="grid grid-3">
            {[
              "International quality standards",
              "Competitive pricing",
              "Timely delivery",
              "Customized packaging",
              "Long-term partnerships",
              "Ethical business practices",
            ].map((item, i) => (
              <div key={i} className="why-choose-card">
                <CheckCircle size={32} />
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Home;
