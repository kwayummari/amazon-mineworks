import React, { useState } from "react";
import { useAdmin } from "../../contexts/AdminContext";
import styles from "../../styles/AdminLogin.module.scss";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(credentials);

    if (!result.success) {
      setError(result.error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h1>Admin Login</h1>
          <p>Amazon Mineworks Administration</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className={styles.loginFooter}>
          <p>
            <strong>Available Accounts:</strong>
          </p>
          <p>• admin / z$T8zb|>GXA7</p>
          <p>• admin@amazon / ;@DI$>yv3Zc"bi1v</p>
          <hr style={{ margin: "10px 0", border: "1px solid #e1e5e9" }} />
          <p>Database: u976524705_amazon</p>
          <p>Host: auth-db1373.hstgr.io</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
