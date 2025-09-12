import React, { useState, useEffect, useRef } from "react";
import databaseService from "../../services/realMySQLService";
import {
  compressImage,
  getImageFileSize,
  checkStorageQuota,
  estimateStorageUsage,
  clearOldData,
} from "../../utils/imageCompression";
import styles from "../../styles/NewsManagement.module.scss";

const NewsManagement = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [storageUsage, setStorageUsage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const fileInputRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    author: "",
    published: true,
    image: null,
  });

  // Update storage usage
  const updateStorageUsage = () => {
    const usage = estimateStorageUsage();
    setStorageUsage(usage);
  };

  // Load existing news on component mount
  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const newsData = await databaseService.getNews();
        setNews(newsData);
        setError(null);
        updateStorageUsage();
      } catch (err) {
        setError("Failed to load news articles");
        console.error("Error loading news:", err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async (file) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file");
      return null;
    }

    try {
      // Check storage quota before processing
      if (!checkStorageQuota()) {
        setError(
          "Storage quota exceeded. Please clear some data or use smaller images."
        );
        return null;
      }

      // Compress the image
      const compressed = await compressImage(file, 1200, 800, 0.7);

      // Check if compressed image is still too large
      if (compressed.compressedSize > 2 * 1024 * 1024) {
        setError(
          `Image "${file.name}" is too large even after compression. Please use a smaller image.`
        );
        return null;
      }

      return compressed.dataUrl;
    } catch (compressionError) {
      console.error("Error compressing image:", compressionError);
      setError(
        `Failed to process image "${file.name}". Please try a different image.`
      );
      return null;
    }
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const compressedImage = await handleImageUpload(file);
      if (compressedImage) {
        setFormData((prev) => ({ ...prev, image: compressedImage }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const articleData = {
        ...formData,
        date: new Date().toISOString().split("T")[0],
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      };

      if (editingArticle) {
        // Update existing article
        const result = await databaseService.updateNews(
          editingArticle.id,
          articleData
        );
        if (result.success) {
          // Reload news data from database to ensure we have the latest
          const newsData = await databaseService.getNews();
          setNews(newsData);
          setEditingArticle(null);
        } else {
          setError("Failed to update article");
        }
      } else {
        // Add new article
        const result = await databaseService.addNews(articleData);
        if (result.success) {
          // Reload news data from database to ensure we have the latest
          const newsData = await databaseService.getNews();
          setNews(newsData);
        } else {
          setError("Failed to add article");
        }
      }

      // Reset form
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        tags: "",
        author: "",
        published: true,
        image: null,
      });
      setShowForm(false);
      updateStorageUsage();
    } catch (err) {
      setError("Database error while saving article");
      console.error("Error saving article:", err);
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      tags: Array.isArray(article.tags)
        ? article.tags.join(", ")
        : typeof article.tags === "string"
        ? JSON.parse(article.tags).join(", ")
        : "",
      author: article.author,
      published: article.published,
      image: article.image,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this article? This action cannot be undone."
      )
    ) {
      try {
        setError(null);
        const result = await databaseService.deleteNews(id);
        if (result.success) {
          // Reload news data from database to ensure we have the latest
          const newsData = await databaseService.getNews();
          setNews(newsData);
          updateStorageUsage();
        } else {
          setError("Failed to delete article");
        }
      } catch (err) {
        setError("Database error while deleting article");
        console.error("Error deleting article:", err);
      }
    }
  };

  const togglePublishStatus = async (id, currentStatus) => {
    try {
      setError(null);
      const result = await databaseService.updateNews(id, {
        published: !currentStatus,
      });
      if (result.success) {
        const updatedNews = news.map((article) =>
          article.id === id ? result.article : article
        );
        setNews(updatedNews);
      } else {
        setError("Failed to update article status");
      }
    } catch (err) {
      setError("Database error while updating article status");
      console.error("Error updating article status:", err);
    }
  };

  const clearAllNews = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete all news articles? This action cannot be undone."
      )
    ) {
      try {
        setError(null);
        setLoading(true);

        // Clear from database
        for (const article of news) {
          await databaseService.deleteNews(article.id);
        }

        setNews([]);
        updateStorageUsage();
      } catch (err) {
        setError("Failed to clear all articles");
        console.error("Error clearing articles:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetToDefault = async () => {
    if (
      window.confirm(
        "Are you sure you want to reset to default news articles? This will replace all current articles."
      )
    ) {
      try {
        setError(null);
        setLoading(true);

        await databaseService.resetNewsToDefault();
        const newsData = await databaseService.getNews();
        setNews(newsData);
        updateStorageUsage();
      } catch (err) {
        setError("Failed to reset to default articles");
        console.error("Error resetting articles:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const debugStorage = async () => {
    await databaseService.debugNewsData();
    alert("Check browser console (F12) for storage debug info");
  };

  const forceInitialize = async () => {
    try {
      setError(null);
      setLoading(true);

      await databaseService.forceInitializeNews();
      const newsData = await databaseService.getNews();
      setNews(newsData);
      updateStorageUsage();
    } catch (err) {
      setError("Failed to force initialize");
      console.error("Error force initializing:", err);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className={styles.newsManagement}>
      <div className={styles.header}>
        <h2>News Management</h2>
        <p>Create and manage news articles for your website</p>

        <div className={styles.storageInfo}>
          <div className={styles.storageUsage}>
            <i className="bi bi-hdd"></i>
            <span>
              Storage Usage: {(storageUsage / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          <div className={styles.articleCount}>
            <i className="bi bi-newspaper"></i>
            <span>{news.length} articles</span>
          </div>
          <button
            className={styles.resetButton}
            onClick={resetToDefault}
            disabled={loading}
          >
            <i className="bi bi-arrow-clockwise"></i>
            Reset to Default
          </button>
          {news.length > 0 && (
            <button
              className={styles.clearAllButton}
              onClick={clearAllNews}
              disabled={loading}
            >
              <i className="bi bi-trash"></i>
              Clear All
            </button>
          )}
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <i className="bi bi-exclamation-triangle"></i>
            {error}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button
          className={styles.addButton}
          onClick={() => {
            setShowForm(true);
            setEditingArticle(null);
            setFormData({
              title: "",
              excerpt: "",
              content: "",
              category: "",
              tags: "",
              author: "",
              published: true,
              image: null,
            });
          }}
        >
          <i className="bi bi-plus"></i>
          Add New Article
        </button>
      </div>

      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h3>{editingArticle ? "Edit Article" : "Add New Article"}</h3>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setShowForm(false);
                  setEditingArticle(null);
                }}
              >
                <i className="bi bi-x"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.articleForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="title">Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="excerpt">Excerpt *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className={styles.formTextarea}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="content">Content *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows="8"
                  className={styles.formTextarea}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="tags">Tags (comma-separated)</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="mining, production, safety"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="image">Featured Image</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileInput}
                  className={styles.fileInput}
                />
                {formData.image && (
                  <div className={styles.imagePreview}>
                    <img src={formData.image} alt="Preview" />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, image: null }))
                      }
                      className={styles.removeImageButton}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                  />
                  Published
                </label>
              </div>

              <div className={styles.formActions}>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.saveButton}>
                  {editingArticle ? "Update Article" : "Create Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.articlesGrid}>
        {news.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <div className={styles.articleImage}>
              {article.image ? (
                <img src={article.image} alt={article.title} />
              ) : (
                <div className={styles.noImage}>
                  <i className="bi bi-image"></i>
                </div>
              )}
              <div className={styles.articleStatus}>
                <span
                  className={`${styles.statusBadge} ${
                    article.published ? styles.published : styles.draft
                  }`}
                >
                  {article.published ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>
                  <i className="bi bi-calendar"></i>
                  {new Date(article.date).toLocaleDateString()}
                </span>
                <span className={styles.articleCategory}>
                  <i className="bi bi-tag"></i>
                  {article.category || "Uncategorized"}
                </span>
              </div>

              <div className={styles.articleActions}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(article)}
                >
                  <i className="bi bi-pencil"></i>
                  Edit
                </button>
                <button
                  className={`${styles.publishButton} ${
                    article.published ? styles.unpublish : styles.publish
                  }`}
                  onClick={() =>
                    togglePublishStatus(article.id, article.published)
                  }
                >
                  <i
                    className={`bi ${
                      article.published ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                  {article.published ? "Unpublish" : "Publish"}
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(article.id)}
                >
                  <i className="bi bi-trash"></i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {news.length === 0 && (
        <div className={styles.emptyState}>
          <i className="bi bi-newspaper"></i>
          <h3>No articles yet</h3>
          <p>Create your first news article to get started</p>
        </div>
      )}
    </div>
  );
};

export default NewsManagement;
