import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SafetyCallout from "../components/SafetyCallout";
import { servicesDetailData } from "../data/ServicesDetailData";
import { formatTitle } from "../utils/formatTitle";
import styles from "../styles/ServiceDetail.module.scss";

const ServiceDetail = ({ slug }) => {
  const data = servicesDetailData[slug];
  const title = formatTitle(slug);

  if (!data) return null;

  return (
    <div className={styles.page}>
      <PageHero title={title} kicker={data.kicker} />

      <section className={styles.introSection}>
        <Container>
          <div className={styles.introGrid}>
            <p className={styles.intro}>{data.intro}</p>
            <div className={styles.introActions}>
              <Link to="/contact-us" className={styles.quoteLink}>
                <span>Request a Quote</span>
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
              {data.resourceLabel && (
                <button type="button" className={styles.resourceLink}>
                  <span>{data.resourceLabel}</span>
                  <i className="bi bi-download" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {data.story && (
        <section className={styles.storySection}>
          <Container>
            {data.story.map((block, index) => (
              <Reveal
                as="div"
                key={block.heading}
                className={`${styles.storyBlock} ${block.reverse ? styles.storyReverse : ""}`}
                delay={index * 80}
              >
                <img loading="lazy" src={block.image} alt={block.heading} className={styles.storyImage} />
                <div>
                  <h2 className={styles.storyHeading}>{block.heading}</h2>
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className={styles.storyText}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </Container>
        </section>
      )}

      {data.features && (
        <section className={styles.featuresSection}>
          <Container>
            <SectionHeading eyebrow={data.category} title="What This Service Covers" />
            <div className={styles.featuresList}>
              {data.features.map((feature, index) => (
                <Reveal as="div" className={styles.featureRow} key={feature.title} delay={index * 60}>
                  <span className={styles.featureNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                    {feature.details && (
                      <ul className={styles.featureDetails}>
                        {feature.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.equipment && (
        <section className={styles.equipmentSection}>
          <Container>
            <SectionHeading eyebrow="Fleet & Equipment" title="Built for the Job" />
            <div className={styles.equipmentList}>
              {data.equipment.map((item) => (
                <div className={styles.equipmentRow} key={item.name}>
                  <div>
                    <h3 className={styles.equipmentName}>{item.name}</h3>
                    <p className={styles.equipmentType}>{item.type}</p>
                  </div>
                  <dl className={styles.specList}>
                    {item.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt>{spec.label}</dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.projects && (
        <section className={styles.projectsSection}>
          <Container>
            <SectionHeading eyebrow="Track Record" title="Recent Projects" />
            <div className={styles.projectsList}>
              {data.projects.map((project) => (
                <div className={styles.projectRow} key={project.name}>
                  <div className={styles.projectHead}>
                    <h3>{project.name}</h3>
                    <span
                      className={`${styles.projectStatus} ${
                        project.status === "Active" ? styles.statusActive : styles.statusCompleted
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className={styles.projectMeta}>
                    <span>{project.location}</span>
                    <span>{project.duration}</span>
                    <span>{project.scope}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.programs && (
        <section className={styles.projectsSection}>
          <Container>
            <SectionHeading eyebrow="Active Programs" title="Programs & Certifications" />
            <div className={styles.projectsList}>
              {data.programs.map((program) => (
                <div className={styles.projectRow} key={program.name}>
                  <div className={styles.projectHead}>
                    <h3>{program.name}</h3>
                    <span
                      className={`${styles.projectStatus} ${
                        program.status === "Active" ? styles.statusActive : styles.statusCompleted
                      }`}
                    >
                      {program.status}
                    </span>
                  </div>
                  <p className={styles.programDescription}>{program.description}</p>
                  <div className={styles.projectMeta}>
                    <span>{program.metricLabel}: {program.metricValue}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <SafetyCallout />
    </div>
  );
};

export default ServiceDetail;
