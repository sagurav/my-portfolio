import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const phases = [
  {
    title: 'Requirement Gathering',
    period: 'Dec 2019 – May 2020',
    items: [
      'Maandhan requirement gathering',
      'Integration and reporting requirement gathering',
      'Annuity requirement gathering',
      'Created SRS (Software requirement specification document)',
      'Created Wireframe using Mock flow',
    ]
  },
  {
    title: 'Enterprise Design',
    period: 'Feb 2020 – July 2020',
    items: [
      'Created end-to-end design documents and took signoffs (Maandhan & Swavalamban)',
      'Created data models for Maandhana, Swavalamban and Girl Child schemes',
      'Created designs for Integration and Pentaho ETL requirements',
    ]
  },
  {
    title: 'Development',
    period: 'Mar 2020 – Aug 2025',
    items: [
      'Developed UI screens with Angular and backend APIs with Java',
      'Developed Fuse APIs for Integration',
      'Built complete Data Engineering solutions using Pentaho BI, SQL, PL/SQL',
      'Developed big data batch jobs with ETL',
      'Developed Reports and Dashboards',
    ]
  },
  {
    title: 'Testing',
    period: 'Jun 2020 – Aug 2025',
    items: [
      'Created test cases for Maandhan',
      'ETL batch process testing',
      'Business Intelligence testing',
    ]
  },
  {
    title: 'Deployment',
    period: 'Feb 2020 – Aug 2025',
    items: [
      'Deployed WARs across host-to-host systems',
      'Server setup for apps (Dev to Prod DR) on AWS and RHEL 7.5',
      'CI/CD pipelines for BI solutions',
      'Wrote server build scripts for full RHEL 7.x setup',
    ]
  },
];

const SDLC = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="left-column">
        <h1 style={{ color: '#ffffff' }}>Software Development Life Cycle (SDLC)</h1>
        <p style={{ marginTop: '10px', marginBottom: '20px', color: '#d1d1d1' }}>
          A real-world breakdown of phases from requirement to deployment.
        </p>
      </div>

      {/* Phase cards layout */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="sdlc-card"
            style={{
              flex: '1 1 28%',
              minWidth: '280px',
              backgroundColor: '#2b2e3c',
              padding: '20px',
              borderRadius: '10px',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <h3 style={{ fontWeight: 'bold', color: '#66b2ff' }}>{phase.title}</h3>
            <p style={{ fontWeight: '600', color: '#ccc' }}>{phase.period}</p>
            <ol style={{ marginTop: '10px', paddingLeft: '20px' }}>
              {phase.items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '8px', color: '#f0f0f0' }}>{item}</li>
              ))}
            </ol>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SDLC;