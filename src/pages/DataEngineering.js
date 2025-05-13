import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

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
    label: '✅ Completed Master of Information Technology – QUT',
    title: 'Master of IT – QUT (Software Development)',
    details: 'Hands-on with Tableau, Python (Jupyter), AWS, and real-world datasets. Conducted AI + Blockchain Integration Research focused on healthcare automation and transparency. Created Garden Guru App using React Native and AI prototype functionalities.'
  },
  {
    label: '✅ Google Data Analytics Certification (2024)',
    title: 'Google Data Analytics Certification (2024)',
    details: 'Acquired strong skills in data wrangling, SQL, R, and Excel. Gained analytical problem-solving mindset for transforming data into insights. Completed hands-on labs in data analysis, cleaning, and business reporting.'
  },
  {
    label: '✅ Power BI Data Analyst Certification (Pursuing)',
    title: 'Power BI Data Analyst (In Progress)',
    details: 'Learning to build enterprise dashboards, write DAX queries, and use Power BI visuals to narrate impactful business stories through data. Proficient in using Power Query, Filters, and Report publishing tools.'
  }
];

const DataEngineering = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="left-column">
        <h1 style={{ color: '#ffffff' }}>Data Engineering</h1>
        <p style={{ color: '#cccccc' }}>LIC ePGS Project – Full Lifecycle | Education & Certification Journey</p>
      </div>

      <div className="right-column" style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Experience Block */}
        <motion.div
          className="sdlc-card"
          style={{
            width: '90%',
            backgroundColor: '#1f2633',
            padding: '25px',
            borderRadius: '12px',
            color: '#fff',
            boxShadow: '0 5px 14px rgba(0,0,0,0.3)'
          }}
        >
          <h3 style={{ fontWeight: 'bold', color: '#00ffaa' }}>Key Contributions – Professional Experience</h3>
          <p style={{ fontStyle: 'italic', color: '#aaa' }}>Tech Mahindra – LIC ePGS Project | 2019–2024</p>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {experiences.map((item, index) => (
              <div
                key={index}
                onClick={() => setModalContent(item)}
                style={{ cursor: 'pointer', color: '#ffffff' }}
              >
                ✅ <span style={{ textDecoration: 'underline' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Block */}
        <motion.div
          className="sdlc-card"
          style={{
            width: '90%',
            backgroundColor: '#1f2633',
            padding: '25px',
            borderRadius: '12px',
            color: '#fff',
            boxShadow: '0 5px 14px rgba(0,0,0,0.3)'
          }}
        >
          <h3 style={{ fontWeight: 'bold', color: '#66b2ff' }}>Education – Data Engineering Track</h3>
          <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {education.map((item, index) => (
              <div
                key={index}
                onClick={() => setModalContent(item)}
                style={{ cursor: 'pointer', color: '#ffffff' }}
              >
                <span style={{ textDecoration: 'underline' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Combined Modal */}
        {modalContent && (
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#333',
              padding: '30px',
              borderRadius: '10px',
              zIndex: 9999,
              color: '#fff',
              width: '80%',
              maxWidth: '600px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.5)'
            }}
          >
            <h3 style={{ marginBottom: '10px', color: '#00ffaa' }}>{modalContent.title}</h3>
            <p>{modalContent.details}</p>
            <button onClick={() => setModalContent(null)} style={{ marginTop: '20px', backgroundColor: '#00ffaa', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', color: '#000' }}>
              Close
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default DataEngineering;