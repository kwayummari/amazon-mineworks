import React from "react";
import { useAdmin } from "../contexts/AdminContext";
import AdminLogin from "../components/admin/AdminLogin";
import AdminLayout from "../components/admin/AdminLayout";
import styles from "../styles/AdminPanel.module.scss";

const AdminPanel = () => {
  const { isAuthenticated, loading } = useAdmin();

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminPanel}>
      {isAuthenticated ? <AdminLayout /> : <AdminLogin />}
    </div>
  );
};

export default AdminPanel;
