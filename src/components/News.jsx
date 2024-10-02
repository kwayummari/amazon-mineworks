import React from 'react';
import styles from "./../styles/News.module.scss";

const NewsItem = ({ image, date, title, excerpt }) => (
  <article className={styles.newsItem}>
    <img loading="lazy" src={image} alt={title} className={styles.newsImage} />
    <time className={styles.newsDate}>{date}</time>
    <h3 className={styles.newsTitle}>{title}</h3>
    <p className={styles.newsExcerpt}>{excerpt}</p>
    <a href="#" className={styles.readMore}>Read More</a>
  </article>
);

const News = () => (
  <section className={styles.newsSection}>
    <h2 className={styles.sectionTitle}>News</h2>
    <p className={styles.sectionDescription}>Find the newest information of our company</p>
    <div className={styles.newsGrid}>
      <NewsItem
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/ce6e4b44044693eb5d629abd34568a394467dff86a5939c37905fcce65ed449c?apiKey=69c943fd599c485fb32c02233b347491&"
        date="28 December 2023"
        title="Amazon mineworks Achieve Record Production in Coal Mining Operation"
        excerpt="In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining ..."
      />
      <NewsItem
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/4af0a96aa13996746e8ab9e61e55b1d90e17a9f47cd672f096b348d2d8e2a7ad?apiKey=69c943fd599c485fb32c02233b347491&"
        date="13 December 2023"
        title="Global Expansion: DEF Resources secure Mining Rights in New Territory"
        excerpt="In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining ..."
      />
      <NewsItem
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/16ae8009bbea0b0e75eab534251e484748af14412e00ac789794736cbc5dc841?apiKey=69c943fd599c485fb32c02233b347491&"
        date="28 December 2023"
        title="Amazon mineworks Achieve Record Production in Coal Mining Operation"
        excerpt="In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining ..."
      />
    </div>
    <div className={styles.readAllNews}>
      <a href="#" className={styles.readAllLink}>Read all news</a>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9230d1d8f8091386fb4fe21cecaa223a9bce8433817b7a72d78e28044735c391?apiKey=69c943fd599c485fb32c02233b347491&" alt="Arrow icon" className={styles.arrowIcon} />
    </div>
  </section>
);

export default News;