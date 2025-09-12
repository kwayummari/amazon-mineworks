import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blogPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Blog & News</h1>
          <p className={styles.heroDescription}>
            Stay updated with the latest news, insights, and developments in
            mining and drilling industry.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.blogContent}>
          <div className={styles.blogIntro}>
            <h2>Latest Articles</h2>
            <p>
              Explore our collection of articles covering industry trends,
              technical insights, and company updates.
            </p>
          </div>

          <div className={styles.newsSection}>
            <h3>Recent News</h3>
            <p>
              For the latest news articles, please visit our{" "}
              <Link to="/news" className={styles.newsLink}>
                News Section
              </Link>
              .
            </p>
          </div>

          <div className={styles.categoriesSection}>
            <h3>Article Categories</h3>
            <div className={styles.categoriesGrid}>
              <div className={styles.categoryCard}>
                <h4>Industry Insights</h4>
                <p>
                  Analysis of mining industry trends and market developments.
                </p>
              </div>
              <div className={styles.categoryCard}>
                <h4>Technical Articles</h4>
                <p>
                  In-depth technical content about drilling and mining
                  operations.
                </p>
              </div>
              <div className={styles.categoryCard}>
                <h4>Safety & Environment</h4>
                <p>
                  Best practices and innovations in safety and environmental
                  management.
                </p>
              </div>
              <div className={styles.categoryCard}>
                <h4>Company Updates</h4>
                <p>Latest news and announcements from Amazon Mineworks.</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Stay Connected</h2>
              <p>
                Subscribe to our newsletter to receive the latest updates and
                insights.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                />
                <button className={styles.subscribeBtn}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
