import React, { useState, useEffect, useRef } from "react";
import databaseService from "../../services/realMySQLService";
import styles from "../../styles/JobsManagement.module.scss";

const JobsManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
    pdfFile: null,
    pdfPreview: null,
    active: true,
  });

  // Load existing jobs on component mount
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const jobsData = await databaseService.getJobs();
        setJobs(jobsData);
        setError(null);
      } catch (err) {
        setError("Failed to load jobs");
        console.error("Error loading jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to convert PDF first page to image
  const convertPdfToImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        // For now, we'll create a placeholder image
        // In a real implementation, you'd use PDF.js or similar
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 300;

        // Create a placeholder preview
        ctx.fillStyle = "#f8f9fa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#6c757d";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText("PDF Preview", canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillText(file.name, canvas.width / 2, canvas.height / 2 + 20);

        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      setError("File size must be less than 10MB");
      return;
    }

    try {
      setUploading(true);

      // Convert PDF to base64
      const reader = new FileReader();
      reader.onload = async function (e) {
        const pdfBase64 = e.target.result;

        // Create preview image
        const previewImage = await convertPdfToImage(file);

        setFormData((prev) => ({
          ...prev,
          pdfFile: pdfBase64,
          pdfPreview: previewImage,
        }));

        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Failed to process PDF file");
      setUploading(false);
    }
  };

  const handleFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const jobData = {
        ...formData,
        postedDate: new Date().toISOString().split("T")[0],
      };

      if (editingJob) {
        // Update existing job
        const result = await databaseService.updateJob(editingJob.id, jobData);
        if (result.success) {
          // Reload jobs data from database to ensure we have the latest
          const jobsData = await databaseService.getJobs();
          setJobs(jobsData);
          setEditingJob(null);
        } else {
          setError("Failed to update job");
        }
      } else {
        // Add new job
        const result = await databaseService.addJob(jobData);
        if (result.success) {
          // Reload jobs data from database to ensure we have the latest
          const jobsData = await databaseService.getJobs();
          setJobs(jobsData);
        } else {
          setError("Failed to add job");
        }
      }

      // Reset form
      setFormData({
        title: "",
        department: "",
        location: "",
        type: "Full-time",
        salary: "",
        description: "",
        pdfFile: null,
        pdfPreview: null,
        active: true,
      });
      setShowForm(false);
    } catch (err) {
      setError("Database error while saving job");
      console.error("Error saving job:", err);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title || "",
      department: job.department || "",
      location: job.location || "",
      type: job.type || "Full-time",
      salary: job.salary || "",
      description: job.description || "",
      pdfFile: job.pdfFile || null,
      pdfPreview: job.pdfPreview || null,
      active: job.active !== false,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this job posting? This action cannot be undone."
      )
    ) {
      try {
        setError(null);
        const result = await databaseService.deleteJob(id);
        if (result.success) {
          // Reload jobs data from database to ensure we have the latest
          const jobsData = await databaseService.getJobs();
          setJobs(jobsData);
        } else {
          setError("Failed to delete job");
        }
      } catch (err) {
        setError("Database error while deleting job");
        console.error("Error deleting job:", err);
      }
    }
  };

  const toggleJobStatus = async (id, currentStatus) => {
    try {
      setError(null);
      const result = await databaseService.updateJob(id, {
        active: !currentStatus,
      });
      if (result.success) {
        // Reload jobs data from database to ensure we have the latest
        const jobsData = await databaseService.getJobs();
        setJobs(jobsData);
      } else {
        setError("Failed to update job status");
      }
    } catch (err) {
      setError("Database error while updating job status");
      console.error("Error updating job status:", err);
    }
  };

  const clearAllJobs = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete ALL job postings? This action cannot be undone."
      )
    ) {
      try {
        setLoading(true);
        setError(null);

        // Delete all jobs
        for (const job of jobs) {
          await databaseService.deleteJob(job.id);
        }

        setJobs([]);
      } catch (err) {
        setError("Failed to clear all jobs");
        console.error("Error clearing jobs:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className={styles.jobsManagement}>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.jobsManagement}>
      <div className={styles.header}>
        <h2>Jobs Management</h2>
        <div className={styles.headerActions}>
          <button
            className={styles.addButton}
            onClick={() => {
              setEditingJob(null);
              setFormData({
                title: "",
                department: "",
                location: "",
                type: "Full-time",
                salary: "",
                description: "",
                pdfFile: null,
                pdfPreview: null,
                active: true,
              });
              setShowForm(true);
            }}
          >
            <i className="bi bi-plus"></i>
            Add New Job
          </button>
          {jobs.length > 0 && (
            <button className={styles.clearButton} onClick={clearAllJobs}>
              <i className="bi bi-trash"></i>
              Clear All
            </button>
          )}
        </div>
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h3>{editingJob ? "Edit Job" : "Add New Job"}</h3>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setShowForm(false);
                  setEditingJob(null);
                }}
              >
                <i className="bi bi-x"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.jobForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="title">Job Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Senior Mining Engineer"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="department">Department *</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Engineering"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Location *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Remote / On-site"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="type">Job Type *</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="salary">Salary Range</label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g., $80,000 - $120,000"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="active"
                      checked={formData.active}
                      onChange={handleInputChange}
                    />
                    <span>Active (visible on website)</span>
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">Job Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Brief description of the role and responsibilities..."
                />
              </div>

              <div className={styles.formGroup}>
                <label>Job Description PDF *</label>
                <div className={styles.fileUpload}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />
                  <button
                    type="button"
                    onClick={handleFileInput}
                    className={styles.uploadButton}
                    disabled={uploading}
                  >
                    {uploading ? (
                      <>
                        <i className="bi bi-arrow-clockwise"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-cloud-upload"></i>
                        {formData.pdfFile ? "Change PDF" : "Upload PDF"}
                      </>
                    )}
                  </button>
                  {formData.pdfFile && (
                    <span className={styles.fileName}>
                      <i className="bi bi-file-earmark-pdf"></i>
                      PDF uploaded
                    </span>
                  )}
                </div>

                {formData.pdfPreview && (
                  <div className={styles.pdfPreview}>
                    <img src={formData.pdfPreview} alt="PDF Preview" />
                  </div>
                )}
              </div>

              <div className={styles.formActions}>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingJob(null);
                  }}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formData.pdfFile}
                  className={styles.saveButton}
                >
                  {editingJob ? "Update Job" : "Add Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.jobsList}>
        {jobs.length === 0 ? (
          <div className={styles.emptyState}>
            <i className="bi bi-briefcase"></i>
            <h3>No jobs posted yet</h3>
            <p>Click "Add New Job" to create your first job posting</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobInfo}>
                <h4>{job.title}</h4>
                <div className={styles.jobMeta}>
                  <span className={styles.department}>{job.department}</span>
                  <span className={styles.location}>{job.location}</span>
                  <span className={styles.type}>{job.type}</span>
                </div>
                <p className={styles.description}>{job.description}</p>
                {job.salary && <p className={styles.salary}>{job.salary}</p>}
                <div className={styles.jobStatus}>
                  Status:{" "}
                  <span
                    className={job.active ? styles.active : styles.inactive}
                  >
                    {job.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              {job.pdfPreview && (
                <div className={styles.pdfPreview}>
                  <img src={job.pdfPreview} alt="PDF Preview" />
                </div>
              )}

              <div className={styles.jobActions}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(job)}
                >
                  <i className="bi bi-pencil"></i>
                  Edit
                </button>
                <button
                  className={`${styles.statusButton} ${
                    job.active ? styles.deactivate : styles.activate
                  }`}
                  onClick={() => toggleJobStatus(job.id, job.active)}
                >
                  <i
                    className={`bi bi-${job.active ? "eye-slash" : "eye"}`}
                  ></i>
                  {job.active ? "Deactivate" : "Activate"}
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(job.id)}
                >
                  <i className="bi bi-trash"></i>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobsManagement;
