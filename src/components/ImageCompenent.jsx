import React from "react";
import styles from "./../styles/ImageComponent.module.scss";

function ImageComponent() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2853b880b35c3cc66083685d9403279c787cafdbf5f893216a7d28dc6b6abb?apiKey=69c943fd599c485fb32c02233b347491&"
      className={styles.image}
      alt="Description of the image"
    />
  );
}

export default ImageComponent;