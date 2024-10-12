import React from "react";
import styles from "./../styles/Partners.module.scss";

const SafetyInitiative = () => (
  <section>
    <div className={`container ${styles.ListImages}`}>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <p className={styles.subText}>
            Golden Safety Rules <br /> Overarching guidelines for employee
            behavior to prevent harm to themselves or others in the workplace.
          </p>
          <p className={styles.subText}>
            Safety Risk Leadership Walks
            <br /> Regular leadership and site management walks throughout our
            operations, working with employees to identify and eradicate
            potential hazards .
          </p>
          <p className={styles.subText}>
            Monthly CEO Message
            <br /> Monthly safety focus topic underpinning the Golden Safety
            Rules and reinforcing our focus on eliminating Class 1 Risks.
          </p>
          <p className={styles.subText}>
            Speak Up Culture
            <br /> All employees have the right to refuse to complete a task if
            they are not trained, they feel unsafe, or they believe it places
            themselves or others at risk of harm.
          </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <p className={styles.subText}>
            Class 1 Risk Program
            <br />
            Our framework to identify, understand controls and implement
            mitigation actions for significant Class 1 Risks in our business.
          </p>
          <p className={styles.subText}>
            ICAM Incident Investigation <br />
            Incident Cause Analysis Method (ICAM) incident investigation tool
            establishes root cause of an incident and implements corrective
            actions.
          </p>
          <p className={styles.subText}>
            Training Programmes
            <br />
            We invest significantly in training programmes to ensure the ongoing
            competency and safety of our employees.
          </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/preseus.png"
            alt="Preseus"
            className={`img-fluid ${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/peak.png"
            alt="Peak"
            className={`img-fluid ${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/shanta.png"
            alt="Shanta"
            className={`img-fluid ${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/nile.jpg"
            alt="Nile"
            className={`img-fluid ${styles.LImage}`}
          />
        </div>
      </div>
    </div>
    <hr />
  </section>
);

export default SafetyInitiative;
