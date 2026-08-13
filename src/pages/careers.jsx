import React, { useEffect, useState } from "react";
import databaseService from "../services/realMySQLService";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import styles from "../styles/Careers.module.scss";

const highlights = [
  { icon: "bi-mortarboard", label: "Apprenticeship Program" },
  { icon: "bi-globe-americas", label: "Career Growth Across Africa" },
  { icon: "bi-shield-check", label: "Safety-First Culture" },
  { icon: "bi-graph-up-arrow", label: "Competitive Salaries" },
];

const JobItem = ({ id, title, department, location, type, salary, description, pdfFile, postedDate, onShare }) => {
  const handleDownloadPDF = () => {
    if (!pdfFile) return;
    const byteCharacters = atob(pdfFile.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const blob = new Blob([new Uint8Array(byteNumbers)], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "_")}_Job_Description.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <article className={styles.jobCard}>
      <div className={styles.jobMeta}>
        <span>{department}</span>
        <span>{location}</span>
        <span>{type}</span>
        {salary && <span>{salary}</span>}
      </div>
      <h3 className={styles.jobTitle}>{title}</h3>
      <p className={styles.jobDescription}>{description}</p>
      <time className={styles.jobDate}>
        Posted {new Date(postedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </time>
      <div className={styles.jobActions}>
        <button onClick={handleDownloadPDF} className={styles.viewJobBtn} disabled={!pdfFile}>
          <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i>
          Job Description
        </button>
        <button className={styles.shareButton} onClick={() => onShare(id, title)} title="Share this job posting" aria-label="Share this job posting">
          <i className="bi bi-share" aria-hidden="true"></i>
        </button>
      </div>
    </article>
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
        await navigator.share({ title, text, url });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
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
        setJobs(jobsData.filter((job) => job.active));
      } catch (error) {
        console.error("Error loading jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.introSection}>
        <Container className={styles.introGrid}>
          <div>
            <SectionHeading
              eyebrow="Join Us"
              title="Career Opportunities"
              lede="Join our team and be part of the future of sustainable mining across Tanzania."
            />
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item.label}>
                  <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.introImage}>
            <img loading="eager" src="./images/LImage2.png" alt="Amazon Mineworks employee on site" />
          </div>
        </Container>
      </section>

      <section className={styles.listSection}>
        <Container>
          {loading && (
            <div className={styles.stateBlock}>
              <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
              <p>Loading job opportunities...</p>
            </div>
          )}

          {!loading && jobs.length === 0 && (
            <div className={styles.stateBlock}>
              <i className="bi bi-briefcase" aria-hidden="true"></i>
              <h3>No job openings at the moment</h3>
              <p>Check back later for exciting career opportunities.</p>
            </div>
          )}

          {!loading && jobs.length > 0 && (
            <div className={styles.jobsGrid}>
              {jobs.map((job) => (
                <JobItem key={job.id} {...job} onShare={handleShare} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Careers;
