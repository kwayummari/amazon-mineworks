import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import databaseService from "../services/realMySQLService";
import styles from "./../styles/News.module.scss";

const NewsItem = ({ id, image, date, title, excerpt, onShare }) => (
  <article className={styles.newsItem}>
    <img loading="lazy" src={image} alt={title} className={styles.newsImage} />
    <time className={styles.newsDate}>
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
    <h3 className={styles.newsTitle}>{title}</h3>
    <p className={styles.newsExcerpt}>{excerpt}</p>
    <div className={styles.newsActions}>
      <Link to={`/news/${id}`} className={styles.readMore}>
        Read More
      </Link>
      <button
        className={styles.shareButton}
        onClick={() => onShare(id, title)}
        title="Share this article"
      >
        <i className="bi bi-share"></i>
      </button>
    </div>
  </article>
);

const News = () => {
  const newsGridRef = useRef(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const newsData = await databaseService.getNewsWithFallback();
        // Only show published news
        const publishedNews = newsData.filter((article) => article.published);
        setNews(publishedNews);
      } catch (error) {
        console.error("Error loading news:", error);
        // Fallback to default news
        setNews([
          {
            id: 1,
            title:
              "Amazon mineworks Achieve Record Production in Coal Mining Operation",
            excerpt:
              "In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining operation, showcasing our commitment to excellence and innovation in the mining industry.",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/ce6e4b44044693eb5d629abd34568a394467dff86a5939c37905fcce65ed449c?apiKey=69c943fd599c485fb32c02233b347491&",
            date: "2023-12-28",
          },
          {
            id: 2,
            title:
              "Global Expansion: DEF Resources secure Mining Rights in New Territory",
            excerpt:
              "In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining operation, showcasing our commitment to excellence and innovation in the mining industry.",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/4af0a96aa13996746e8ab9e61e55b1d90e17a9f47cd672f096b348d2d8e2a7ad?apiKey=69c943fd599c485fb32c02233b347491&",
            date: "2023-12-13",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const scrollInterval = 2000;
      const scrollAmount = 300;

      const scrollNewsGrid = () => {
        if (newsGridRef.current) {
          if (
            newsGridRef.current.scrollLeft + newsGridRef.current.offsetWidth >=
            newsGridRef.current.scrollWidth
          ) {
            newsGridRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            newsGridRef.current.scrollBy({
              left: scrollAmount,
              behavior: "smooth",
            });
          }
        }
      };
      const intervalId = setInterval(scrollNewsGrid, scrollInterval);
      return () => clearInterval(intervalId);
    }
  }, [news]);

  const handleShare = async (id, title) => {
    const url = `${window.location.origin}/news/${id}`;
    const text = `Check out this article: ${title}`;

    if (navigator.share) {
      // Use native share API if available
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${text}\n${url}`);
        alert("Article link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        // Final fallback: show the URL
        alert(`Share this article:\n${text}\n${url}`);
      }
    }
  };

  if (loading) {
    return (
      <section className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>News</h2>
        <p className={styles.sectionDescription}>
          Find the newest information of our company
        </p>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>
            <i className="bi bi-arrow-clockwise"></i>
            <p>Loading news...</p>
          </div>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>News</h2>
        <p className={styles.sectionDescription}>
          Find the newest information of our company
        </p>
        <div className={styles.emptyState}>
          <i className="bi bi-newspaper"></i>
          <h3>No news available</h3>
          <p>Check back later for the latest updates</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>News</h2>
      <p className={styles.sectionDescription}>
        Find the newest information of our company
      </p>
      <div className={styles.newsGrid} ref={newsGridRef}>
        {news.map((article) => (
          <NewsItem
            key={article.id}
            id={article.id}
            image={article.image}
            date={article.date}
            title={article.title}
            excerpt={article.excerpt}
            onShare={handleShare}
          />
        ))}
      </div>
      <div className={styles.readAllNews}>
        <Link to="/news" className={styles.readAllLink}>
          Read all news
        </Link>
        <i className="bi bi-arrow-right" />
      </div>
    </section>
  );
};

export default News;
