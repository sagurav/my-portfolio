// ✅ Pentaho.js - Updated Modal-Based Business Intelligence Contribution View
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Pentaho.css';

const experiences = [
 {
        label: 'Technical Lead – Pentaho BI and Integration Team',
        title: 'Team Leadership & Solution Design',
        details: 'Worked as Technical Lead for Pentaho BI and Integration teams, overseeing the delivery of secure, scalable, and high-performance BI solutions for the LIC ePGS system. Led the full delivery cycle including architecture design, team mentoring, performance optimization, encryption strategy, Java + Pentaho integration, API coordination, and cross-team collaboration with banks and government bodies. Played a key role in creating 25+ batch jobs, building report frameworks, automating pipelines, and implementing CI/CD using Jenkins and Ansible.'
 },
  {
    label: 'Built BI solutions using Pentaho',
    title: 'Business Intelligence with Pentaho',
    details: 'Built BI pipelines from scratch using Pentaho BI Suite (PDI + PRD + CDE). Designed ETL jobs, dynamic reports, and dashboards to serve over 400 reports and 50+ dashboards.'
  },
  {
    label: 'Setup Pentaho server and CI/CD pipeline (Jenkins & Ansible)',
    title: 'Server and CI/CD Pipeline Setup',
    details: 'Implemented Pentaho BI on Red Hat server, built CI/CD pipeline using Jenkins and Ansible for automated deployments, backups, and environment refresh.'
  },
  {
    label: 'Developed and maintained 400+ reports and 50+ dashboards for real-time insurance analytics',
    title: 'Reports and Dashboard Delivery',
    details: 'Designed and deployed over 400 dynamic reports and 50 dashboards that deliver actionable insights on insurance KPIs to business and government stakeholders.'
  },
  {
    label: 'Complete Payment System with SFTP and Encryption Integration',
    title: 'Payment System – Java APIs + Pentaho + Bank Security',
    details: 'Created the full payment system from requirement gathering to deployment. Integrated Java APIs and Pentaho ETL with SFTP-based secure transfer, file-level encryption/decryption using GPG, and dashboards. Ensured high availability and secured communication with banks.'
  },
  {
    label: 'Annuity Extraction System (Daily Pension Processing)',
    title: 'Annuity System – Big Data Processing & Dashboards',
    details: 'Designed a robust annuity (pension) processing system for daily payment generation. Managed big data extraction loads with stream segregation, validation pipelines, retry handling, and BI dashboards for real-time stakeholder monitoring.'
  },
  {
    label: 'Claim Settlement Workflow with Government Coordination',
    title: 'Claim System – Secure Flow & Govt. Compliance',
    details: 'Built and deployed a claim workflow involving secure file flow, GPG encryption, and backend validation. Coordinated directly with government entities to meet legal and audit standards and integrated dashboards for claim processing insights.'
  },
  {
    label: 'Policy Renewal & New Business – Integrated Workflow',
    title: 'Policy + New Business – BI & Infrastructure View',
    details: 'Built reusable Pentaho jobs and dashboards for policy renewals and new business registration. Enabled automation, alerts, and reporting structure using Java APIs + Pentaho with file-level tracking and monitoring.'
  },
  {
    label: 'Supported Bank Integrations – IDBI, AXIS',
    title: 'Bank Integration Support',
    details: 'Worked with IDBI and AXIS bank teams to design the integration process. Shared architecture, supported encryption using GPG freeware, and implemented IP whitelisting for secure data exchange.'
  },
  {
    label: 'Handled Infra setup for BI & Data Engineering',
    title: 'Infrastructure Management',
    details: 'Set up backend server, shell jobs, automation scripts, log retention, and alerts to support enterprise data engineering lifecycle.'
  }
];

const education = [
  {
    label: 'Completed Master of Information Technology – QUT',
    title: 'Master of IT – QUT (Software Development)',
    details: 'Hands-on with Pentaho BI in academic and professional projects. Integrated Pentaho in AWS-based cloud deployments and built reporting solutions during MIT capstone.'
  },

  {
    label: 'Enterprise Payment System Prototype – Java + Angular + Pentaho',
    title: 'Enterprise-Grade Prototype using Java, Angular, and Pentaho BI',
    details: 'Designed and developed a prototype for a real-time enterprise payment system using Java (Spring Boot), Angular, and Pentaho BI Suite. The system demonstrated secure SFTP-based data flow, integrated ETL pipelines, dynamic dashboards, and role-based analytics for financial insights.'
  },
  
  {
    label: 'Learning Azure Databricks and Advanced Power BI',
    title: 'Ongoing Certification – Azure Databricks & Power BI',
    details: 'Currently acquiring in-depth knowledge of Azure Databricks for scalable data processing and doing hands-on certification on Power BI for advanced data visualization and reporting. Open and adaptive to mastering any modern ETL tools and BI platforms to meet evolving enterprise data demands.'
  },

  {
    label: 'Google Data Analytics Certification (2024)',
    title: 'Google Data Analytics Certification (2024)',
    details: 'Acquired strong skills in data wrangling, SQL, R, and Excel. Gained analytical problem-solving mindset for transforming data into insights.'
  }
];

const Pentaho = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="left-column">
        <h1 style={{ color: '#ffffff' }}>Business Intelligence (Pentaho BI)</h1>
        <p style={{ color: '#cccccc' }}>Real Projects | 25+ Batch Processess | 400+ Reports | CI/CD |Integrations</p>
      </div>

      <div className="software-container">
        <motion.div className="sdlc-card">
          <h3 style={{ color: '#00ffaa' }}>Key Contributions – BI Implementation</h3>
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

        <motion.div className="sdlc-card">
          <h3 style={{ color: '#66b2ff' }}>Education & BI Learning</h3>
          <div className="list-block">
            {education.map((item, index) => (
              <div key={index} onClick={() => setModalContent(item)} className="list-item">
                <span className="tick">✅</span>
                <span className="label-text">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

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

export default Pentaho;