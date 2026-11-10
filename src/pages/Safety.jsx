import React from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SafetyCallout from "../components/SafetyCallout";
import styles from "../styles/Safety.module.scss";

const milestones = [
  { years: "16", site: "Mwanza Facility", location: "Tanzania", date: "January 2024" },
  { years: "7", site: "North Mara Gold Mine", location: "Tanzania", date: "March 2023" },
  { years: "6", site: "Geita Gold Mine", location: "Tanzania", date: "March 2023" },
  { years: "2", site: "Bulyanhulu Gold Mine", location: "Tanzania", date: "September 2023" },
  { years: "2", site: "Kabanga Nickel Project", location: "Tanzania", date: "December 2023" },
];

const initiatives = [
  { title: "Golden Safety Rules", description: "Overarching guidelines for employee behavior to prevent harm to themselves or others in the workplace." },
  { title: "Safety Risk Leadership Walks", description: "Regular leadership and site management walks throughout our operations, working with employees to identify and eradicate potential hazards." },
  { title: "Monthly CEO Message", description: "Monthly safety focus topic underpinning the Golden Safety Rules and reinforcing our focus on eliminating Class 1 Risks." },
  { title: "Speak Up Culture", description: "All employees have the right to refuse to complete a task if they are not trained, feel unsafe, or believe it places themselves or others at risk of harm." },
  { title: "Class 1 Risk Program", description: "Our framework to identify, understand controls and implement mitigation actions for significant Class 1 Risks in our business." },
  { title: "ICAM Incident Investigation", description: "Incident Cause Analysis Method (ICAM) incident investigation tool establishes root cause of an incident and implements corrective actions." },
  { title: "Training Programmes", description: "We invest significantly in training programmes to ensure the ongoing competency and safety of our employees." },
  { title: "Safety Monitoring", description: "Site safety dashboards monitor the safety performance of individual operational sites, enabling tracking against targets and pre-emptive corrective action." },
  { title: "Mobilization & Journey Management", description: "Stringent safety processes during mobilization or equipment and personnel transport ensure safety, security and on-time arrival for project start-up." },
  { title: "Drilling Equipment Standards", description: "Minimum safety and operational features for all rigs and equipment — brand new rigs may be modified to meet our high safety requirements." },
];

const Safety = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container>
        <div className={styles.introGrid}>
          <p className={styles.intro}>
            We provide full-service mining, drilling, maintenance and geochemical analysis solutions
            to customers within the minerals industry. At Amazon Mineworks we have an uncompromising
            commitment to the occupational health and safety of our employees and others where we
            work — across diverse, remote and often difficult locations.
          </p>
          <button type="button" className={styles.resourceLink}>
            <i className="bi bi-file-earmark-text" aria-hidden="true"></i>
            <span>Golden Safety Rules</span>
            <i className="bi bi-download" aria-hidden="true"></i>
          </button>
        </div>
      </Container>
    </section>

    <section className={styles.milestonesSection}>
      <Container>
        <SectionHeading eyebrow="Track Record" title="Lost Time Injury (LTI) Free Milestones" />
        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            <Reveal as="div" className={styles.milestoneCard} key={milestone.site} delay={index * 50}>
              <span className={styles.milestoneYears}>
                {milestone.years}
                <small>Yr{milestone.years !== "1" ? "s" : ""}</small>
              </span>
              <h3>{milestone.site}</h3>
              <p>{milestone.location} &middot; LTI-free since {milestone.date}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>

    <section className={styles.storySection}>
      <Container>
        <Reveal as="div" className={styles.storyBlock}>
          <div className={styles.storyImageFrame}>
            <img loading="lazy" src="./images/image3.jpeg" alt="Amazon Mineworks safety leadership" className={styles.storyImage} />
          </div>
          <div>
            <h2 className={styles.storyHeading}>Safety Leadership</h2>
            <p className={styles.storyText}>
              We have a genuine commitment to keeping our employees safe and to continually reduce
              their exposure to risk while performing their work. We expect visible safety leadership
              across all levels of our company and operations, from our Executive Leadership Team to
              our drill crews on site.
            </p>
            <p className={styles.storyText}>
              We also understand the importance our customers place on safe operations — free of
              incidents, hazards and near misses. Our clients can be confident that we will exceed
              the most stringent safety requirements, delivering safe and productive drilling
              solutions while diligently focusing on continuous improvement.
            </p>
          </div>
        </Reveal>

        <Reveal as="div" className={`${styles.storyBlock} ${styles.storyReverse}`} delay={80}>
          <div className={styles.storyImageFrame}>
            <img loading="lazy" src="./images/image4.jpeg" alt="Amazon Mineworks field team" className={styles.storyImage} />
          </div>
          <div>
            <h2 className={styles.storyHeading}>How We Keep Our People Safe</h2>
            <p className={styles.storyText}>
              We have numerous safety initiatives, training programs, policies and procedures designed
              to ensure all our employees have the knowledge to conduct their work safely and to
              address Class 1 Risks in our business.
            </p>
            <p className={styles.storyText}>
              Most importantly, we work with our employees to ensure they understand the controls to
              mitigate any risk and are empowered to act if they are unsafe in their workplace or
              identify an unsafe condition or behavior.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className={styles.initiativesSection}>
      <Container>
        <SectionHeading eyebrow="Our Programs" title="Safety Initiatives" />
        <div className={styles.initiativesGrid}>
          {initiatives.map((item, index) => (
            <Reveal as="div" className={styles.initiativeItem} key={item.title} delay={(index % 3) * 60}>
              <span className={styles.initiativeNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>

    <section className={styles.communitySection}>
      <Container className={styles.communityInner}>
        <SectionHeading
          eyebrow="Beyond the Site"
          title="Local Community Support"
          lede="We embrace our role in the communities where we work and recognize the impact our operations can have on local society. We strive to develop strong relationships with these communities and build sustainable value in local regions by providing a range of support to residents, local communities and charity organizations."
          className={styles.communityHeading}
        />
        <Reveal className={styles.communityImage} delay={80}>
          <img loading="lazy" src="./images/WhatsApp Image 2024-08-29 at 16.22.53.jpeg" alt="Amazon Mineworks community engagement" />
        </Reveal>
      </Container>
    </section>

    <SafetyCallout />
  </div>
);

export default Safety;
