import React from "react";
import styles from "../styles/Announcements.module.scss";

const Announcements = () => {
  const announcements = [
    {
      title: "Q3 2024 Financial Results",
      date: "2024-10-15",
      type: "Financial",
      summary:
        "Strong quarterly performance with increased revenue and improved operational efficiency.",
      status: "Published",
    },
    {
      title: "New Mining Contract Awarded",
      date: "2024-09-28",
      type: "Operational",
      summary:
        "Secured a 5-year mining contract worth $50 million in Tanzania.",
      status: "Published",
    },
    {
      title: "Environmental Certification Achieved",
      date: "2024-09-15",
      type: "Compliance",
      summary:
        "Successfully obtained ISO 14001:2015 environmental management certification.",
      status: "Published",
    },
    {
      title: "Annual General Meeting Notice",
      date: "2024-08-30",
      type: "Corporate",
      summary:
        "Notice of Annual General Meeting to be held on October 30, 2024.",
      status: "Published",
    },
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Financial", count: 4 },
    { name: "Operational", count: 3 },
    { name: "Compliance", count: 2 },
    { name: "Corporate", count: 3 },
  ];

  return (
    <div className={styles.announcements}>
      {/* Hero Section */}
      {/* <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Announcements</h1>
          <p className={styles.heroDescription}>
            Stay informed with the latest announcements, financial results, and
            corporate updates from Amazon Mineworks.
          </p>
        </div>
      </div> */}

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Filter by Category</h2>
          <div className={styles.categoryFilters}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${styles.categoryFilter} ${
                  index === 0 ? styles.active : ""
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div className={styles.announcementsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Recent Announcements</h2>
          <p className={styles.sectionDescription}>
            Latest corporate announcements and updates.
          </p>

          <div className={styles.announcementsGrid}>
            {announcements.map((announcement, index) => (
              <div key={index} className={styles.announcementCard}>
                <div className={styles.announcementHeader}>
                  <h3 className={styles.announcementTitle}>
                    {announcement.title}
                  </h3>
                  <div className={styles.announcementMeta}>
                    <span className={styles.announcementDate}>
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                    <span
                      className={`${styles.announcementType} ${
                        styles[announcement.type.toLowerCase()]
                      }`}
                    >
                      {announcement.type}
                    </span>
                  </div>
                </div>
                <p className={styles.announcementSummary}>
                  {announcement.summary}
                </p>
                <div className={styles.announcementActions}>
                  <button className={styles.readMoreBtn}>Read More</button>
                  <button className={styles.downloadBtn}>Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our investor newsletter to receive the latest
              announcements and updates directly in your inbox.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Subscribe</button>
              <button className={styles.secondaryBtn}>Contact IR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
