import React from "react";
import styles from "./../styles/Partners.module.scss";

const Partners = () => (
  <section>
    <div className={`container ${styles.ListImages}`}>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/bhp.png"
            alt="BHP"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/BARRICK.png"
            alt="Barrick"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/preseus.png"
            alt="Preseus"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/peak.png"
            alt="Peak"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/shanta.png"
            alt="Shanta"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/blackRock.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/resources.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/armdale.png"
            alt="Nile"
            className={`${styles.LImage}`}
          />
                </div>
                <div className="col-md-3 col-sm-6">
          <img
            loading="lazy"
            src="./images/partners/katoro.png"
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
