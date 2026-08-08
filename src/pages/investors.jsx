import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import styles from "../styles/Investors.module.scss";

const announcements = [
  { id: 1, title: "Q3 2024 Financial Results", date: "2024-10-15", type: "Financial Results", summary: "Strong performance in Q3 with increased revenue and improved operational efficiency." },
  { id: 2, title: "New Mining Contract Awarded", date: "2024-09-28", type: "Business Update", summary: "Amazon Mineworks awarded major drilling contract in Tanzania worth $15M over 3 years." },
  { id: 3, title: "Annual General Meeting Notice", date: "2024-09-15", type: "Corporate", summary: "Notice of Annual General Meeting to be held on November 15, 2024." },
  { id: 4, title: "Environmental Certification Achieved", date: "2024-08-20", type: "Sustainability", summary: "Company achieves ISO 14001 environmental management certification." },
];

const presentations = [
  { id: 1, title: "Q3 2024 Investor Presentation", date: "2024-10-15", type: "Quarterly Results", description: "Comprehensive overview of Q3 2024 financial and operational performance." },
  { id: 2, title: "Annual Report 2023", date: "2024-03-31", type: "Annual Report", description: "Complete annual report covering financial performance, operations, and strategic outlook." },
  { id: 3, title: "Sustainability Report 2023", date: "2024-04-15", type: "Sustainability", description: "Environmental, social, and governance initiatives and achievements." },
];

const governance = {
  members: [
    { name: "John Smith", position: "Chairman", experience: "25 years in mining" },
    { name: "Sarah Johnson", position: "CEO", experience: "20 years in operations" },
    { name: "Michael Brown", position: "CFO", experience: "15 years in finance" },
  ],
  items: ["Independent Board of Directors", "Audit Committee", "Risk Management Committee", "Environmental & Social Committee"],
};

const csr = [
  { title: "Community Development", description: "Investing in local communities through education, healthcare, and infrastructure.", initiatives: ["School construction and renovation", "Healthcare facility support", "Local employment programs", "Skills development training"] },
  { title: "Environmental Stewardship", description: "Committed to sustainable mining practices and environmental protection.", initiatives: ["Rehabilitation programs", "Water conservation", "Biodiversity protection", "Carbon footprint reduction"] },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "ISO 14001:2015", description: "Environmental Management" },
  { name: "OHSAS 18001:2007", description: "Occupational Health & Safety" },
  { name: "ISO 45001:2018", description: "Occupational Health & Safety" },
];

const tabs = [
  { key: "announcements", label: "Announcements", icon: "bi-megaphone" },
  { key: "presentations", label: "Presentations", icon: "bi-file-earmark-slides" },
  { key: "governance", label: "Governance", icon: "bi-building" },
  { key: "csr", label: "CSR", icon: "bi-heart" },
  { key: "certifications", label: "Certifications", icon: "bi-award" },
];

const Investors = () => {
  const [searchParams] = useSearchParams();
  const initialTab = tabs.find((tab) => tab.key === searchParams.get("tab"))?.key || "announcements";
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className={styles.page}>
      <section className={styles.introSection}>
        <Container>
          <SectionHeading
            eyebrow="Investor Relations"
            title="Financial performance, governance, and sustainability."
            lede="Stay informed about our financial performance, corporate governance, and commitment to sustainable mining practices."
          />
        </Container>
      </section>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.tabs} role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <i className={`bi ${tab.icon}`} aria-hidden="true"></i>
                {tab.label}
              </button>
            ))}
          </div>

          <Reveal key={activeTab} className={styles.panel}>
            {activeTab === "announcements" && (
              <div className={styles.list}>
                {announcements.map((item) => (
                  <div className={styles.row} key={item.id}>
                    <div className={styles.rowHead}>
                      <h3>{item.title}</h3>
                      <span className={styles.tag}>{item.type}</span>
                    </div>
                    <p>{item.summary}</p>
                    <time>{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "presentations" && (
              <div className={styles.list}>
                {presentations.map((item) => (
                  <div className={styles.row} key={item.id}>
                    <div className={styles.rowHead}>
                      <h3>{item.title}</h3>
                      <span className={styles.tag}>{item.type}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className={styles.rowFooter}>
                      <time>{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                      <button type="button" className={styles.downloadBtn}>
                        <i className="bi bi-download" aria-hidden="true"></i>
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "governance" && (
              <div className={styles.governanceGrid}>
                <div>
                  <h3 className={styles.blockTitle}>Board of Directors</h3>
                  <div className={styles.membersList}>
                    {governance.members.map((member) => (
                      <div className={styles.memberRow} key={member.name}>
                        <strong>{member.name}</strong>
                        <span>{member.position}</span>
                        <span className={styles.muted}>{member.experience}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={styles.blockTitle}>Governance Framework</h3>
                  <ul className={styles.bulletList}>
                    {governance.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "csr" && (
              <div className={styles.governanceGrid}>
                {csr.map((section) => (
                  <div key={section.title}>
                    <h3 className={styles.blockTitle}>{section.title}</h3>
                    <p className={styles.sectionLede}>{section.description}</p>
                    <ul className={styles.bulletList}>
                      {section.initiatives.map((initiative) => (
                        <li key={initiative}>{initiative}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "certifications" && (
              <div className={styles.certGrid}>
                {certifications.map((cert) => (
                  <div className={styles.certRow} key={cert.name}>
                    <div>
                      <h3>{cert.name}</h3>
                      <p>{cert.description}</p>
                    </div>
                    <span className={styles.tag}>Certified</span>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </Container>
      </section>

      <section className={styles.contactSection}>
        <Container className={styles.contactInner}>
          <div>
            <h2>Investor Inquiries</h2>
            <p>For investor relations inquiries, please contact our team.</p>
          </div>
          <div className={styles.contactMethods}>
            <a href="mailto:investors@amazonmineworks.com">
              <i className="bi bi-envelope" aria-hidden="true"></i>
              investors@amazonmineworks.com
            </a>
            <a href="tel:+255221234567">
              <i className="bi bi-telephone" aria-hidden="true"></i>
              +255 22 123 4567
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Investors;
