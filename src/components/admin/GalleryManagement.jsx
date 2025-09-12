import React, { useState, useEffect, useRef } from "react";
import databaseService from "../../services/realMySQLService";
import {
  compressImage,
  getImageFileSize,
  checkStorageQuota,
  estimateStorageUsage,
  clearOldData,
} from "../../utils/imageCompression";
import styles from "../../styles/GalleryManagement.module.scss";

const GalleryManagement = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [storageUsage, setStorageUsage] = useState(0);
  const fileInputRef = useRef(null);

  // Update storage usage
  const updateStorageUsage = () => {
    const usage = estimateStorageUsage();
    setStorageUsage(usage);
  };

  // Load existing gallery images on component mount
  useEffect(() => {
    const loadGallery = async () => {
      try {
        setLoading(true);
        const images = await databaseService.getGallery();
        setGalleryImages(images);
        setError(null);
        updateStorageUsage();
      } catch (err) {
        setError("Failed to load gallery images");
        console.error("Error loading gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  const handleFileUpload = async (files) => {
    setUploading(true);
    setError(null);

    // Check storage quota before processing
    if (!checkStorageQuota()) {
      setError(
        "Storage quota exceeded. Please clear some data or use smaller images."
      );
      setUploading(false);
      return;
    }

    // Clear old temporary data
    clearOldData();

    const newImages = [];
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length === 0) {
      setError("No valid image files selected");
      setUploading(false);
      return;
    }

    try {
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];

        try {
          // Compress the image
          const compressed = await compressImage(file, 1200, 800, 0.7);

          const newImage = {
            src: compressed.dataUrl,
            alt: file.name.replace(/\.[^/.]+$/, ""),
            originalSize: compressed.originalSize,
            compressedSize: compressed.compressedSize,
            dimensions: compressed.dimensions,
          };

          // Check if compressed image is still too large
          if (compressed.compressedSize > 2 * 1024 * 1024) {
            // 2MB limit
            setError(
              `Image "${file.name}" is too large even after compression. Please use a smaller image.`
            );
            setUploading(false);
            return;
          }

          const result = await databaseService.addGalleryImage(newImage);
          if (result.success) {
            newImages.push(result.image);
          } else {
            setError("Failed to save image to database");
            setUploading(false);
            return;
          }
        } catch (compressionError) {
          console.error("Error compressing image:", compressionError);
          setError(
            `Failed to process image "${file.name}". Please try a different image.`
          );
          setUploading(false);
          return;
        }
      }

      // Reload gallery data from database to ensure we have the latest
      setTimeout(async () => {
        try {
          const galleryData = await databaseService.getGallery();
          const validImages = Array.isArray(galleryData) ? galleryData : [];
          setGalleryImages(validImages);
          updateStorageUsage();
          setUploading(false);
        } catch (err) {
          setError("Failed to reload gallery");
          setUploading(false);
        }
      }, 1000); // Wait 1 second for uploads to complete
    } catch (err) {
      console.error("Error processing files:", err);
      setError("Failed to process files. Please try again.");
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFileUpload(files);
  };

  const deleteImage = async (id) => {
    try {
      setError(null);
      const result = await databaseService.deleteGalleryImage(id);

      if (result.success) {
        const updatedImages = galleryImages.filter((image) => image.id !== id);
        setGalleryImages(updatedImages);
        updateStorageUsage();
      } else {
        setError("Failed to delete image");
      }
    } catch (err) {
      setError("Database error while deleting image");
      console.error("Error deleting image:", err);
    }
  };

  const updateImageAlt = async (id, newAlt) => {
    try {
      setError(null);
      const result = await databaseService.updateGalleryImage(id, {
        alt: newAlt,
      });

      if (result.success) {
        const updatedImages = galleryImages.map((image) =>
          image.id === id ? result.image : image
        );
        setGalleryImages(updatedImages);
      } else {
        setError("Failed to update image");
      }
    } catch (err) {
      setError("Database error while updating image");
      console.error("Error updating image:", err);
    }
  };

  const reorderImages = async (fromIndex, toIndex) => {
    try {
      setError(null);
      const newImages = [...galleryImages];
      const [movedImage] = newImages.splice(fromIndex, 1);
      newImages.splice(toIndex, 0, movedImage);

      setGalleryImages(newImages);
      await databaseService.saveGallery(newImages);
    } catch (err) {
      setError("Failed to reorder images");
      console.error("Error reordering images:", err);
    }
  };

  const clearAllImages = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete all gallery images? This action cannot be undone."
      )
    ) {
      try {
        setError(null);
        setLoading(true);

        // Clear from database
        for (const image of galleryImages) {
          await databaseService.deleteGalleryImage(image.id);
        }

        setGalleryImages([]);
        updateStorageUsage();
      } catch (err) {
        setError("Failed to clear all images");
        console.error("Error clearing images:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.galleryManagement}>
      <div className={styles.header}>
        <h2>Gallery Management</h2>
        <p>Upload and manage gallery images for the carousel</p>

        <div className={styles.storageInfo}>
          <div className={styles.storageUsage}>
            <i className="bi bi-hdd"></i>
            <span>
              Storage Usage: {(storageUsage / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          <div className={styles.imageCount}>
            <i className="bi bi-images"></i>
            <span>{galleryImages.length} images</span>
          </div>
          {galleryImages.length > 0 && (
            <button
              className={styles.clearAllButton}
              onClick={clearAllImages}
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

      <div className={styles.uploadSection}>
        <div
          className={`${styles.uploadArea} ${dragOver ? styles.dragOver : ""}`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
        >
          <div className={styles.uploadContent}>
            <i className="bi bi-cloud-upload"></i>
            <h3>Drop images here or click to upload</h3>
            <p>Supports JPG, PNG, GIF, and other image formats</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileInput}
              className={styles.fileInput}
              disabled={uploading}
            />
            <button
              className={styles.uploadButton}
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Choose Files"}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div key={image.id} className={styles.imageCard}>
            <div className={styles.imageContainer}>
              <img src={image.src} alt={image.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteImage(image.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
                <div className={styles.reorderButtons}>
                  {index > 0 && (
                    <button
                      className={styles.reorderButton}
                      onClick={() => reorderImages(index, index - 1)}
                    >
                      <i className="bi bi-arrow-up"></i>
                    </button>
                  )}
                  {index < galleryImages.length - 1 && (
                    <button
                      className={styles.reorderButton}
                      onClick={() => reorderImages(index, index + 1)}
                    >
                      <i className="bi bi-arrow-down"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <input
                type="text"
                value={image.alt}
                onChange={(e) => updateImageAlt(image.id, e.target.value)}
                className={styles.imageAlt}
                placeholder="Image description"
              />
              <p className={styles.uploadDate}>
                Uploaded: {new Date(image.uploadedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {galleryImages.length === 0 && (
        <div className={styles.emptyState}>
          <i className="bi bi-image"></i>
          <h3>No images in gallery</h3>
          <p>Upload your first gallery image to get started</p>
        </div>
      )}
    </div>
  );
};

export default GalleryManagement;
