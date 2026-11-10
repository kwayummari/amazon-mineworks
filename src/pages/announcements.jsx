import React, { useMemo, useState } from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import styles from "../styles/Announcements.module.scss";

const announcements = [
  { title: "Q3 2024 Financial Results", date: "2024-10-15", type: "Financial", summary: "Strong quarterly performance with increased revenue and improved operational efficiency." },
  { title: "New Mining Contract Awarded", date: "2024-09-28", type: "Operational", summary: "Secured a 5-year mining contract worth $50 million in Tanzania." },
  { title: "Environmental Certification Achieved", date: "2024-09-15", type: "Compliance", summary: "Successfully obtained ISO 14001:2015 environmental management certification." },
  { title: "Annual General Meeting Notice", date: "2024-08-30", type: "Corporate", summary: "Notice of Annual General Meeting to be held on October 30, 2024." },
];

const Announcements = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const counts = announcements.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});
    return ["All", ...Object.keys(counts)].map((name) => ({
      name,
      count: name === "All" ? announcements.length : counts[name],
    }));
  }, []);

  const visible = activeFilter === "All" ? announcements : announcements.filter((item) => item.type === activeFilter);

  return (
    <div className={styles.page}>
      <section className={styles.introSection}>
        <Container>
          <SectionHeading eyebrow="Investor Relations" title="Announcements" lede="Corporate announcements, financial results, and regulatory updates." />

          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category.name}
                className={`${styles.filter} ${activeFilter === category.name ? styles.filterActive : ""}`}
                onClick={() => setActiveFilter(category.name)}
              >
                {category.name} <span className={styles.filterCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.listSection}>
        <Container>
          <div className={styles.cardGrid}>
            {visible.map((item, index) => (
              <Reveal as="div" className={styles.card} key={item.title} delay={index * 60}>
                <div className={styles.cardHead}>
                  <span className={styles.tag}>{item.type}</span>
                  <time>{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Announcements;
