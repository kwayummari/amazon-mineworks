import React, { useState } from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import FAQ from "../components/FAQ";
import styles from "../styles/ContactUs.module.scss";

const offices = [
  { name: "Tanzania Office", address: "Dar es Salaam, Tanzania", phone: "+255 22 123 4567", email: "tanzania@amazonmineworks.com" },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className={styles.page}>
      <section className={styles.introSection}>
        <Container>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            lede="Get in touch with our team to discuss your mining and drilling project requirements."
          />
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container>
          <div className={styles.grid}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows="6" />
              </div>

              <Button type="submit" variant="primary" arrow={false}>Send Message</Button>
            </form>

            <div className={styles.info}>
              <div className={styles.methods}>
                <a href="mailto:info@amazonmineworks.com">
                  <span className={styles.methodIcon}><i className="bi bi-envelope" aria-hidden="true"></i></span>
                  <div><strong>Email Us</strong><span>info@amazonmineworks.com</span></div>
                </a>
                <a href="tel:+255221234567">
                  <span className={styles.methodIcon}><i className="bi bi-telephone" aria-hidden="true"></i></span>
                  <div><strong>Call Us</strong><span>+255 22 123 4567</span></div>
                </a>
                <span className={styles.methodStatic}>
                  <span className={styles.methodIcon}><i className="bi bi-geo-alt" aria-hidden="true"></i></span>
                  <div><strong>Visit Us</strong><span>Dar es Salaam, Tanzania</span></div>
                </span>
              </div>

              <div className={styles.block}>
                <h3>Our Offices</h3>
                {offices.map((office) => (
                  <div className={styles.office} key={office.name}>
                    <h4>{office.name}</h4>
                    <p>{office.address}</p>
                    <p>{office.phone}</p>
                    <p>{office.email}</p>
                  </div>
                ))}
              </div>

              <div className={styles.block}>
                <h3>Business Hours</h3>
                <div className={styles.hoursList}>
                  {hours.map((item) => (
                    <div className={styles.hoursRow} key={item.day}>
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FAQ />
    </div>
  );
};

export default ContactUs;
