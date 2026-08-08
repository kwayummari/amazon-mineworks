import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data/NavigationData";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setDrawerOpen(false);
      setOpenSubmenu(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const hasDropdown = (item) => Boolean(item.submenu || item.megaColumns);

  const renderDropdown = (item) => {
    if (item.megaColumns) {
      return (
        <div className={`${styles.dropdown} ${styles.mega}`}>
          {item.megaColumns.map((column) => (
            <div className={styles.megaColumn} key={column.heading}>
              <p className={styles.megaHeading}>{column.heading}</p>
              {column.items.map((sub) => (
                <Link to={sub.link} className={styles.dropdownLink} key={sub.link}>
                  {sub.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={styles.dropdown}>
        {item.submenu.map((sub) => (
          <Link to={sub.link} className={styles.dropdownLink} key={sub.link}>
            {sub.title}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.utilityBar}>
          <div className={styles.utilityLeft}>
            <a href="tel:+255000000000" className={styles.utilityItem}>
              <i className="bi bi-telephone-fill" aria-hidden="true"></i>
              +255 000 000 000
            </a>
            <a href="mailto:info@amazonmineworks.co.tz" className={styles.utilityItem}>
              <i className="bi bi-envelope-fill" aria-hidden="true"></i>
              info@amazonmineworks.co.tz
            </a>
            <span className={styles.utilityItem}>
              <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
              Tanzania
            </span>
          </div>
          <div className={styles.utilityRight}>
            <div className={styles.utilitySocials}>
              <button type="button" aria-label="Facebook"><i className="bi bi-facebook" aria-hidden="true"></i></button>
              <button type="button" aria-label="LinkedIn"><i className="bi bi-linkedin" aria-hidden="true"></i></button>
              <button type="button" aria-label="Twitter"><i className="bi bi-twitter" aria-hidden="true"></i></button>
            </div>
            <Link to="/contact-us" className={styles.utilityCta}>
              Request a Quote
            </Link>
          </div>
        </div>

        <nav className={styles.main} aria-label="Primary">
          <Link to="/" className={styles.logo}>
            <img
              loading="lazy"
              src="./images/logo/logo1.png"
              alt="Amazon Mineworks"
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.links}>
            {navItems.map((item) => (
              <div
                key={item.title}
                className={styles.item}
                onMouseEnter={() => hasDropdown(item) && setOpenSubmenu(item.title)}
                onMouseLeave={() => hasDropdown(item) && setOpenSubmenu(null)}
                onFocus={() => hasDropdown(item) && setOpenSubmenu(item.title)}
                onBlur={(e) => {
                  if (hasDropdown(item) && !e.currentTarget.contains(e.relatedTarget)) {
                    setOpenSubmenu(null);
                  }
                }}
              >
                <Link to={item.link} className={styles.navLink}>
                  {item.title}
                  {hasDropdown(item) && <i className="bi bi-chevron-down" aria-hidden="true"></i>}
                </Link>
                {hasDropdown(item) && openSubmenu === item.title && renderDropdown(item)}
              </div>
            ))}
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <i className="bi bi-list" aria-hidden="true"></i>
          </button>
        </nav>
      </header>

      <div
        className={`${styles.scrim} ${drawerOpen ? styles.scrimVisible : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerHeader}>
          <span>Menu</span>
          <button onClick={() => setDrawerOpen(false)} className={styles.closeButton} aria-label="Close menu">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>
        <div className={styles.drawerContent}>
          {navItems.map((item) => (
            <div key={item.title} className={styles.drawerItem}>
              <Link to={item.link} className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>
                {item.title}
              </Link>
              {item.submenu && (
                <div className={styles.drawerSubmenu}>
                  {item.submenu.map((sub) => (
                    <Link to={sub.link} key={sub.link} onClick={() => setDrawerOpen(false)}>
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
              {item.megaColumns &&
                item.megaColumns.map((column) => (
                  <div className={styles.drawerSubmenu} key={column.heading}>
                    <p className={styles.drawerGroupHeading}>{column.heading}</p>
                    {column.items.map((sub) => (
                      <Link to={sub.link} key={sub.link} onClick={() => setDrawerOpen(false)}>
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                ))}
            </div>
          ))}
          <Link to="/contact-us" className={styles.drawerCta} onClick={() => setDrawerOpen(false)}>
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
