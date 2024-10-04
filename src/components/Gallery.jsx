import React, { useState, useEffect } from "react";
import styles from "./../styles/Gallery.module.scss";

const imageList = [
  {
    src: "./images/gallery1.jpeg",
    alt: "Mining operations showcase 1",
  },
  {
    src: "./images/gallery2.jpeg",
    alt: "Mining operations showcase 2",
  },
  {
    src: "./images/gallery3.jpeg",
    alt: "Mining operations showcase 3",
  },
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Gallery</h2>
      <p className={styles.description}>
        A visual journey into the heart of mining excellence
      </p>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          {imageList.map((image, index) => (
            <img
              key={index}
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
          {imageList.map((_, index) => (
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
