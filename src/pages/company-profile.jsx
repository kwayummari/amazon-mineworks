import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Partners from "../components/Partners";
import styles from "../styles/CompanyProfile.module.scss";

const disciplines = [
  { title: "Road Construction", link: "/mine-earthworks", description: "Planning, site preparation, earthwork, sub-base and base course construction, and pavement — built to carry heavy mine-site traffic." },
  { title: "Bridges Construction", link: "/building-works", description: "From site inspection and planning to setting the foundation and installing piers, engineered to carry live and dead loads and resist natural forces." },
  { title: "Railway Construction", link: "/construction-works", description: "Track laying and ballasting supported by the latest technology, management and engineering know-how — for railways, metro systems and light rail." },
];

const CompanyProfile = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container>
        <div className={styles.introGrid}>
          <p className={styles.intro}>
            We provide full-service mining, drilling, maintenance and geochemical analysis
            solutions to customers within the minerals industry. Our services extend across the
            full mining value chain, from initial exploration drilling to load and haul, giving
            our customers a fully integrated mining services solution built on an unwavering
            commitment to safety.
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
      </Container>
    </section>

    <section className={styles.storySection}>
      <Container>
        <Reveal as="div" className={styles.storyBlock}>
          <div className={styles.storyImages}>
            <img loading="lazy" src="./images/image1.jpeg" alt="Amazon Mineworks drilling operation" />
            <img loading="lazy" src="./images/image2.jpeg" alt="Amazon Mineworks equipment on site" />
          </div>
          <div>
            <h2 className={styles.storyHeading}>Fully Integrated Range of Mining Services</h2>
            <p className={styles.storyText}>
              We have the capacity to offer a fully integrated mining services solution from
              first-stage exploration drilling to delivery of ore to the mill.
            </p>
            <p className={styles.storyText}>
              This means we work across all facets of your project — delivering greater
              management and communication efficiencies, faster identification and
              implementation of improvements, and a flexible, coordinated approach that keeps the
              program on schedule.
            </p>
          </div>
        </Reveal>

        <Reveal as="div" className={`${styles.storyBlock} ${styles.storyReverse}`} delay={80}>
          <div className={styles.storyImages}>
            <img loading="lazy" src="./images/image5.jpeg" alt="Amazon Mineworks heavy equipment" />
            <img loading="lazy" src="./images/image6.jpeg" alt="Amazon Mineworks fleet" />
          </div>
          <div>
            <h2 className={styles.storyHeading}>Young &amp; Expanding Fleet</h2>
            <p className={styles.storyText}>
              Our company operates one of the youngest rig fleets in the industry, while our Heavy
              Mining Equipment fleet is rapidly growing — now including 834, D9 and D10T
              bulldozers, 785 and 777 dump trucks, and 330, 340, 390, 395, 6020 and 6040
              excavators.
            </p>
            <p className={styles.storyText}>
              Our fleet has a reputation for quality and reliability, the result of regular
              maintenance and upgrades. Equipment is fitted with the latest technologies for
              enhanced efficiency, safety and data collection.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className={styles.disciplinesSection}>
      <Container>
        <SectionHeading eyebrow="How We Build" title="Construction Disciplines" />
        <div className={styles.disciplinesList}>
          {disciplines.map((item, index) => (
            <Reveal as="div" key={item.title} delay={index * 60}>
              <Link to={item.link} className={styles.disciplineRow}>
                <span className={styles.disciplineTitle}>{item.title}</span>
                <span className={styles.disciplineDescription}>{item.description}</span>
                <span className={styles.disciplineArrow}>
                  <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>

    <section className={styles.storySection}>
      <Container>
        <Reveal as="div" className={styles.storyBlock}>
          <div className={styles.storyImages}>
            <img loading="lazy" src="./images/image8.jpeg" alt="Amazon Mineworks apprenticeship program" />
            <img loading="lazy" src="./images/image9.png" alt="Amazon Mineworks training" />
          </div>
          <div>
            <h2 className={styles.storyHeading}>Creating Career Opportunities</h2>
            <p className={styles.storyText}>
              Our apprenticeship program provides our national employees with the opportunity to
              travel abroad to complete internationally recognized qualifications — opening
              further career opportunities not just at home, but across Africa and around the
              world.
            </p>
            <p className={styles.storyText}>
              This initiative forms part of Amazon Mineworks' ongoing strategy to provide
              considerable training and professional development for our national employee
              workforce.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className={styles.communitySection}>
      <Container>
        <SectionHeading
          eyebrow="Beyond the Site"
          title="Local Community Support"
          lede="We embrace our role in the communities where we work and recognize the impact our operations can have on local society. We strive to develop strong relationships with these communities and build sustainable value in local regions by providing a range of support to residents, local communities and charity organizations."
        />
      </Container>
    </section>

    <section className={styles.partnersSection}>
      <Container>
        <p className={styles.trustedBy}>Trusted By</p>
        <Partners />
      </Container>
    </section>
  </div>
);

export default CompanyProfile;
