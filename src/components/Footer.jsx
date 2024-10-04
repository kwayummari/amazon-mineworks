import React from "react";
import styles from "./../styles/Footer.module.scss";

function Footer() {
  const footerSections = [
    {
      title: "ABOUT COMPANY",
      items: [
        "Subsidiary Overview",
        "Organization structure",
        "Vision and Mission",
        "Management",
        "Gallery",
      ],
    },
    {
      title: "COMMODITY",
      items: [
        "Our Resources",
        "Specification Details",
        "Portfolio",
        "Mining Operations",
        "Extracted Resources",
      ],
    },
    {
      title: "INVESTORS",
      items: [
        "Investors Relations",
        "Finance Report",
        "Stock Information",
        "Event and Presentation",
      ],
    },
    {
      title: "OTHERS",
      items: [
        "Partnership",
        "Industry Insights",
        "Legal and Compliance",
        "Corporate Events",
      ],
    },
    {
      title: "MEDIA",
      items: [
        "Our Resources",
        "Specification Details",
        "Portfolio",
        "Mining Operations",
        "Extracted Resources",
      ],
    },
    {
      title: "LEGAL",
      items: [
        "Documentation",
        "Compliance Document",
        "Permits and Authorization",
        "Regulatory Filings",
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03fe40c5938eaa9db6f9ecaae69d2c1d7c6269b20162b94395d0d39335108a08?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491"
            alt="Amazon Mineworks logo"
            className={styles.footerLogo}
          />
          <p className={styles.footerSlogan}>
            We are professionals for building constructions
          </p>
          <div className={styles.socialIcons}>
          <i className="bi bi-facebook" />
          <i className="bi bi-linkedin" />
          <i className="bi bi-instagram" />
          <i className="bi bi-twitter" />
          </div>
        </div>
        <div className={styles.footerLinks}>
          {footerSections.map((section, index) => (
            <div key={index} className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>{section.title}</h3>
              <ul className={styles.footerSectionList}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className={styles.footerLink}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright Amazon mineworks. All rights Reserved.
          </p>
          <p className={styles.designCredit}>
            Website designed by{" "}
            <span className={styles.designerName}>Aurorawave labs</span>
          </p>
          {/* <nav className={styles.footerNav}> */}
          <a href="#" className={styles.footerNavLink}>
            Terms of service
          </a>
          <a href="#" className={styles.footerNavLink}>
            Privacy Policy
          </a>
        {/* </nav> */}
        </div>
        {/* <div className={styles.latestNews}>
          <h3 className={styles.latestNewsTitle}>DONT MISS THESE LATEST</h3>
          <div className={styles.latestNewsContent}>
            <div className={styles.newsColumn}>
              <article className={styles.newsItem}>
                <h4 className={styles.newsItemTitle}>
                  Sustainability Energy Talks
                </h4>
                <p className={styles.newsItemDescription}>
                  In an impressive feat Amazon mineworks reported record
                  breaking coal production in its latest mining ...
                </p>
                <a href="#" className={styles.readNowLink}>
                  Read Now
                </a>
              </article>
              <article className={styles.newsItem}>
                <h4 className={styles.newsItemTitle}>
                  Sustainability Energy Talks
                </h4>
                <p className={styles.newsItemDescription}>
                  In an impressive feat Amazon mineworks reported record
                  breaking coal production in its latest mining ...
                </p>
                <a href="#" className={styles.readNowLink}>
                  Read Now
                </a>
              </article>
            </div>
            <div className={styles.newsColumn}>
              <div className={styles.smallNewsItem}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d64bbf8ebb60902fee4b89cc7e28675702637381f3fd1925d5e83d3b83325ebd?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491"
                  alt="News thumbnail"
                  className={styles.smallNewsImage}
                />
                <p className={styles.smallNewsDescription}>
                  In an impressive feat Amazon mineworks reported record bre
                </p>
              </div>
              <hr className={styles.newsDivider} />
              <div className={styles.smallNewsItem}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d64bbf8ebb60902fee4b89cc7e28675702637381f3fd1925d5e83d3b83325ebd?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491"
                  alt="News thumbnail"
                  className={styles.smallNewsImage}
                />
                <p className={styles.smallNewsDescription}>
                  In an impressive feat Amazon mineworks reported record bre
                </p>
              </div>
              <hr className={styles.newsDivider} />
              <div className={styles.smallNewsItem}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d64bbf8ebb60902fee4b89cc7e28675702637381f3fd1925d5e83d3b83325ebd?placeholderIfAbsent=true&apiKey=69c943fd599c485fb32c02233b347491"
                  alt="News thumbnail"
                  className={styles.smallNewsImage}
                />
                <p className={styles.smallNewsDescription}>
                  In an impressive feat Amazon mineworks reported record bre
                </p>
              </div>
              <hr className={styles.newsDivider} />
              <a href="#" className={styles.seeMoreLink}>
                See More
              </a>
            </div>
          </div>
        </div> */}
       
      </div>
    </footer>
  );
}

export default Footer;
