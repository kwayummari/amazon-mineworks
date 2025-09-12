import React, { useEffect, useRef, useState } from "react";
import databaseService from "../services/realMySQLService";
import styles from "./../styles/Jobs.module.scss";

const JobItem = ({
  id,
  title,
  department,
  location,
  type,
  salary,
  description,
  pdfPreview,
  pdfFile,
  postedDate,
  onShare,
}) => {
  const handleDownloadPDF = () => {
    if (pdfFile) {
      // Create a blob from the base64 data
      const byteCharacters = atob(pdfFile.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.replace(/\s+/g, "_")}_Job_Description.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <article className={styles.jobItem}>
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

      <div className={styles.jobPreview}>
        {pdfPreview ? (
          <div className={styles.pdfPreview}>
            <img src={pdfPreview} alt="Job Description Preview" />
          </div>
        ) : pdfFile ? (
          <div className={styles.pdfPreview}>
            <div className={styles.pdfPlaceholder}>
              <i className="bi bi-file-earmark-pdf"></i>
              <span>PDF Document</span>
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.jobActions}>
        <div className={styles.jobActionsTop}>
          <button
            onClick={handleDownloadPDF}
            className={styles.viewJobBtn}
            disabled={!pdfFile}
          >
            <i className="bi bi-file-earmark-pdf"></i>
            View Full Job Description
          </button>
          <button
            className={styles.shareButton}
            onClick={() => onShare(id, title)}
            title="Share this job posting"
          >
            <i className="bi bi-share"></i>
          </button>
        </div>
        <time className={styles.jobDate}>
          Posted:{" "}
          {new Date(postedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </article>
  );
};

const Jobs = () => {
  const jobsGridRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShare = async (id, title) => {
    const url = `${window.location.origin}/#jobs`;
    const text = `Check out this job opportunity: ${title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(`${text} - ${url}`);
        alert("Job link copied to clipboard!");
      } catch (err) {
        console.log("Failed to copy to clipboard:", err);
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
        // Fallback to default jobs
        setJobs([
          {
            id: 1,
            title: "Senior Mining Engineer",
            department: "Engineering",
            location: "Remote / On-site",
            type: "Full-time",
            salary: "$80,000 - $120,000",
            description:
              "Lead mining operations and oversee safety protocols for our expanding coal mining operations.",
            pdfPreview: null,
            pdfFile:
              "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoyNTAgNzAwIFRkCihTZW5pb3IgTWluaW5nIEVuZ2luZWVyKSBUagoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDI2MCAwMDAwMCBuCjAwMDAwMDAzMjcgMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQxNQolJUVPRgo=",
            postedDate: "2024-01-15",
            active: true,
          },
          {
            id: 2,
            title: "Environmental Compliance Specialist",
            department: "Environmental",
            location: "On-site",
            type: "Full-time",
            salary: "$60,000 - $90,000",
            description:
              "Ensure compliance with environmental regulations and develop sustainable mining practices.",
            pdfPreview: null,
            pdfFile:
              "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoyNTAgNzAwIFRkCihFbnZpcm9ubWVudGFsIENvbXBsaWFuY2UpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmCjAwMDAwMDAwMDkgMDAwMDAgbgowMDAwMDAwMDU4IDAwMDAwIG4KMDAwMDAwMDExNSAwMDAwMCBuCjAwMDAwMDAyNjAgMDAwMDAgbgowMDAwMDAwMzI3IDAwMDAwIG4KdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0MTUKJSlFT0YK",
            postedDate: "2024-01-10",
            active: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      const scrollInterval = 3000;
      const scrollAmount = 350;

      const scrollJobsGrid = () => {
        if (jobsGridRef.current) {
          if (
            jobsGridRef.current.scrollLeft + jobsGridRef.current.offsetWidth >=
            jobsGridRef.current.scrollWidth
          ) {
            jobsGridRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            jobsGridRef.current.scrollBy({
              left: scrollAmount,
              behavior: "smooth",
            });
          }
        }
      };
      const intervalId = setInterval(scrollJobsGrid, scrollInterval);
      return () => clearInterval(intervalId);
    }
  }, [jobs]);

  if (loading) {
    return (
      <section className={styles.jobsSection}>
        <h2 className={styles.sectionTitle}>Career Opportunities</h2>
        <div className={styles.loadingSpinner}>
          <i className="bi bi-arrow-clockwise"></i>
          <p>Loading job opportunities...</p>
        </div>
      </section>
    );
  }

  if (jobs.length === 0) {
    return (
      <section className={styles.jobsSection}>
        <h2 className={styles.sectionTitle}>Career Opportunities</h2>
        <div className={styles.emptyState}>
          <i className="bi bi-briefcase"></i>
          <h3>No job openings at the moment</h3>
          <p>Check back later for exciting career opportunities</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.jobsSection}>
      <h2 className={styles.sectionTitle}>Career Opportunities</h2>
      <p className={styles.sectionDescription}>
        Join our team and be part of the future of sustainable mining
      </p>
      <div className={styles.jobsGrid} ref={jobsGridRef}>
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
    </section>
  );
};

export default Jobs;
