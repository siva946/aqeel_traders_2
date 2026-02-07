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
      <section
        style={{
          background:
            'linear-gradient(rgba(10, 35, 81, 0.8), rgba(10, 35, 81, 0.6)), url("/hero_spices.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "20px",
              color: "#fff",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Welcome to{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              {companyInfo.name}
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto 40px",
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            {companyInfo.tagline}
          </p>
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <Link
              to="/products"
              className="btn btn-primary"
              style={{
                backgroundColor: "var(--color-secondary)",
                borderColor: "var(--color-secondary)",
              }}
            >
              Explore Products
            </Link>
            <a
              href="#contact"
              className="btn"
              style={{ backgroundColor: "transparent", borderColor: "#fff" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h4
                className="text-gold"
                style={{ letterSpacing: "2px", textTransform: "uppercase" }}
              >
                Allowed & Trusted
              </h4>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                Exporting Excellence from India to the World
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-text-light)",
                  marginBottom: "20px",
                }}
              >
                {companyInfo.description}
              </p>
              <ul style={{ marginBottom: "30px" }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <ShieldCheck size={20} color="var(--color-primary)" /> Premium
                  Quality Assurance
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Globe size={20} color="var(--color-primary)" /> Global Export
                  Network
                </li>
              </ul>
              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                }}
              >
                Read More About Us <ArrowRight size={18} />
              </a>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              {/* Use the same hero image or another one, or just a placeholder for now */}
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "#ddd",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/hero_spices.png"
                  alt="Company Spices"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <section
        style={{
          backgroundColor: "var(--color-primary)",
          padding: "60px 0",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: "center" }}>
            <div>
              <Award
                size={48}
                color="var(--color-secondary)"
                style={{ marginBottom: "15px" }}
              />
              <h3>Premium Quality</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Sourced from the best farms in India.
              </p>
            </div>
            <div>
              <Globe
                size={48}
                color="var(--color-secondary)"
                style={{ marginBottom: "15px" }}
              />
              <h3>Global Reach</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Exporting to over 25 countries.
              </p>
            </div>
            <div>
              <ShieldCheck
                size={48}
                color="var(--color-secondary)"
                style={{ marginBottom: "15px" }}
              />
              <h3>Trusted Partner</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Reliable trade practices & transparency.
              </p>
            </div>
            <div>
              <Truck
                size={48}
                color="var(--color-secondary)"
                style={{ marginBottom: "15px" }}
              />
              <h3>Timely Delivery</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Efficient logistics network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem" }}>Our Products</h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "var(--color-text-light)",
              }}
            >
              Explore our wide range of premium Indian spices, grains, pulses,
              and more.
            </p>
          </div>

          {products.slice(0, 4).map((category, index) => (
            <div key={index} style={{ marginBottom: "60px" }}>
              <h3
                style={{
                  borderLeft: "5px solid var(--color-secondary)",
                  paddingLeft: "15px",
                  marginBottom: "30px",
                  fontSize: "1.8rem",
                }}
              >
                {category.category}
              </h3>
              <div className="grid grid-3" style={{ gap: "30px" }}>
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

          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link
              to="/products"
              className="btn btn-primary"
              style={{ fontSize: "1.1rem", padding: "15px 40px" }}
            >
              View More Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section-padding"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem" }}>Export Solutions</h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "var(--color-text-light)",
              }}
            >
              Comprehensive export services tailored for global trade.
            </p>
          </div>

          <div
            className="grid grid-2"
            style={{ gap: "40px", marginBottom: "80px" }}
          >
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
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "30px",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                }}
              >
                <div>{service.icon}</div>
                <div>
                  <h3 style={{ marginBottom: "10px" }}>{service.title}</h3>
                  <p style={{ color: "var(--color-text-light)" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "60px 40px",
              borderRadius: "16px",
            }}
          >
            <h3 className="text-center" style={{ marginBottom: "40px" }}>
              Our Export Destinations
            </h3>
            <div className="destinations-wrapper">
              <div className="destinations-track">
                {/* Duplicate the array to create a seamless infinite scroll effect */}
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
      <section
        id="about"
        className="section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem" }}>About Us</h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "var(--color-text-light)",
              }}
            >
              Dedicated to sourcing, processing, and exporting premium food
              products worldwide.
            </p>
          </div>

          <div
            className="grid grid-2"
            style={{ gap: "60px", alignItems: "center", marginBottom: "80px" }}
          >
            <div>
              <h3 style={{ marginBottom: "20px" }}>Who We Are</h3>
              <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
                {companyInfo.description}
              </p>
              <p>
                Based in India, we have established a strong network of
                suppliers and farmers, ensuring that we only export the finest
                quality produce. Our commitment to strict quality standards has
                made us a preferred partner for international buyers.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "8px",
              }}
            >
              <h4 style={{ marginBottom: "20px" }}>Our Mission</h4>
              <p style={{ fontStyle: "italic", marginBottom: "30px" }}>
                "{companyInfo.mission}"
              </p>
              <h4 style={{ marginBottom: "20px" }}>Our Vision</h4>
              <p style={{ fontStyle: "italic" }}>"{companyInfo.vision}"</p>
            </div>
          </div>

          <div>
            <h3 className="text-center" style={{ marginBottom: "40px" }}>
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
                <div
                  key={index}
                  style={{
                    padding: "30px",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <CheckCircle
                    size={32}
                    color="var(--color-secondary)"
                    style={{ marginBottom: "15px" }}
                  />
                  <h4 style={{ fontSize: "1.2rem" }}>{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section-padding"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <h2
            className="text-center"
            style={{ marginBottom: "60px", fontSize: "2.5rem" }}
          >
            Contact Us
          </h2>

          <div className="grid grid-2" style={{ gap: "60px" }}>
            <div>
              <h3 style={{ marginBottom: "30px" }}>Get In Touch</h3>
              <p
                style={{
                  marginBottom: "40px",
                  color: "var(--color-text-light)",
                }}
              >
                Have an inquiry or want to request a quote? Fill out the form or
                contact us directly.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "rgba(212, 175, 55, 0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <MapPin size={24} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "5px" }}>Our Location</h4>
                    <p>{companyInfo.contact.location}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "rgba(212, 175, 55, 0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <Mail size={24} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "5px" }}>Email Us</h4>
                    <p>{companyInfo.contact.email}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      backgroundColor: "rgba(212, 175, 55, 0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <Phone size={24} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "5px" }}>Call Us</h4>
                    <p>{companyInfo.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                style={{
                  padding: "40px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 5px 30px rgba(0,0,0,0.05)",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ marginBottom: "20px" }}>Send a Message</h3>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
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
