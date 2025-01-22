import React from "react";
import styles from "./../styles/Partners.module.scss";

const Partners = () => (
  <section>
    <div className={`container ${styles.ListImages}`}>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/bhp.png"
            alt="BHP"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/BARRICK.png"
            alt="Barrick"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/preseus.png"
            alt="Preseus"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/peak.png"
            alt="Peak"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/shanta.png"
            alt="Shanta"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/blackRock.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/resources.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/armdale.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
                </div>
                <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/katoro.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
        </div>
      </div>
    </div>
    <hr />
  </section>
);

export default Partners;
