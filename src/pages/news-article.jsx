import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import databaseService from "../services/realMySQLService";
import PageHero from "../components/PageHero";
import Container from "../components/ui/Container";
import styles from "../styles/NewsArticle.module.scss";

const shareTargets = [
  { key: "facebook", label: "Facebook", icon: "bi-facebook" },
  { key: "twitter", label: "Twitter", icon: "bi-twitter" },
  { key: "linkedin", label: "LinkedIn", icon: "bi-linkedin" },
  { key: "whatsapp", label: "WhatsApp", icon: "bi-whatsapp" },
  { key: "email", label: "Email", icon: "bi-envelope" },
];

const NewsArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const articleData = await databaseService.getNewsById(parseInt(id, 10));
        if (articleData && articleData.published) {
          setArticle(articleData);
        } else {
          setError("Article not found or not published");
        }
      } catch (err) {
        console.error("Error loading article:", err);
        setError("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    if (id) loadArticle();
  }, [id]);

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = article?.title || "";
    const text = article?.excerpt || "";

    const targets = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\nRead more: ${url}`)}`,
    };

    if (platform === "email") {
      window.location.href = targets.email;
    } else {
      window.open(targets[platform], "_blank");
    }
  };

  const tagsFor = (article) => {
    if (Array.isArray(article.tags)) return article.tags;
    if (typeof article.tags === "string") {
      try {
        return JSON.parse(article.tags);
      } catch {
        return [];
      }
    }
    return [];
  };

  if (loading) {
    return (
      <div className={styles.stateBlock}>
        <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
        <p>Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className={styles.stateBlock}>
        <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist or is not published.</p>
        <Link to="/news" className={styles.homeButton}>Back to News</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <PageHero title={article.title} kicker={article.category} />

      <Container narrow className={styles.body}>
        <div className={styles.meta}>
          <time>
            {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          {article.author && <span>{article.author}</span>}
        </div>

        {article.image && (
          <img src={article.image} alt={article.title} className={styles.heroImage} loading="lazy" />
        )}

        <div className={styles.content}>
          {article.content.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {tagsFor(article).length > 0 && (
          <div className={styles.tags}>
            {tagsFor(article).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <div className={styles.shareRow}>
          <span>Share this article:</span>
          <div className={styles.shareButtons}>
            {shareTargets.map((target) => (
              <button key={target.key} type="button" onClick={() => handleShare(target.key)} title={`Share on ${target.label}`}>
                <i className={`bi ${target.icon}`} aria-hidden="true"></i>
              </button>
            ))}
          </div>
        </div>

        <Link to="/news" className={styles.backLink}>
          <i className="bi bi-arrow-left" aria-hidden="true"></i>
          Back to News
        </Link>
      </Container>
    </div>
  );
};

export default NewsArticle;
