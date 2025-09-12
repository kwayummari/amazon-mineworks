import React, { useState, useEffect } from "react";
import styles from "../styles/Investors.module.scss";

const Investors = () => {
  const [activeTab, setActiveTab] = useState("announcements");

  const announcements = [
    {
      id: 1,
      title: "Q3 2024 Financial Results",
      date: "2024-10-15",
      type: "Financial Results",
      summary:
        "Strong performance in Q3 with increased revenue and improved operational efficiency.",
      status: "Published",
    },
    {
      id: 2,
      title: "New Mining Contract Awarded",
      date: "2024-09-28",
      type: "Business Update",
      summary:
        "Amazon Mineworks awarded major drilling contract in Tanzania worth $15M over 3 years.",
      status: "Published",
    },
    {
      id: 3,
      title: "Annual General Meeting Notice",
      date: "2024-09-15",
      type: "Corporate",
      summary:
        "Notice of Annual General Meeting to be held on November 15, 2024.",
      status: "Published",
    },
    {
      id: 4,
      title: "Environmental Certification Achieved",
      date: "2024-08-20",
      type: "Sustainability",
      summary:
        "Company achieves ISO 14001 environmental management certification.",
      status: "Published",
    },
  ];

  const presentations = [
    {
      id: 1,
      title: "Q3 2024 Investor Presentation",
      date: "2024-10-15",
      type: "Quarterly Results",
      description:
        "Comprehensive overview of Q3 2024 financial and operational performance.",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Annual Report 2023",
      date: "2024-03-31",
      type: "Annual Report",
      description:
        "Complete annual report covering financial performance, operations, and strategic outlook.",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Sustainability Report 2023",
      date: "2024-04-15",
      type: "Sustainability",
      description:
        "Environmental, social, and governance initiatives and achievements.",
      downloadUrl: "#",
    },
  ];

  const governance = [
    {
      title: "Board of Directors",
      description:
        "Experienced leadership team with extensive mining and business expertise.",
      members: [
        {
          name: "John Smith",
          position: "Chairman",
          experience: "25 years in mining",
        },
        {
          name: "Sarah Johnson",
          position: "CEO",
          experience: "20 years in operations",
        },
        {
          name: "Michael Brown",
          position: "CFO",
          experience: "15 years in finance",
        },
      ],
    },
    {
      title: "Corporate Governance",
      description:
        "Strong governance framework ensuring transparency and accountability.",
      items: [
        "Independent Board of Directors",
        "Audit Committee",
        "Risk Management Committee",
        "Environmental & Social Committee",
      ],
    },
  ];

  const csr = [
    {
      title: "Community Development",
      description:
        "Investing in local communities through education, healthcare, and infrastructure.",
      initiatives: [
        "School construction and renovation",
        "Healthcare facility support",
        "Local employment programs",
        "Skills development training",
      ],
    },
    {
      title: "Environmental Stewardship",
      description:
        "Committed to sustainable mining practices and environmental protection.",
      initiatives: [
        "Rehabilitation programs",
        "Water conservation",
        "Biodiversity protection",
        "Carbon footprint reduction",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      status: "Certified",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      status: "Certified",
    },
    {
      name: "OHSAS 18001:2007",
      description: "Occupational Health & Safety",
      status: "Certified",
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health & Safety",
      status: "Certified",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "announcements":
        return (
          <div className={styles.announcementsSection}>
            <h3>Latest Announcements</h3>
            <div className={styles.announcementsList}>
              {announcements.map((announcement) => (
                <div key={announcement.id} className={styles.announcementCard}>
                  <div className={styles.announcementHeader}>
                    <h4>{announcement.title}</h4>
                    <span className={styles.announcementType}>
                      {announcement.type}
                    </span>
                  </div>
                  <p className={styles.announcementSummary}>
                    {announcement.summary}
                  </p>
                  <div className={styles.announcementFooter}>
                    <span className={styles.announcementDate}>
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                    <span className={styles.announcementStatus}>
                      {announcement.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "presentations":
        return (
          <div className={styles.presentationsSection}>
            <h3>Investor Presentations</h3>
            <div className={styles.presentationsList}>
              {presentations.map((presentation) => (
                <div key={presentation.id} className={styles.presentationCard}>
                  <div className={styles.presentationHeader}>
                    <h4>{presentation.title}</h4>
                    <span className={styles.presentationType}>
                      {presentation.type}
                    </span>
                  </div>
                  <p className={styles.presentationDescription}>
                    {presentation.description}
                  </p>
                  <div className={styles.presentationFooter}>
                    <span className={styles.presentationDate}>
                      {new Date(presentation.date).toLocaleDateString()}
                    </span>
                    <button className={styles.downloadBtn}>
                      <i className="bi bi-download"></i>
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "governance":
        return (
          <div className={styles.governanceSection}>
            <h3>Corporate Governance</h3>
            <div className={styles.governanceContent}>
              {governance.map((section, index) => (
                <div key={index} className={styles.governanceCard}>
                  <h4>{section.title}</h4>
                  <p>{section.description}</p>
                  {section.members && (
                    <div className={styles.membersList}>
                      {section.members.map((member, memberIndex) => (
                        <div key={memberIndex} className={styles.member}>
                          <strong>{member.name}</strong> - {member.position}
                          <br />
                          <small>{member.experience}</small>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.items && (
                    <ul className={styles.governanceList}>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "csr":
        return (
          <div className={styles.csrSection}>
            <h3>Corporate Social Responsibility</h3>
            <div className={styles.csrContent}>
              {csr.map((section, index) => (
                <div key={index} className={styles.csrCard}>
                  <h4>{section.title}</h4>
                  <p>{section.description}</p>
                  <ul className={styles.csrInitiatives}>
                    {section.initiatives.map((initiative, initiativeIndex) => (
                      <li key={initiativeIndex}>{initiative}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className={styles.certificationsSection}>
            <h3>Certifications & Compliance</h3>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certificationCard}>
                  <div className={styles.certHeader}>
                    <h4>{cert.name}</h4>
                    <span className={styles.certStatus}>{cert.status}</span>
                  </div>
                  <p>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.investorsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Investor Relations</h1>
          <p className={styles.heroDescription}>
            Stay informed about our financial performance, corporate governance,
            and commitment to sustainable mining practices.
          </p>
        </div>
      </div>

      <div className={styles.investorsContainer}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "announcements" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("announcements")}
            >
              <i className="bi bi-megaphone"></i>
              Announcements
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "presentations" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("presentations")}
            >
              <i className="bi bi-file-earmark-slides"></i>
              Presentations
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "governance" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("governance")}
            >
              <i className="bi bi-building"></i>
              Governance
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "csr" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("csr")}
            >
              <i className="bi bi-heart"></i>
              CSR
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "certifications" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("certifications")}
            >
              <i className="bi bi-award"></i>
              Certifications
            </button>
          </div>
        </div>

        <div className={styles.contentContainer}>{renderContent()}</div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2>Investor Inquiries</h2>
          <p>For investor relations inquiries, please contact our team.</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i className="bi bi-envelope"></i>
              <span>investors@amazonmineworks.com</span>
            </div>
            <div className={styles.contactItem}>
              <i className="bi bi-telephone"></i>
              <span>+255 22 123 4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
