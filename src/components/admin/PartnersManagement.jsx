import React, { useState, useEffect, useRef } from "react";
import databaseService from "../../services/realMySQLService";
import { compressImage } from "../../utils/imageCompression";
import styles from "../../styles/PartnersManagement.module.scss";

const PartnersManagement = () => {
  const [partners, setPartners] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Load existing partners on component mount
  useEffect(() => {
    const loadPartners = async () => {
      try {
        setLoading(true);
        const partnersData = await databaseService.getPartners();
        // Ensure we have a valid array and filter out any invalid items
        const validPartners = Array.isArray(partnersData)
          ? partnersData.filter((partner) => partner && partner.id)
          : [];
        setPartners(validPartners);
        setError(null);
      } catch (err) {
        setError("Failed to load partners");
        console.error("Error loading partners:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  const handleFileUpload = async (files) => {
    setUploading(true);
    setError(null);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith("image/")) {
          try {
            // Compress the image before uploading
            const compressed = await compressImage(file, 800, 600, 0.7);

            const newPartner = {
              image: compressed.dataUrl, // Compressed base64 data
              uploadedAt: new Date().toISOString(),
              alt: file.name.replace(/\.[^/.]+$/, ""),
            };

            try {
              const result = await databaseService.addPartner(newPartner);
              if (!result.success) {
                setError("Failed to save partner");
                setUploading(false);
                return;
              }
            } catch (err) {
              setError("Database error while saving partner");
              setUploading(false);
              return;
            }
          } catch (compressionError) {
            console.error("Error compressing image:", compressionError);
            setError(
              `Failed to process image "${file.name}". Please try a different image.`
            );
            setUploading(false);
            return;
          }
        }
      }

      // Wait a bit for all uploads to complete, then reload data
      setTimeout(async () => {
        try {
          const partnersData = await databaseService.getPartners();
          const validPartners = Array.isArray(partnersData)
            ? partnersData.filter((partner) => partner && partner.id)
            : [];
          setPartners(validPartners);
          setUploading(false);
        } catch (err) {
          setError("Failed to reload partners");
          setUploading(false);
        }
      }, 1000); // Wait 1 second for uploads to complete
    } catch (err) {
      setError("Failed to process files");
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFileUpload(files);
  };

  const deletePartner = async (id) => {
    try {
      setError(null);
      const result = await databaseService.deletePartner(id);

      if (result.success) {
        const updatedPartners = partners.filter((partner) => partner.id !== id);
        setPartners(updatedPartners);
      } else {
        setError("Failed to delete partner");
      }
    } catch (err) {
      setError("Database error while deleting partner");
      console.error("Error deleting partner:", err);
    }
  };

  const updatePartnerName = async (id, newName) => {
    try {
      setError(null);
      const result = await databaseService.updatePartner(id, {
        alt: newName,
      });

      if (result.success) {
        const updatedPartners = partners.map((partner) =>
          partner.id === id ? result.partner : partner
        );
        setPartners(updatedPartners);
      } else {
        setError("Failed to update partner");
      }
    } catch (err) {
      setError("Database error while updating partner");
      console.error("Error updating partner:", err);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading partners...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.partnersManagement}>
      <div className={styles.header}>
        <h2>Partners Management</h2>
        <p>Upload and manage trusted partner logos</p>
        {error && (
          <div className={styles.errorMessage}>
            <i className="bi bi-exclamation-triangle"></i>
            {error}
          </div>
        )}
      </div>

      <div className={styles.uploadSection}>
        <div
          className={`${styles.uploadArea} ${dragOver ? styles.dragOver : ""}`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
        >
          <div className={styles.uploadContent}>
            <i className="bi bi-cloud-upload"></i>
            <h3>Drop images here or click to upload</h3>
            <p>Supports JPG, PNG, GIF, and other image formats</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileInput}
              className={styles.fileInput}
              disabled={uploading}
            />
            <button
              className={styles.uploadButton}
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Choose Files"}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.partnersGrid}>
        {partners
          .filter((partner) => partner && partner.id)
          .map((partner) => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.partnerImage}>
                <img src={partner.image} alt={partner.alt || "Partner logo"} />
              </div>
              <div className={styles.partnerInfo}>
                <input
                  type="text"
                  value={partner.alt || "Untitled"}
                  onChange={(e) =>
                    updatePartnerName(partner.id, e.target.value)
                  }
                  className={styles.partnerName}
                />
                <p className={styles.uploadDate}>
                  Uploaded:{" "}
                  {partner.uploadedAt
                    ? new Date(partner.uploadedAt).toLocaleDateString()
                    : "Unknown"}
                </p>
              </div>
              <div className={styles.partnerActions}>
                <button
                  className={styles.deleteButton}
                  onClick={() => deletePartner(partner.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>

      {partners.length === 0 && (
        <div className={styles.emptyState}>
          <i className="bi bi-building"></i>
          <h3>No partners uploaded yet</h3>
          <p>Upload your first partner logo to get started</p>
        </div>
      )}
    </div>
  );
};

export default PartnersManagement;
