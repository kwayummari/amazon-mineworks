import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Service";
import OperationsTeaser from "../components/OperationsTeaser";
import SafetyValues from "../components/SafetyValues";
import styles from "../styles/LandingPage.module.scss";

const LandingPage = () => (
  <div className={styles.landingPage}>
    <Hero />
    <About />
    <Services />
    <OperationsTeaser />
    <SafetyValues />
  </div>
);

export default LandingPage;
