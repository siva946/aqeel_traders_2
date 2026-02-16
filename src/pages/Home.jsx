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
  MapPin,
  Phone,
  Mail,
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
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Welcome to{" "}
            <span className="text-gold">{companyInfo.name}</span>
          </h1>
          <p className="hero-subtitle">{companyInfo.tagline}</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/aqeel-traders-7252103a7" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/mr__samsul?igsh=MXBraHRmanpnbXdnMQ==" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/1bMzvD2VAf/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={24} />
              </a>
              <a href="tel:+916383618434" target="_blank" rel="noopener noreferrer" className="social-icon">
                <PhoneCall size={24}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 intro-grid">
            <div>
              <h4 className="text-gold intro-subtitle">Allowed & Trusted</h4>
              <h2 className="intro-title">
                Exporting Excellence from India to the World
              </h2>
              <p className="intro-description">{companyInfo.description}</p>
              <ul className="intro-list">
                <li className="intro-list-item">
                  <ShieldCheck size={20} color="var(--color-primary)" /> Premium
                  Quality Assurance
                </li>
                <li className="intro-list-item">
                  <Globe size={20} color="var(--color-primary)" /> Global Export
                  Network
                </li>
              </ul>
              <a href="#about" className="intro-link">
                Read More About Us <ArrowRight size={18} />
              </a>
            </div>
            <div className="intro-image-wrapper">
              <div className="intro-image-container">
                <img
                  src="/hero_spices.png"
                  alt="Company Spices"
                  className="intro-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <section className="features-section">
        <div className="container">
          <div className="grid grid-4 features-grid">
            <div>
              <Award size={48} color="var(--color-secondary)" className="feature-icon" />
              <h3>Premium Quality</h3>
              <p className="feature-description">
                Sourced from the best farms in India.
              </p>
            </div>
            <div>
              <Globe size={48} color="var(--color-secondary)" className="feature-icon" />
              <h3>Global Reach</h3>
              <p className="feature-description">
                Exporting to over 25 countries.
              </p>
            </div>
            <div>
              <ShieldCheck size={48} color="var(--color-secondary)" className="feature-icon" />
              <h3>Trusted Partner</h3>
              <p className="feature-description">
                Reliable trade practices & transparency.
              </p>
            </div>
            <div>
              <Truck size={48} color="var(--color-secondary)" className="feature-icon" />
              <h3>Timely Delivery</h3>
              <p className="feature-description">
                Efficient logistics network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding products-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-description">
              Explore our wide range of premium Indian spices, grains, pulses,
              and more.
            </p>
          </div>

          <div className="products-carousel-wrapper">
            <div className="products-carousel-track">
              {[...products.slice(0, 4).flatMap(cat => 
                cat.items.slice(0, 3).map(item => ({
                  name: item,
                  category: cat.category,
                  image: getProductImage(item)
                }))
              ), ...products.slice(0, 4).flatMap(cat => 
                cat.items.slice(0, 3).map(item => ({
                  name: item,
                  category: cat.category,
                  image: getProductImage(item)
                }))
              )].map((product, idx) => (
                <div key={idx} className="carousel-product-card">
                  <ProductCard
                    name={product.name}
                    category={product.category}
                    image={product.image}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center view-more-container">
            <Link to="/products" className="btn btn-primary view-more-btn">
              View More Products
            </Link>
          </div>
        </div>
      </section>

      
      <Services/>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;
