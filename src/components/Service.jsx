import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/Service.module.scss';

const ServiceItem = ({ icon, number, title, description }) => (
  <div className={styles.serviceItem}>
    <div className={styles.serviceIcon}>
      <i className={`bi ${icon}`}></i>
    </div>
    <div className={styles.serviceNumber}>{number}</div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
  </div>
);

const Services = () => (
  <section className={styles.services}>
    <p className={styles.eyebrow}>What We Do</p>
    <h2 className={styles.sectionTitle}>Our Services</h2>
    <p className={styles.sectionDescription}>
      We provide full-service mining, drilling, maintenance and geochemical analysis solutions to customers within the minerals industry.
    </p>
    <div className={styles.servicesList}>
      <ServiceItem
        icon="bi-gear-wide-connected"
        number="01"
        title="Fully Integrated Range of Mining Services"
        description="We have the capacity to offer a fully integrated mining services solution from first stage exploration drilling to delivery of ore to the mill, working across all facets of your project."
      />
      <ServiceItem
        icon="bi-signpost-split"
        number="02"
        title="Road Construction"
        description="Road construction involves several phases, including planning, site preparation, earthwork, sub-base and base course construction, and pavement."
      />
      <ServiceItem
        icon="bi-bezier2"
        number="03"
        title="Bridges Construction"
        description="From site inspection and planning to setting the foundation and installing piers, our bridges are engineered to carry live and dead loads and resist natural forces."
      />
      <ServiceItem
        icon="bi-train-front"
        number="04"
        title="Railway Construction"
        description="Track laying and ballasting capability supported by the latest technology, management and engineering know-how — for railways, metro systems and light rail."
      />
    </div>
    <div className={styles.servicesFooter}>
      <Link to="/services" className={styles.servicesLink}>
        View All Services <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  </section>
);

export default Services;