import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SDLC.css';

const phases = [
  {
    title: 'Requirement Gathering',
    period: 'Dec 2019 – May 2020',
    items: [
      'Requirement gathering forfunctional streams',
      'Integration and reporting requirement gathering',
      'Annuity requirement gathering for extraction process and functional process',
      'Created SRS (Software requirement specification document)',
      'Created Wireframe using Mock flow',
    ]
  },
  {
    title: 'Enterprise Design',
    period: 'Feb 2020 – July 2020',
    items: [
      'Created end-to-end High Level design documents and took signoff(Functional streams) )',
      'Created data models and enterprise level schemas for 3+ functional streams',
      'Created designs for Integration and Pentaho ETL requirements(Integration Specification document)',
    ]
  },
  {
    title: 'Development',
    period: 'Mar 2020 – Present',
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
    period: 'Jun 2020 – Present',
    items: [
      'Created test cases for Maandhan',
      'ETL batch process testing',
      'Business Intelligence testing',
    ]
  },
  {
    title: 'Deployment',
    period: 'Feb 2020 – Present',
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
        <h1 className="sdlc-heading">Software Development Life Cycle (SDLC)</h1>
        <p className="sdlc-subtext">
          A real-world breakdown of phases from requirement to deployment.
        </p>
      </div>

      <div className="sdlc-container">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="sdlc-card"
          >
            <h3 className="sdlc-title">{phase.title}</h3>
            <p className="sdlc-period">{phase.period}</p>
            <ol className="sdlc-list">
              {phase.items.map((item, idx) => (
                <li key={idx} className="sdlc-list-item">{item}</li>
              ))}
            </ol>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SDLC;
