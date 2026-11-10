import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import databaseService from "../services/realMySQLService";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import styles from "../styles/NewsListing.module.scss";

const NewsListing = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const newsData = await databaseService.getNewsWithFallback();
        const publishedNews = newsData
          .filter((article) => article.published)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setNews(publishedNews);
      } catch (err) {
        console.error("Error loading news:", err);
        setError("Failed to load news articles");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.introSection}>
        <Container>
          <SectionHeading
            eyebrow="Newsroom"
            title="Latest News"
            lede="Stay updated with the latest developments and achievements at Amazon Mineworks."
          />
        </Container>
      </section>

      <section className={styles.listSection}>
        <Container>
          {loading && (
            <div className={styles.stateBlock}>
              <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
              <p>Loading news...</p>
            </div>
          )}

          {error && (
            <div className={styles.stateBlock}>
              <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
              <h3>Error Loading News</h3>
              <p>{error}</p>
              <Link to="/" className={styles.homeButton}>Back to Home</Link>
            </div>
          )}

          {!loading && !error && news.length === 0 && (
            <div className={styles.stateBlock}>
              <i className="bi bi-newspaper" aria-hidden="true"></i>
              <h3>No News Available</h3>
              <p>Check back later for the latest updates from Amazon Mineworks.</p>
              <Link to="/" className={styles.homeButton}>Back to Home</Link>
            </div>
          )}

          {!loading && !error && news.length > 0 && (
            <div className={styles.grid}>
              {news.map((article) => (
                <article className={styles.card} key={article.id}>
                  <Link to={`/news/${article.id}`} className={styles.imageLink}>
                    {article.image ? (
                      <img src={article.image} alt={article.title} loading="lazy" />
                    ) : (
                      <div className={styles.noImage}>
                        <i className="bi bi-image" aria-hidden="true"></i>
                      </div>
                    )}
                    {article.category && <span className={styles.badge}>{article.category}</span>}
                  </Link>
                  <div className={styles.cardBody}>
                    <div className={styles.meta}>
                      <time>
                        {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </time>
                      {article.author && <span>{article.author}</span>}
                    </div>
                    <h2 className={styles.title}>
                      <Link to={`/news/${article.id}`}>{article.title}</Link>
                    </h2>
                    <p className={styles.excerpt}>{article.excerpt}</p>
                    <Link to={`/news/${article.id}`} className={styles.readMore}>
                      Read More <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default NewsListing;
