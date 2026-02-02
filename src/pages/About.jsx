import React from "react";
import { companyInfo } from "../data/data";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="page-content section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem" }}>About Us</h1>
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
            <h2 style={{ marginBottom: "20px" }}>Who We Are</h2>
            <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
              {companyInfo.description}
            </p>
            <p>
              Based in India, we have established a strong network of suppliers
              and farmers, ensuring that we only export the finest quality
              produce. Our commitment to strict quality standards has made us a
              preferred partner for international buyers.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "40px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Our Mission</h3>
            <p style={{ fontStyle: "italic", marginBottom: "30px" }}>
              "{companyInfo.mission}"
            </p>

            <h3 style={{ marginBottom: "20px" }}>Our Vision</h3>
            <p style={{ fontStyle: "italic" }}>"{companyInfo.vision}"</p>
          </div>
        </div>

        <div style={{}}>
          <h2 className="text-center" style={{ marginBottom: "40px" }}>
            Why Choose Aqeel Traders?
          </h2>
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
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-secondary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#eee")
                }
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
    </div>
  );
};

export default About;
