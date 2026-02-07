import React from "react";
import { companyInfo } from "../data/data";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="page-content section-padding">
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
                  <p>{companyInfo.contact.phone1}</p>
                  <p>{companyInfo.contact.phone2}</p>
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
    </div>
  );
};

export default Contact;
