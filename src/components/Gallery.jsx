import React, { useState, useEffect } from "react";
import styles from "./../styles/Gallery.module.scss";

const imageList = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee71913f5e37c88fe65c268f562f3cfee87ce6370dfe741d5ab6984c910fbcaa?apiKey=69c943fd599c485fb32c02233b347491&",
    alt: "Mining operations showcase 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a6e8a4b3d7e8c63f8b1efc805e1c2c13c01fb858b8b6a92f37ba610c830b80c?apiKey=69c943fd599c485fb32c02233b347491&",
    alt: "Mining operations showcase 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7155ea3779f33b107ba2479f9f4e9cbaebf28d43df836fb81596e3e85db23453?apiKey=69c943fd599c485fb32c02233b347491&",
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
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
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
