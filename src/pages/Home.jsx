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
  Facebook,
  PhoneCall,
  MailOpen,
} from "lucide-react";

import { companyInfo } from "../data/data";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Productview from "./Productview";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION (SEO H1) ================= */}
      <section
        className="hero-section"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            itemProp="name"
          >
            Welcome to
            <span className="text-gold"> Aqeel Traders</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            itemProp="description"
          >
            Global Exporters of Premium Food Products from India
          </motion.p>

          {/* Hidden SEO Content */}
          <p className="sr-only">
            Trusted Indian food exporter based in Karaikudi, Tamil Nadu.
            Exporting turmeric, chilli, cumin, coriander, basmati rice, lentils
            and agricultural commodities to Middle East, Europe, Africa and
            Asian countries.
          </p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/products" className="btn btn-primary">
              Explore Export Products
            </Link>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/aqeel-traders-7252103a7" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:aqeeltraders7557@gmail.com"
                className="social-icon"
                aria-label="Send email to Aqeel Traders export team"
                title="Email Aqeel Traders"
              >
                <MailOpen size={24} />
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

      {/* ================= INTRO SECTION ================= */}
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
              <h4 className="text-gold intro-subtitle">Trusted Export Partner</h4>

              <h2 className="intro-title">
                Trusted Indian Food Export Company for Global Importers
              </h2>

              <p className="intro-description">
                Aqeel Traders is a reliable Indian exporter of agricultural and
                food products. We specialize in exporting spices, rice, pulses
                and grains directly from trusted farms in India. Our focus is
                quality control, competitive pricing, safe packaging and timely
                international shipping.
              </p>

              <p className="sr-only">
                We supply bulk turmeric, chilli powder, cumin seeds, coriander
                seeds, basmati rice, non basmati rice, lentils and other food
                commodities worldwide.
              </p>

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

            <motion.div
              className="intro-image-wrapper"
              variants={floatAnimation}
              animate="animate"
            >
              <img
                src="/hero_spices.png"
                alt="Indian spices exporter"
                className="intro-image"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= FEATURES ================= */}
      <motion.section
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div className="grid grid-4 features-grid" variants={staggerContainer}>
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

      {/* SERVICES / ABOUT / CONTACT */}
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;
