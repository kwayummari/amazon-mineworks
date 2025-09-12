import React, { useState, useEffect } from "react";
import databaseService from "../services/realMySQLService";
import styles from "./../styles/Gallery.module.scss";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        setLoading(true);
        const images = await databaseService.getGalleryWithFallback();
        setGalleryImages(images);
      } catch (error) {
        console.error("Error loading gallery:", error);
        // Fallback to default images
        setGalleryImages([
          {
            id: 1,
            src: "./images/gallery1.jpeg",
            alt: "Mining operations showcase 1",
          },
          {
            id: 2,
            src: "./images/gallery2.jpeg",
            alt: "Mining operations showcase 2",
          },
          {
            id: 3,
            src: "./images/gallery3.jpeg",
            alt: "Mining operations showcase 3",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  useEffect(() => {
    if (galleryImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [galleryImages]);

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <section className={styles.gallery}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.description}>
          A visual journey into the heart of mining excellence
        </p>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>
            <i className="bi bi-arrow-clockwise"></i>
            <p>Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <section className={styles.gallery}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.description}>
          A visual journey into the heart of mining excellence
        </p>
        <div className={styles.emptyState}>
          <i className="bi bi-image"></i>
          <h3>No images in gallery</h3>
          <p>Images will appear here once uploaded</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Gallery</h2>
      <p className={styles.description}>
        A visual journey into the heart of mining excellence
      </p>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          {galleryImages.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`${styles.galleryImage} ${
                index === currentImageIndex ? styles.active : ""
              }`}
              loading="lazy"
            />
          ))}
        </div>
        <div className={styles.dots}>
          {galleryImages.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.activeDot : ""
              }`}
              onClick={() => selectImage(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
