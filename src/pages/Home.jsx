import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Award,
  ShieldCheck,
  Truck,
  Linkedin,
  Instagram,
  Facebook,
  PhoneCall,
} from "lucide-react";

import {
  companyInfo,
  products,
  getProductImage,
} from "../data/data";

import ProductCard from "../components/ProductCard";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Productview from "./Productview";

/* ---------------- ANIMATION VARIANTS ---------------- */

// Fade up animation
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Stagger container (grid animation)
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Floating animation (image)
const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-gold">{companyInfo.name}</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {companyInfo.tagline}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/aqeel-traders-7252103a7" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/mr__samsul" target="_blank" rel="noreferrer" className="social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/1bMzvD2VAf/" target="_blank" rel="noreferrer" className="social-icon">
                <Facebook size={24} />
              </a>
              <a href="tel:+916383618434" className="social-icon">
                <PhoneCall size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <motion.section
        className="section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
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

            {/* Floating Image */}
            <motion.div
              className="intro-image-wrapper"
              variants={floatAnimation}
              animate="animate"
            >
              <img src="/hero_spices.png" alt="spices" className="intro-image" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="grid grid-4 features-grid"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <Award size={48} />
              <h3>Premium Quality</h3>
              <p>Sourced from best farms in India.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Globe size={48} />
              <h3>Global Reach</h3>
              <p>Exporting to 25+ countries.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <ShieldCheck size={48} />
              <h3>Trusted Partner</h3>
              <p>Reliable trade practices.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Truck size={48} />
              <h3>Timely Delivery</h3>
              <p>Efficient logistics network.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* PRODUCTS */}
      <Productview />

      {/* OTHER SECTIONS */}

      <Services />

      <About />
      <Contact />
    </>
  );
};

export default Home;
