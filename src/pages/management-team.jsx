import React from "react";
import { managementTeamData } from "../data/ManagementTeamData";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import styles from "../styles/ManagementTeam.module.scss";

const Team = () => (
  <div className={styles.page}>
    <section className={styles.opening}>
      <Container>
        <p className={styles.openingLabel}>Leadership</p>
        <h1 className={styles.openingTitle}>{managementTeamData.title}</h1>
        <p className={styles.openingLede}>{managementTeamData.description}</p>
      </Container>
    </section>

    <section className={styles.rosterSection}>
      <Container>
        <div className={styles.roster}>
          {managementTeamData.teamMembers.map((member, index) => (
            <Reveal as="div" className={styles.rosterRow} key={member.name} delay={index * 60}>
              <span className={styles.rosterNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.rosterPhoto}>
                <img loading="lazy" src={member.image} alt={member.name} />
              </div>
              <div className={styles.rosterIdentity}>
                <h3 className={styles.rosterName}>{member.name}</h3>
                <span className={styles.rosterRole}>{member.role}</span>
              </div>
              <p className={styles.rosterBio}>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

export default Team;
