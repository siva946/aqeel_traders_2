import React from "react";
import { motion } from "framer-motion";
import { exportDestinations } from "../data/data";
import { Package, ClipboardCheck, Ship, Globe } from "lucide-react";

/* ---------- Animation Variants ---------- */

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
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Services = () => {
  const services = [
    {
      title: "Product Sourcing & Inspection",
      icon: <ClipboardCheck size={40} color="var(--color-secondary)" />,
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
      desc: "Efficient shipping coordination ensuring timely delivery.",
    },
    {
      title: "Documentation & Compliance",
      icon: <Globe size={40} color="var(--color-secondary)" />,
      desc: "Handling all export documentation and customs clearance.",
    },
  ];

  return (
    <motion.section
      id="services"
      className="section-padding services-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center section-header">
          <h2 className="section-title">Export Solutions</h2>
          <p className="section-description">
            Comprehensive export services tailored for global trade.
          </p>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-2 services-grid"
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Export Destinations */}
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
    </motion.section>
  );
};

export default Services;
