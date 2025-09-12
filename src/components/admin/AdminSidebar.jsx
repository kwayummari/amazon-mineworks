import React, { useState } from "react";
import styles from "../../styles/AdminSidebar.module.scss";

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "bi bi-speedometer2" },
    { id: "partners", label: "Partners", icon: "bi bi-building" },
    { id: "gallery", label: "Gallery", icon: "bi bi-images" },
    { id: "news", label: "News", icon: "bi bi-newspaper" },
    { id: "jobs", label: "Jobs", icon: "bi bi-briefcase" },
    { id: "content", label: "Content", icon: "bi bi-file-text" },
    { id: "users", label: "Users", icon: "bi bi-people" },
    { id: "settings", label: "Settings", icon: "bi bi-gear" },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <i className="bi bi-building"></i>
          {!isCollapsed && <span>Admin Panel</span>}
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className={`bi bi-chevron-${isCollapsed ? "right" : "left"}`}></i>
        </button>
      </div>

      <nav className={styles.sidebarNav}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <button
                className={`${styles.navButton} ${
                  activeSection === item.id ? styles.active : ""
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <i className={item.icon}></i>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.userInfo}>
          <i className="bi bi-person-circle"></i>
          {!isCollapsed && <span>Admin User</span>}
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
