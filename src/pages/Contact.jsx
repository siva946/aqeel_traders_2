import React from "react";
import { companyInfo } from "../data/data";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="page-content section-padding">
      <div className="container">
        <h1
          className="text-center"
          style={{ marginBottom: "60px", fontSize: "3rem" }}
        >
          Contact Us
        </h1>

        <div className="grid grid-2" style={{ gap: "60px" }}>
          <div>
            <h2 style={{ marginBottom: "30px" }}>Get In Touch</h2>
            <p
              style={{ marginBottom: "40px", color: "var(--color-text-light)" }}
            >
              Have an inquiry or want to request a quote? Fill out the form or
              contact us directly.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
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
                backgroundColor: "#fff",
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
    </div>
  );
};

export default Contact;
