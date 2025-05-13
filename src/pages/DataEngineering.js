import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/DataEngineering.css';

const experiences = [
  {
    label: 'Data modeling (SQL Data Modeler)',
    title: 'SQL Data Modeling Experience',
    details: 'Created end-to-end data models for LIC ePGS systems using Oracle SQL Data Modeler. This included conceptual, logical, and physical models that mapped entities like policies, payments, claims, and annuities. Ensured normalization, indexing, and optimized joins for reporting and ETL.'
  },
  {
    label: 'Data Migration using ETL',
    title: 'ETL-Based Data Migration',
    details: 'Performed data migration for 3 schemes using Pentaho PDI. Designed ETL jobs to transfer data between legacy systems and the new insurance platform. Ensured accuracy and data validation for production deployment.'
  },
  {
    label: 'Strong SQL and PL/SQL knowledge',
    title: 'Advanced SQL/PLSQL Scripts',
    details: 'Developed and maintained optimized PL/SQL procedures and SQL scripts for BI jobs, reports, data validations, and dashboard logic. Handled large datasets efficiently in production environments.'
  },
  {
    label: 'Designed and Developed Complete Payment, Annuity & Claim modules',
    title: 'End-to-End Module Implementation',
    details: 'Gathered requirements, designed architecture, developed services and dashboards, and deployed full-stack solutions for payment, annuity, and claim processing.'
  },
  {
    label: 'Built BI solutions using Pentaho',
    title: 'Business Intelligence with Pentaho',
    details: 'Built BI pipelines from scratch using Pentaho BI Suite (PDI + PRD + CDE). Designed ETL jobs, dynamic reports, and dashboards to serve over 400 reports and 50+ dashboards.'
  },
  {
    label: 'Supported Bank Integrations – IDBI, AXIS',
    title: 'Bank Integration Support',
    details: 'Worked with IDBI and AXIS bank teams to design the integration process. Shared architecture, supported encryption using GPG freeware, and implemented IP whitelisting for secure data exchange.'
  },
  {
    label: 'Setup Pentaho server and CI/CD pipeline (Jenkins & Ansible)',
    title: 'Server and CI/CD Pipeline Setup',
    details: 'Implemented Pentaho BI on Red Hat server, built CI/CD pipeline using Jenkins and Ansible for automated deployments, backups, and environment refresh.'
  },
  {
    label: 'Handled Infra setup for BI & Data Engineering',
    title: 'Infrastructure Management',
    details: 'Set up backend server, shell jobs, automation scripts, log retention, and alerts to support enterprise data engineering lifecycle.'
  },
  {
    label: 'Created 400+ reports and 50+ dashboards for real-time insurance analytics',
    title: 'Reports and Dashboard Delivery',
    details: 'Designed and deployed over 400 dynamic reports and 50 dashboards that deliver actionable insights on insurance KPIs to business and government stakeholders.'
  }
];

const education = [
  {
    label: 'Completed Master of Information Technology – QUT',
    title: 'Master of IT – QUT (Software Development)',
    details: 'Hands-on with Tableau, Python (Jupyter), AWS, and real-world datasets. Conducted AI + Blockchain Integration Research focused on healthcare automation and transparency. Created Garden Guru App using React Native and AI prototype functionalities.'
  },
  {
    label: 'Google Data Analytics Certification (2024)',
    title: 'Google Data Analytics Certification (2024)',
    details: 'Acquired strong skills in data wrangling, SQL, R, and Excel. Gained analytical problem-solving mindset for transforming data into insights. Completed hands-on labs in data analysis, cleaning, and business reporting.'
  },
  {
    label: 'Power BI Data Analyst Certification (Pursuing)',
    title: 'Power BI Data Analyst (In Progress)',
    details: 'Learning to build enterprise dashboards, write DAX queries, and use Power BI visuals to narrate impactful business stories through data. Proficient in using Power Query, Filters, and Report publishing tools.'
  }
];

const DataEngineering = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="left-column">
        <h1 style={{ color: '#ffffff' }}>Data Engineering and Data Analytics</h1>
        <p style={{ color: '#cccccc' }}>LIC ePGS Project – Full Lifecycle | Education & Certification Journey</p>
      </div>

      <div className="software-container">
        {/* Experience Block */}
        <motion.div className="sdlc-card">
          <h3 style={{ color: '#00ffaa' }}>Key Contributions – Professional Experience</h3>
          <p style={{ fontStyle: 'italic', color: '#aaa' }}>Tech Mahindra – LIC ePGS Project | 2019–2024</p>
          <div className="list-block">
            {experiences.map((item, index) => (
              <div key={index} onClick={() => setModalContent(item)} className="list-item">
                <span className="tick">✅</span>
                <span className="label-text">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Block */}
        <motion.div className="sdlc-card">
          <h3 style={{ color: '#66b2ff' }}>Education – Data Engineering Track</h3>
          <div className="list-block">
            {education.map((item, index) => (
              <div key={index} onClick={() => setModalContent(item)} className="list-item">
                <span className="tick">✅</span>
                <span className="label-text">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        {modalContent && (
          <motion.div className="modal" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.details}</p>
            <button onClick={() => setModalContent(null)}>Close</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default DataEngineering;
