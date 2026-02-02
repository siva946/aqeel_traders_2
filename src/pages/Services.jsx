import React from "react";
import { exportDestinations } from "../data/data";
import { Package, ClipboardCheck, Ship, Globe } from "lucide-react";

const Services = () => {
  return (
    <div className="page-content section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>Export Solutions</h1>
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
          <h2 className="text-center" style={{ marginBottom: "40px" }}>
            Our Export Destinations
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {exportDestinations.map((country, idx) => (
              <span
                key={idx}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  borderRadius: "30px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  color: "var(--color-primary)",
                }}
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
