import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import databaseService from "../services/realMySQLService";
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
        // Only show published news, sorted by date (newest first)
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

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <i className="bi bi-exclamation-triangle"></i>
          <h2>Error Loading News</h2>
          <p>{error}</p>
          <Link to="/" className={styles.homeButton}>
            <i className="bi bi-house"></i>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.newsListing}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <i className="bi bi-chevron-right"></i>
            <span className={styles.breadcrumbCurrent}>News</span>
          </nav>

          <h1 className={styles.pageTitle}>Latest News</h1>
          <p className={styles.pageDescription}>
            Stay updated with the latest developments and achievements at Amazon
            Mineworks
          </p>
        </header>

        {/* News Grid */}
        {news.length > 0 ? (
          <div className={styles.newsGrid}>
            {news.map((article) => (
              <article key={article.id} className={styles.newsCard}>
                <div className={styles.newsImageContainer}>
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className={styles.newsImage}
                    />
                  ) : (
                    <div className={styles.noImage}>
                      <i className="bi bi-image"></i>
                    </div>
                  )}
                  {article.category && (
                    <div className={styles.categoryBadge}>
                      {article.category}
                    </div>
                  )}
                </div>

                <div className={styles.newsContent}>
                  <div className={styles.newsMeta}>
                    <time className={styles.newsDate}>
                      <i className="bi bi-calendar"></i>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {article.author && (
                      <span className={styles.newsAuthor}>
                        <i className="bi bi-person"></i>
                        {article.author}
                      </span>
                    )}
                  </div>

                  <h2 className={styles.newsTitle}>
                    <Link
                      to={`/news/${article.id}`}
                      className={styles.newsTitleLink}
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className={styles.newsExcerpt}>{article.excerpt}</p>

                  {article.tags && article.tags.length > 0 && (
                    <div className={styles.newsTags}>
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    to={`/news/${article.id}`}
                    className={styles.readMoreButton}
                  >
                    Read More
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <i className="bi bi-newspaper"></i>
            <h3>No News Available</h3>
            <p>Check back later for the latest updates from Amazon Mineworks</p>
            <Link to="/" className={styles.homeButton}>
              <i className="bi bi-house"></i>
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsListing;
