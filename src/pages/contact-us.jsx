import React, { useState } from "react";
import styles from "../styles/ContactUs.module.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const offices = [
    {
      name: "Tanzania Office",
      address: "Dar es Salaam, Tanzania",
      phone: "+255 22 123 4567",
      email: "tanzania@amazonmineworks.com",
    },
    {
      name: "Namibia Office",
      address: "Windhoek, Namibia",
      phone: "+264 61 234 567",
      email: "namibia@amazonmineworks.com",
    },
  ];

  return (
    <div className={styles.contactUsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroDescription}>
            Get in touch with our team to discuss your mining and drilling
            project requirements.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.contactFormSection}>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.contactInfoSection}>
            <h2>Get in Touch</h2>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <i className="bi bi-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <p>info@amazonmineworks.com</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <i className="bi bi-telephone"></i>
                <div>
                  <h4>Call Us</h4>
                  <p>+255 22 123 4567</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h4>Visit Us</h4>
                  <p>Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>

            <div className={styles.officesSection}>
              <h3>Our Offices</h3>
              {offices.map((office, index) => (
                <div key={index} className={styles.officeCard}>
                  <h4>{office.name}</h4>
                  <p className={styles.officeAddress}>{office.address}</p>
                  <p className={styles.officePhone}>{office.phone}</p>
                  <p className={styles.officeEmail}>{office.email}</p>
                </div>
              ))}
            </div>

            <div className={styles.businessHours}>
              <h3>Business Hours</h3>
              <div className={styles.hoursList}>
                <div className={styles.hoursItem}>
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
