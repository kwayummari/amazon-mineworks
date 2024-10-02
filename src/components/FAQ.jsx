import React from 'react';
import styles from "./../styles/FAQ.module.scss";

const FAQItem = ({ question, icon }) => (
  <details className={styles.faqItem}>
    <summary className={styles.faqQuestion}>
      {question}
      <img loading="lazy" src={icon} alt="Toggle FAQ" className={styles.faqIcon} />
    </summary>
    <p className={styles.faqAnswer}>Answer to the question goes here.</p>
  </details>
);

const FAQ = () => (
  <section className={styles.faqSection}>
    <h2 className={styles.sectionTitle}>FAQ</h2>
    <p className={styles.sectionDescription}>Find answers to common inquiries</p>
    <div className={styles.faqList}>
      <FAQItem
        question="What sets Amazon mineworks apart in mining industry?"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc8e0911fb7e94c2a3e08d9c3dce5a4dc897b00f03c03606bd266a9c8dad7bc?apiKey=69c943fd599c485fb32c02233b347491&"
      />
      <FAQItem
        question="Can you provide more information on types of road you specialize in?"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ddd822b3e58c2f0212b1da8d2713781eecd171fd491b8a03e2e28801484686?apiKey=69c943fd599c485fb32c02233b347491&"
      />
      <FAQItem
        question="How does Amazon mineworks prioritize environmental sustainability?"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b788f5bc51f22dc0dbd24eade7b0fe9ee8908ef39941a2a25e6a8e02c93442?apiKey=69c943fd599c485fb32c02233b347491&"
      />
      <FAQItem
        question="What career opportunities are available at , and how can I apply?"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d52368490bba539dcbacddfe3dea10f17de97d27ba404655ededbdf77694f791?apiKey=69c943fd599c485fb32c02233b347491&"
      />
      <FAQItem
        question="Elaborate on Amazon mineworks commitment to safety standard & practices?"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7476fe106b3bcef9101232adfa46c2e17ca8d99b7767b7a126bf8859873b973c?apiKey=69c943fd599c485fb32c02233b347491&"
      />
    </div>
  </section>
);

export default FAQ;