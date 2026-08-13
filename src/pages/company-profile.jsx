import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import styles from "../styles/CompanyProfile.module.scss";

const chapters = [
  { id: "capabilities", num: "01", label: "Capabilities" },
  { id: "fleet", num: "02", label: "Fleet" },
  { id: "disciplines", num: "03", label: "Disciplines" },
  { id: "people", num: "04", label: "People" },
  { id: "community", num: "05", label: "Community" },
  { id: "partners", num: "06", label: "Partners" },
];

const fleetGroups = [
  { heading: "Bulldozers", items: ["834", "D9", "D10T"] },
  { heading: "Dump Trucks", items: ["785", "777"] },
  { heading: "Excavators", items: ["330", "340", "390", "395", "6020", "6040"] },
];

const disciplines = [
  {
    num: "01",
    title: "Road Construction",
    link: "/mine-earthworks",
    description: "Planning, site preparation, earthwork, sub-base and base course construction, and pavement.",
    image: "./images/image3.jpeg",
  },
  {
    num: "02",
    title: "Bridges Construction",
    link: "/building-works",
    description: "Site inspection and planning through foundation and piers, engineered to carry live and dead loads.",
    image: "./images/image4.jpeg",
  },
  {
    num: "03",
    title: "Railway Construction",
    link: "/construction-works",
    description: "Track laying and ballasting for railways, metro systems and light rail.",
    image: "./images/image7.jpeg",
  },
];

const partners = [
  { image: "./images/BARRICK.png", alt: "Barrick" },
  { image: "./images/bhp.png", alt: "BHP" },
  { image: "./images/blackRock.png", alt: "BlackRock" },
  { image: "./images/katoro.png", alt: "Katoro Gold" },
  { image: "./images/peak.png", alt: "Peak Resources" },
  { image: "./images/shanta.png", alt: "Shanta Gold" },
  { image: "./images/preseus.png", alt: "Perseus Mining" },
  { image: "./images/armdale.png", alt: "Armadale" },
  { image: "./images/resources.png", alt: "Resources Partner" },
];

