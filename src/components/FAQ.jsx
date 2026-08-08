import React from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import styles from "./../styles/FAQ.module.scss";

const faqs = [
  {
    question: "What sets Amazon Mineworks apart in the mining industry?",
    answer:
      "We're a fully integrated contractor — drilling, mining and construction under one roof — operating across Tanzania since 2012, and trusted by mining houses including Barrick, BHP and Shanta Gold.",
  },
  {
    question: "What types of road construction do you specialize in?",
    answer:
      "End-to-end road construction: planning and site preparation, earthwork, sub-base and base course construction, and pavement — built to support heavy mine-site traffic.",
  },
  {
    question: "How does Amazon Mineworks approach environmental sustainability?",
    answer:
      "Sustainability is one of our six core values. Our operations are ISO 14001 certified for environmental management, and every project includes rehabilitation and environmental monitoring programs.",
  },
  {
    question: "What career opportunities are available, and how can I apply?",
    answer:
      "Open roles are listed on our Careers page with a downloadable job description for each. Applications are reviewed on a rolling basis as positions open across our Tanzania operations.",
  },
  {
    question: "What is Amazon Mineworks' commitment to safety?",
    answer:
      "Safety is our first value, not a policy addendum. We're ISO 45001 certified, and our Tanzania operations recorded zero lost-time injuries in 2024 under a continuous training and hazard-monitoring program.",
  },
];

const FAQItem = ({ question, answer }) => (
  <details className={styles.faqItem}>
    <summary className={styles.faqQuestion}>
      {question}
      <i className="bi bi-plus-lg" aria-hidden="true"></i>
    </summary>
    <p className={styles.faqAnswer}>{answer}</p>
  </details>
);

const FAQ = () => (
  <section className={styles.faqSection}>
    <Container narrow>
      <SectionHeading align="center" eyebrow="Got Questions?" title="Frequently Asked Questions" />
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </Container>
  </section>
);

export default FAQ;
