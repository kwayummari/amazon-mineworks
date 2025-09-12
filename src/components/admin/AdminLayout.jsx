import React, { useState } from "react";
import { useAdmin } from "../../contexts/AdminContext";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import PartnersManagement from "./PartnersManagement";
import GalleryManagement from "./GalleryManagement";
import NewsManagement from "./NewsManagement";
import JobsManagement from "./JobsManagement";
import databaseService from "../../services/realMySQLService";
import styles from "../../styles/AdminLayout.module.scss";

const AdminLayout = () => {
  const [activeSection, setActiveSection] = useState("partners");
  const { adminUser, logout, dbStatus } = useAdmin();

  const handleMigrateData = async () => {
    if (
      window.confirm(
        "Are you sure you want to migrate all localStorage data to MySQL? This will copy your existing data to the database."
      )
    ) {
      try {
        const result = await databaseService.migrateLocalStorageToMySQL();
        if (result.success) {
          alert("Data migration completed successfully!");
        } else {
          alert("Migration failed: " + result.error);
        }
      } catch (error) {
        alert("Migration failed: " + error.message);
      }
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "partners":
        return <PartnersManagement />;
      case "gallery":
        return <GalleryManagement />;
      case "news":
        return <NewsManagement />;
      case "jobs":
        return <JobsManagement />;
      case "dashboard":
        return (
          <div className={styles.dashboardContent}>
            <h2>Dashboard</h2>
            <p>Welcome to the admin panel, {adminUser?.username}!</p>

            {dbStatus && (
              <div className={styles.dbStatus}>
                <h3>Database Status</h3>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>Status:</span>
                  <span className={styles.statusValue}>
                    <i className="bi bi-check-circle"></i> Connected
                  </span>
                </div>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>Host:</span>
                  <span className={styles.statusValue}>
                    {dbStatus.config.host}
                  </span>
                </div>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>Database:</span>
                  <span className={styles.statusValue}>
                    {dbStatus.config.database}
                  </span>
                </div>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>User:</span>
                  <span className={styles.statusValue}>
                    {dbStatus.config.user}
                  </span>
                </div>
              </div>
            )}

            <div className={styles.migrationSection}>
              <h3>Data Migration</h3>
              <p>Migrate your existing localStorage data to MySQL database</p>
              <button
                className={styles.migrateButton}
                onClick={handleMigrateData}
              >
                <i className="bi bi-arrow-up-circle"></i>
                Migrate to MySQL
              </button>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>Partners</h3>
                <p>Manage trusted partners</p>
              </div>
              <div className={styles.statCard}>
                <h3>Content</h3>
                <p>Manage website content</p>
              </div>
              <div className={styles.statCard}>
                <h3>Users</h3>
                <p>Manage user accounts</p>
              </div>
            </div>
          </div>
        );
      default:
        return <PartnersManagement />;
    }
  };

  return (
    <div className={styles.adminLayout}>
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className={styles.mainContent}>
        <AdminHeader user={adminUser} onLogout={logout} />
        <main className={styles.body}>{renderContent()}</main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
