import React from "react";
import styles from "./../styles/SafetyInitiative.module.scss";

const SafetyInitiative = () => (
  <section className={styles.initiative}>
    <div className={`container ${styles.ListImages}`}>
      <div className="row">
        <div className="col-md-4 col-sm-6">
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
        <div className="col-md-4 col-sm-6">
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
        <div className="col-md-4 col-sm-6">
          <p className={styles.subText}>
            Safety Monitoring <br />
            Site safety dashboards monitor the safety performance of individual
            operational sites enabling tracking against targets, trend
            identification and implementation of pre-emptive corrective actions.
          </p>
          <p className={styles.subText}>
            Mobilization and Journey Management Safety During mobilization or
            other equipment and personnel transport, stringent safety processes
            ensure their safety, security and on-time arrival for project start
            up.
          </p>
          <p className={styles.subText}>
            Drilling Equipment Standards
            <br />
            Drilling Equipment Standards (DES), provide minimum safety and
            operational features for all rigs and equipment - brand new rigs may
            be modified to meet our high safety requirements.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Local Community Support</p>
        <p className={styles.subText}>
          We embrace our role in the communities where we work and recognize the
          impact our operations can have on local society. We strive to develop
          strong relationships with these communities and build sustainable
          value in local regions by providing a range of support to residents,
          local communities and charity organizations.
        </p>
      </div>
    </div>
    <div className={styles.downloadsPart}>
      <div className={styles.Rectangle}>
        <p className={styles.rectangleText}>
        <i className="bi bi-youtube"></i>
        </p>
      </div>
      <img
        loading="lazy"
        src="./images/background.jpeg"
        alt="Background"
        className={styles.image}
      />
    </div>
  </section>
);

export default SafetyInitiative;
