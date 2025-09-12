import React from "react";
import styles from "../../styles/AdminFooter.module.scss";

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p>&copy; {currentYear} Amazon Mineworks. All rights reserved.</p>
        </div>
        <div className={styles.footerRight}>
          <p>Admin Panel v1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
