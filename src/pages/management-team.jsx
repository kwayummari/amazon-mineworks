import React from "react";
import { managementTeamData } from "../data/ManagementTeamData";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import styles from "../styles/ManagementTeam.module.scss";

const Team = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container>
        <SectionHeading eyebrow="Leadership" title={managementTeamData.title} lede={managementTeamData.description} />
      </Container>
    </section>

    <section className={styles.teamSection}>
      <Container>
        <div className={styles.teamGrid}>
          {managementTeamData.teamMembers.map((member, index) => (
            <Reveal as="div" className={styles.member} key={member.name} delay={index * 60}>
              <img loading="lazy" src={member.image} alt={member.name} className={styles.photo} />
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

export default Team;
