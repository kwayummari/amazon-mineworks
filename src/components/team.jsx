// ManagementTeam.jsx
import React from "react";
import styles from "./../styles/ManagementTeam.module.scss";
import { managementTeamData } from "./../data/ManagementTeamData";

const ManagementTeam = () => {
  return (
    <section className={styles.managementTeam}>
      <div className={styles.container}>
        <h2 className={styles.title}>{managementTeamData.title}</h2>
        <p className={styles.description}>{managementTeamData.description}</p>
        <div className={styles.teamGrid}>
          {managementTeamData.teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;