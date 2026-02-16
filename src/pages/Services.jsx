import React from "react";
import { exportDestinations } from "../data/data";
import { Package, ClipboardCheck, Ship, Globe } from "lucide-react";

const Services = () => {
  return (
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
  );
};

export default Services;