const CompanyProfile = () => {
  const [active, setActive] = useState(chapters[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.chapter);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const registerSection = (id) => (node) => {
    sectionRefs.current[id] = node;
  };

  const jumpTo = (id) => (event) => {
    event.preventDefault();
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      <section className={styles.opening}>
        <Container className={styles.openingGrid}>
          <div>
            <p className={styles.openingLabel}>Company Profile</p>
            <p className={styles.openingStatement}>
              We provide full-service mining, drilling, maintenance and geochemical analysis
              solutions to customers within the minerals industry — a fully integrated service
              built on an unwavering commitment to safety.
            </p>
            <div className={styles.downloads}>
              <button type="button">
                <span>Company Overview</span>
                <i className="bi bi-download" aria-hidden="true"></i>
              </button>
              <button type="button">
                <span>Drilling Overview</span>
                <i className="bi bi-download" aria-hidden="true"></i>
              </button>
              <button type="button">
                <span>Mining Overview</span>
                <i className="bi bi-download" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className={styles.openingImage}>
            <img loading="eager" src="./images/image2.jpeg" alt="Amazon Mineworks equipment on site" />
          </div>
        </Container>
      </section>

      {createPortal(
        <nav className={styles.rail} aria-label="Page sections">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`${styles.railLink} ${active === c.id ? styles.railActive : ""}`}
              onClick={jumpTo(c.id)}
            >
              <span className={styles.railNum}>{c.num}</span>
              <span className={styles.railLabel}>{c.label}</span>
            </a>
          ))}
        </nav>,
        document.body
      )}

      <section
        id="capabilities"
        data-chapter="capabilities"
        ref={registerSection("capabilities")}
        className={`${styles.chapter} ${styles.chapterDark}`}
      >
        <div className={styles.chapterImage}>
          <img loading="lazy" src="./images/image1.jpeg" alt="Amazon Mineworks drilling operation" />
        </div>
        <div className={styles.chapterText}>
          <span className={styles.chapterNum}>01</span>
          <h2 className={styles.chapterHeading}>Fully Integrated Range of Mining Services</h2>
          <p className={styles.chapterParagraph}>
            We have the capacity to offer a fully integrated mining services solution from
            first-stage exploration drilling to delivery of ore to the mill.
          </p>
          <p className={styles.chapterParagraph}>
            This means we work across all facets of your project — delivering greater
            management and communication efficiencies, faster identification and
            implementation of improvements, and a flexible, coordinated approach.
          </p>
        </div>
      </section>

      <section id="fleet" data-chapter="fleet" ref={registerSection("fleet")} className={styles.chapter}>
        <Container>
          <span className={styles.chapterNumLight}>02</span>
          <h2 className={styles.chapterHeadingLight}>Young &amp; Expanding Fleet</h2>
          <p className={styles.chapterLede}>
            One of the youngest rig fleets in the industry, with a rapidly growing Heavy Mining
            Equipment fleet — fitted with the latest technologies for enhanced efficiency, safety
            and data collection.
          </p>
          <div className={styles.fleetGrid}>
            {fleetGroups.map((group) => (
              <div key={group.heading} className={styles.fleetGroup}>
                <p className={styles.fleetHeading}>{group.heading}</p>
                <ul className={styles.fleetList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="disciplines"
        data-chapter="disciplines"
        ref={registerSection("disciplines")}
        className={styles.chapter}
      >
        <Container>
          <span className={styles.chapterNumLight}>03</span>
          <h2 className={styles.chapterHeadingLight}>Construction Disciplines</h2>
        </Container>
        <div className={styles.disciplinePanels}>
          {disciplines.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              className={styles.disciplinePanel}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className={styles.disciplinePanelScrim} />
              <span className={styles.disciplinePanelNum}>{item.num}</span>
              <span className={styles.disciplinePanelTitle}>{item.title}</span>
              <span className={styles.disciplinePanelDescription}>{item.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="people" data-chapter="people" ref={registerSection("people")} className={styles.chapter}>
        <Container className={styles.peopleGrid}>
          <div className={styles.peopleText}>
            <span className={styles.chapterNumLight}>04</span>
            <h2 className={styles.chapterHeadingLight}>Creating Career Opportunities</h2>
            <p className={styles.chapterParagraph}>
              Our apprenticeship program provides our national employees with the opportunity to
              travel abroad to complete internationally recognized qualifications — opening
              further career opportunities not just at home, but across Africa and around the
              world.
            </p>
            <Link to="/careers" className={styles.chapterLink}>
              <span>View Opportunities</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
          <div className={styles.peopleImage}>
            <img loading="lazy" src="./images/image8.jpeg" alt="Amazon Mineworks apprenticeship program" />
          </div>
        </Container>
      </section>

      <section
        id="community"
        data-chapter="community"
        ref={registerSection("community")}
        className={`${styles.chapter} ${styles.chapterDark} ${styles.chapterDarkReverse}`}
      >
        <div className={styles.chapterText}>
          <span className={styles.chapterNum}>05</span>
          <h2 className={styles.chapterHeading}>Local Community Support</h2>
          <p className={styles.chapterParagraph}>
            We embrace our role in the communities where we work and recognize the impact our
            operations can have on local society — building sustainable value through support to
            residents, local communities and charity organizations.
          </p>
        </div>
        <div className={styles.chapterImage}>
          <img loading="lazy" src="./images/gallery3.jpeg" alt="Amazon Mineworks community engagement" />
        </div>
      </section>

      <section id="partners" data-chapter="partners" ref={registerSection("partners")} className={styles.chapter}>
        <Container>
          <span className={styles.chapterNumLight}>06</span>
          <h2 className={styles.chapterHeadingLight}>Trusted By</h2>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.alt}-${index}`} className={styles.partnerItem}>
                  <img src={partner.image} alt={partner.alt} className={styles.partnerLogo} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CompanyProfile;
