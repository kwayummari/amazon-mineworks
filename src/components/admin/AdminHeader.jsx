import React, { useState } from "react";
import styles from "../../styles/AdminHeader.module.scss";

const AdminHeader = ({ user, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    onLogout();
    setShowUserMenu(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Amazon Mineworks Admin</h1>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.notifications}>
          <button className={styles.notificationButton}>
            <i className="bi bi-bell"></i>
            <span className={styles.notificationBadge}>3</span>
          </button>
        </div>

        <div className={styles.userMenu}>
          <button
            className={styles.userButton}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <i className="bi bi-person-circle"></i>
            <span>{user?.username}</span>
            <i className="bi bi-chevron-down"></i>
          </button>

          {showUserMenu && (
            <div className={styles.userDropdown}>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{user?.username}</p>
                <p className={styles.userRole}>{user?.role}</p>
              </div>
              <div className={styles.userActions}>
                <button className={styles.dropdownItem}>
                  <i className="bi bi-person"></i>
                  Profile
                </button>
                <button className={styles.dropdownItem}>
                  <i className="bi bi-gear"></i>
                  Settings
                </button>
                <hr className={styles.divider} />
                <button className={styles.dropdownItem} onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
