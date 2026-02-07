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
} from "lucide-react";
import {
  companyInfo,
  exportDestinations,
  products,
  getProductImage,
} from "../data/data";
import ProductCard from "../components/ProductCard";

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
            <a href="#contact" className="btn">
              Contact Us
            </a>
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

          {products.slice(0, 4).map((category, index) => (
            <div key={index} className="category-section">
              <h3 className="category-title">{category.category}</h3>
              <div className="grid grid-3 products-grid">
                {category.items.slice(0, 3).map((item, i) => (
                  <ProductCard
                    key={i}
                    name={item}
                    category={category.category}
                    image={getProductImage(item)}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center view-more-container">
            <Link to="/products" className="btn btn-primary view-more-btn">
              View More Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Export Solutions</h2>
            <p className="section-description">
              Comprehensive export services tailored for global trade.
            </p>
          </div>

          <div className="grid grid-2 services-grid">
            {[
              {
                title: "Product Sourcing & Inspection",
                icon: (
                  <ClipboardCheck size={40} color="var(--color-secondary)" />
                ),
                desc: "We ensure strict quality control and inspection before shipment.",
              },
              {
                title: "Customized Packaging",
                icon: <Package size={40} color="var(--color-secondary)" />,
                desc: "Private labeling and packaging solutions to meet your brand needs.",
              },
              {
                title: "Global Logistics",
                icon: <Ship size={40} color="var(--color-secondary)" />,
                desc: "Efficient shipping coordination to ensuring timely delivery.",
              },
              {
                title: "Documentation & Compliance",
                icon: <Globe size={40} color="var(--color-secondary)" />,
                desc: "Handling all export documentation and customs clearance.",
              },
            ].map((service, idx) => (
              <div key={idx} className="service-card">
                <div>{service.icon}</div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="destinations-container">
            <h3 className="text-center destinations-title">
              Our Export Destinations
            </h3>
            <div className="destinations-wrapper">
              <div className="destinations-track">
                {[...exportDestinations, ...exportDestinations].map(
                  (country, idx) => (
                    <span key={idx} className="destination-item">
                      {country}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              Dedicated to sourcing, processing, and exporting premium food
              products worldwide.
            </p>
          </div>

          <div className="grid grid-2 about-grid">
            <div className="about-content">
              <h3>Who We Are</h3>
              <p>{companyInfo.description}</p>
              <p>
                Based in India, we have established a strong network of
                suppliers and farmers, ensuring that we only export the finest
                quality produce. Our commitment to strict quality standards has
                made us a preferred partner for international buyers.
              </p>
            </div>
            <div className="mission-vision-box">
              <h4>Our Mission</h4>
              <p>"{companyInfo.mission}"</p>
              <h4>Our Vision</h4>
              <p>"{companyInfo.vision}"</p>
            </div>
          </div>

          <div>
            <h3 className="text-center destinations-title">
              Why Choose Aqeel Traders?
            </h3>
            <div className="grid grid-3">
              {[
                "International quality standards",
                "Competitive pricing",
                "Timely delivery & logistics",
                "Customized packaging",
                "Long-term partnerships",
                "Ethical business practices",
              ].map((item, index) => (
                <div key={index} className="why-choose-card">
                  <CheckCircle
                    size={32}
                    color="var(--color-secondary)"
                    className="why-choose-icon"
                  />
                  <h4 className="why-choose-title">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <h2 className="text-center contact-title">Contact Us</h2>

          <div className="grid grid-2 contact-grid">
            <div className="contact-intro">
              <h3>Get In Touch</h3>
              <p className="contact-intro-text">
                Have an inquiry or want to request a quote? Fill out the form or
                contact us directly.
              </p>

              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <MapPin size={24} color="var(--color-secondary)" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Our Location</h4>
                    <p>{companyInfo.contact.location}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Mail size={24} color="var(--color-secondary)" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Email Us</h4>
                    <p>{companyInfo.contact.email}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Phone size={24} color="var(--color-secondary)" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Call Us</h4>
                    <p>{companyInfo.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="contact-form">
                <h3>Send a Message</h3>

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
