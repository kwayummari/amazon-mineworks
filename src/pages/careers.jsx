import React, { useEffect, useState } from "react";
import databaseService from "../services/realMySQLService";
import styles from "../styles/Careers.module.scss";

const JobItem = ({ id, title, department, location, type, salary, description, pdfPreview, pdfFile, postedDate, onShare }) => {
  const handleDownloadPDF = () => {
    if (pdfFile) {
      // Create a blob from the base64 data
      const byteCharacters = atob(pdfFile.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '_')}_Job_Description.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <h3 className={styles.jobTitle}>{title}</h3>
        <div className={styles.jobMeta}>
          <span className={styles.jobDepartment}>{department}</span>
          <span className={styles.jobLocation}>{location}</span>
          <span className={styles.jobType}>{type}</span>
        </div>
      </div>
      
      <div className={styles.jobContent}>
        <p className={styles.jobDescription}>{description}</p>
        {salary && <p className={styles.jobSalary}>Salary: {salary}</p>}
      </div>

      {pdfPreview && (
        <div className={styles.jobPreview}>
          <img src={pdfPreview} alt="Job Description Preview" />
        </div>
      )}

      <div className={styles.jobActions}>
        <button 
          onClick={handleDownloadPDF}
          className={styles.viewJobBtn}
          disabled={!pdfFile}
        >
          <i className="bi bi-file-earmark-pdf"></i>
          Download Job Description
        </button>
        <button
          className={styles.shareButton}
          onClick={() => onShare(id, title)}
          title="Share this job posting"
        >
          <i className="bi bi-share"></i>
        </button>
      </div>
      
      <div className={styles.jobFooter}>
        <time className={styles.jobDate}>
          Posted: {new Date(postedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </div>
  );
};

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShare = async (id, title) => {
    const url = `${window.location.origin}/careers`;
    const text = `Check out this job opportunity: ${title}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(`${text} - ${url}`);
        alert('Job link copied to clipboard!');
      } catch (err) {
        console.log('Failed to copy to clipboard:', err);
      }
    }
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const jobsData = await databaseService.getJobsWithFallback();
        // Only show active jobs
        const activeJobs = jobsData.filter((job) => job.active);
        setJobs(activeJobs);
      } catch (error) {
        console.error("Error loading jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  if (loading) {
    return (
      <div className={styles.careersPage}>
        <div className={styles.hero}>
          <h1>Career Opportunities</h1>
          <p>Join our team and be part of the future of sustainable mining</p>
        </div>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading job opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.careersPage}>
      <div className={styles.hero}>
        <h1>Career Opportunities</h1>
        <p>Join our team and be part of the future of sustainable mining</p>
      </div>

      <div className={styles.jobsContainer}>
        {jobs.length === 0 ? (
          <div className={styles.emptyState}>
            <i className="bi bi-briefcase"></i>
            <h3>No job openings at the moment</h3>
            <p>Check back later for exciting career opportunities</p>
          </div>
        ) : (
          <div className={styles.jobsGrid}>
            {jobs.map((job) => (
              <JobItem
                key={job.id}
                id={job.id}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
                salary={job.salary}
                description={job.description}
                pdfPreview={job.pdfPreview}
                pdfFile={job.pdfFile}
                postedDate={job.postedDate}
                onShare={handleShare}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;

