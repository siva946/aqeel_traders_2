import React, { useState } from "react";
import { companyInfo } from "../data/data";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "916383618434";
    const text = `*New Contact Form Submission*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="page-content section-padding" id="contact">
      <div className="container">
        <h1 className="text-center contact-title">Contact Us</h1>

        <div className="grid grid-2 contact-grid">
          <div className="contact-intro">
            <h2>Get In Touch</h2>
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
                  <p> Near M.V. Government Higher Secondary School Muthupattinam, Karaikudi, Tamil Nadu 630002</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Mail size={24} color="var(--color-secondary)" />
                </div>
                <div className="contact-info-content">
                  <h4>Email Us</h4>
                  <a
                    href="mailto:aqeeltraders7557@gmail.com"
                    className="contact-email"
                    title="Email Aqeel Traders"
                  >
                    aqeeltraders7557@gmail.com
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Enquiry</h3>

              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
