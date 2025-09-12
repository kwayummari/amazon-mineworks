import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import databaseService from "../services/realMySQLService";
import styles from "../styles/NewsArticle.module.scss";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const articleData = await databaseService.getNewsById(parseInt(id));

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

    if (id) {
      loadArticle();
    }
  }, [id]);

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = article?.title || "";
    const text = article?.excerpt || "";

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
          "_blank"
        );
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(`${text}\n\nRead more: ${url}`)}`;
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          alert("Link copied to clipboard!");
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement("textarea");
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert("Link copied to clipboard!");
        }
        break;
      default:
        break;
    }
  };

  const formatContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className={styles.contentParagraph}>
        {paragraph}
      </p>
    ));
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <i className="bi bi-exclamation-triangle"></i>
          <h2>Article Not Found</h2>
          <p>
            The article you're looking for doesn't exist or is not published.
          </p>
          <Link to="/" className={styles.homeButton}>
            <i className="bi bi-house"></i>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.newsArticle}>
      <div className={styles.articleContainer}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <i className="bi bi-chevron-right"></i>
          <Link to="/news" className={styles.breadcrumbLink}>
            News
          </Link>
          <i className="bi bi-chevron-right"></i>
          <span className={styles.breadcrumbCurrent}>{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <div className={styles.articleDate}>
              <i className="bi bi-calendar"></i>
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {article.category && (
              <div className={styles.articleCategory}>
                <i className="bi bi-tag"></i>
                <span>{article.category}</span>
              </div>
            )}
            {article.author && (
              <div className={styles.articleAuthor}>
                <i className="bi bi-person"></i>
                <span>{article.author}</span>
              </div>
            )}
          </div>

          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleExcerpt}>{article.excerpt}</p>
        </header>

        {/* Article Image */}
        {article.image && (
          <div className={styles.articleImageContainer}>
            <img
              src={article.image}
              alt={article.title}
              className={styles.articleImage}
            />
          </div>
        )}

        {/* Article Content */}
        <div className={styles.articleContent}>
          {formatContent(article.content)}
        </div>

        {/* Tags */}
        {(() => {
          const tags = Array.isArray(article.tags)
            ? article.tags
            : typeof article.tags === "string"
            ? JSON.parse(article.tags)
            : [];
          return (
            tags &&
            tags.length > 0 && (
              <div className={styles.articleTags}>
                <h4>Tags:</h4>
                <div className={styles.tagsList}>
                  {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          );
        })()}

        {/* Share Section */}
        <div className={styles.shareSection}>
          <h4>Share this article:</h4>
          <div className={styles.shareButtons}>
            <button
              className={`${styles.shareButton} ${styles.facebook}`}
              onClick={() => handleShare("facebook")}
              title="Share on Facebook"
            >
              <i className="bi bi-facebook"></i>
              Facebook
            </button>
            <button
              className={`${styles.shareButton} ${styles.twitter}`}
              onClick={() => handleShare("twitter")}
              title="Share on Twitter"
            >
              <i className="bi bi-twitter"></i>
              Twitter
            </button>
            <button
              className={`${styles.shareButton} ${styles.linkedin}`}
              onClick={() => handleShare("linkedin")}
              title="Share on LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
              LinkedIn
            </button>
            <button
              className={`${styles.shareButton} ${styles.whatsapp}`}
              onClick={() => handleShare("whatsapp")}
              title="Share on WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
              WhatsApp
            </button>
            <button
              className={`${styles.shareButton} ${styles.email}`}
              onClick={() => handleShare("email")}
              title="Share via Email"
            >
              <i className="bi bi-envelope"></i>
              Email
            </button>
            <button
              className={`${styles.shareButton} ${styles.copy}`}
              onClick={() => handleShare("copy")}
              title="Copy Link"
            >
              <i className="bi bi-link-45deg"></i>
              Copy Link
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.articleNavigation}>
          <Link to="/news" className={styles.backButton}>
            <i className="bi bi-arrow-left"></i>
            Back to News
          </Link>
          <Link to="/" className={styles.homeButton}>
            <i className="bi bi-house"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
