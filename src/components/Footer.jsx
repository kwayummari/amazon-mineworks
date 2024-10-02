import React from 'react';
import styles from "./../styles/Footer.module.scss";

function Footer() {
  const footerSections = [
    {
      title: 'ABOUT COMPANY',
      items: ['Subsidiary Overview', 'Organization structure', 'Vision and Mission', 'Management', 'Gallery']
    },
    {
      title: 'COMMODITY',
      items: ['Our Resources', 'Specification Details', 'Portfolio', 'Mining Operations', 'Extracted Resources']
    },
    {
      title: 'INVESTORS',
      items: ['Investors Relations', 'Finance Report', 'Stock Information', 'Event and Presentation']
    },
    {
      title: 'OTHERS',
      items: ['Partnership', 'Industry Insights', 'Legal and Compliance', 'Corporate Events']
    },
    {
      title: 'MEDIA',
      items: ['Our Resources', 'Specification Details', 'Portfolio', 'Mining Operations', 'Extracted Resources']
    },
    {
      title: 'LEGAL',
      items: ['Documentation', 'Compliance Document', 'Permits and Authorization', 'Regulatory Filings']
    }
  ];

  return (
    <footer className={styles.footer}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2853b880b35c3cc66083685d9403279c787cafdbf5f893216a7d28dc6b6abb?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="Footer banner" className={styles.footerBanner} />
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/03fe40c5938eaa9db6f9ecaae69d2c1d7c6269b20162b94395d0d39335108a08?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="Amazon Mineworks logo" className={styles.footerLogo} />
          <p className={styles.footerSlogan}>We are professionals for building constructions</p>
          <div className={styles.socialIcons}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/992c4ae50cd2f45356cb39d0d8783b847da0b199d926d9472dd30576114c1b6d?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="Social icon" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61bbdb2011b456368c2448a2f8fe82119c47b3e35f7282a37ce15ec72f96001?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="Social icon" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81b96b36181b99f7ba733f137c280fc43ae6ebb184f990644520c739fdb6c44?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="Social icon" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e22e85e73691fa01445088dc4cbf2d200153ed1db22104d22031b0913b1e4b49?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="Social icon" className={styles.socialIcon} />
          </div>
        </div>
        <div className={styles.footerLinks}>
          {footerSections.map((section, index) => (
            <div key={index} className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>{section.title}</h3>
              <ul className={styles.footerSectionList}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}><a href="#" className={styles.footerLink}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>Copyright Amazon mineworks. All rights Reserved.</p>
          <p className={styles.designCredit}>Website designed by <span className={styles.designerName}>Aurorawave labs</span></p>
        </div>
        <div className={styles.latestNews}>
          <h3 className={styles.latestNewsTitle}>DONT MISS THESE LATEST</h3>
          <div className={styles.latestNewsContent}>
            <div className={styles.newsColumn}>
              <article className={styles.newsItem}>
                <h4 className={styles.newsItemTitle}>Sustainability Energy Talks</h4>
                <p className={styles.newsItemDescription}>
                  In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining ...
                </p>
                <a href="#" className={styles.readNowLink}>Read Now</a>
              </article>
              <article className={styles.newsItem}>
                <h4 className={styles.newsItemTitle}>Sustainability Energy Talks</h4>
                <p className={styles.newsItemDescription}>
                  In an impressive feat Amazon mineworks reported record breaking coal production in its latest mining ...
                </p>
                <a href="#" className={styles.readNowLink}>Read Now</a>
              </article>
            </div>
            <div className={styles.newsColumn}>
              <div className={styles.smallNewsItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d64bbf8ebb60902fee4b89cc7e28675702637381f3fd1925d5e83d3b83325ebd?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="News thumbnail" className={styles.smallNewsImage} />
                <p className={styles.smallNewsDescription}>
                  In an impressive feat Amazon mineworks reported record bre
                </p>
              </div>
              <hr className={styles.newsDivider} />
              <div className={styles.smallNewsItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d64bbf8ebb60902fee4b89cc7e28675702637381f3fd1925d5e83d3b83325ebd?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="News thumbnail" className={styles.smallNewsImage} />
                <p className={styles.smallNewsDescription}>
                  In an impressive feat Amazon mineworks reported record bre
                </p>
              </div>
              <hr className={styles.newsDivider} />
              <div className={styles.smallNewsItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d64bbf8ebb60902fee4b89cc7e28675702637381f3fd1925d5e83d3b83325ebd?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491" alt="News thumbnail" className={styles.smallNewsImage} />
                <p className={styles.smallNewsDescription}>
                  In an impressive feat Amazon mineworks reported record bre
                </p>
              </div>
              <hr className={styles.newsDivider} />
              <a href="#" className={styles.seeMoreLink}>See More</a>
            </div>
          </div>
        </div>
        <nav className={styles.footerNav}>
          <a href="#" className={styles.footerNavLink}>Terms of service</a>
          <a href="#" className={styles.footerNavLink}>Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;