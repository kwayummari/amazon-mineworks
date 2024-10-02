import React from "react";
import styles from "./../styles/Gallery.module.scss";

const Gallery = () => (
  <section className={styles.gallery}>
    <h2 className={styles.title}>Gallery</h2>
    <p className={styles.description}>
      A visual journey into the heart of mining excellence
    </p>
    <div className={styles.imageContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee71913f5e37c88fe65c268f562f3cfee87ce6370dfe741d5ab6984c910fbcaa?apiKey=69c943fd599c485fb32c02233b347491&"
        alt="Mining operations showcase"
        className={styles.galleryImage}
      />
    </div>
    {/* <span className={styles.imageDot}>.</span> */}
    <span className={styles.imageEllipsis}>...</span>
  </section>
);

export default Gallery;
