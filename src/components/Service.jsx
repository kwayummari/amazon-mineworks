import React from 'react';
import styles from './../styles/Service.module.scss';

const ServiceItem = ({ number, title, description }) => (
  <div className={styles.serviceItem}>
    <div className={styles.serviceNumber}>{number}</div>
    <div className={styles.serviceContent}>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  </div>
);

const Services = () => (
  <section className={styles.services}>
    <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
    <p className={styles.sectionDescription}>
      We provide full-service mining, drilling, maintenance and geochemical analysis solutions to customers within the minerals industry.
    </p>
    <div className={styles.servicesList}>
      <ServiceItem
        number="1"
        title="Fully Integrated Range of Mining Services"
        description="We have the capacity to offer a fully integrated mining services solution from first stage exploration drilling to delivery of ore to the mill. This means we have the capacity to work across all facets of your project delivering greater management and communication efficiencies."
      />
      <ServiceItem
        number="2"
        title="Road Construction"
        description="Road construction involves several phases, including planning, site preparation, earthwork, sub-base and base course construction, pavement. Road construction involves several phases, including planning, site preparation, earthwork, sub-base and base course construction, pavement."
      />
      <ServiceItem
        number="3"
        title="Bridges Construction"
        description="Bridge Construction Process · Step 1: Site Inspection and Planning · Step 2: Setting the Foundation · Step 3: Installing Piers and Bridge Supports. Bridges are designed, first, to carry their own permanent weight, or dead load; second, to carry traffic, or live loads; and, finally, to resist natural forces."
      />
      <ServiceItem
        number="4"
        title="Railway Construction"
        description="Railway construction is also called track laying and ballasting. It is the process of laying the railway sleepers and tracks on the track bed. Our Railway Construction capability supports the latest technology, management and engineering know-how. Working on railways, metro systems and light rail."
      />
    </div>
  </section>
);

export default Services;