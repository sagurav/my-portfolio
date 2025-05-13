import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const devopsExperience = [
  {
    label: '✅ Built CI/CD Pipelines using Jenkins + Ansible',
    title: 'CI/CD Pipelines – Jenkins & Ansible',
    details: 'Built automated CI/CD pipelines for deploying Java backend and Pentaho BI on Red Hat servers using Jenkins and Ansible. Supported multi-environment rollout and rollback.'
  },
  {
    label: '✅ Created CRM-Based IP Whitelisting Forms',
    title: 'IP Whitelisting – CRM Form Integration',
    details: 'Created custom CRM interface for managing secure IP whitelisting workflows. Integrated approval and validation logic for access provisioning to servers and services.'
  },
  {
    label: '✅ Handled Infrastructure Setup on Red Hat Servers',
    title: 'Infrastructure Setup – Red Hat',
    details: 'Configured servers with Pentaho BI, Red Hat Fuse, and monitoring services. Handled setup and system hardening for integration pipelines.'
  },
  {
    label: '✅ Performed Disaster Recovery (DR) Drills',
    title: 'Disaster Recovery (DR) Simulations',
    details: 'Conducted full DR drills for critical systems. Validated backup/restore, failover tests, and recovery documentation. Ensured compliance and recovery audit support.'
  },
  {
    label: '✅ Worked as AWS Admin (initial phase)',
    title: 'AWS Admin Responsibilities',
    details: 'Managed EC2, S3, IAM, VPC setups for backend infrastructure before migration to Red Hat. Controlled access policies and initial devops configurations.'
  },
  {
    label: '✅ Setup Server Jobs using Shell Scripts',
    title: 'Shell-Based Server Automation',
    details: 'Created cron jobs, log rotation scripts, restart daemons, and job alert automation using Linux Shell Scripting. Reduced manual errors and improved service uptime.'
  },
  {
    label: '✅ Integrated DevOps flow into BI + Data Engineering',
    title: 'End-to-End DevOps for BI/DE',
    details: 'Integrated DevOps lifecycle into BI + ETL pipelines with Git, Jenkins, Ansible for versioning, testing, release, and monitoring.'
  },
  {
    label: '✅ Monitored Uptime using Nagios',
    title: 'System Monitoring with Nagios',
    details: 'Configured Nagios for resource alerts, disk/memory/CPU checks, and service monitoring. Enabled proactive issue identification and alerting.'
  },
  {
    label: '✅ Designed and executed AWS Architectural Setup',
    title: 'AWS Architecture for Capstone',
    details: 'Created secure, scalable architecture for full-stack video compressor app using S3, EC2, ECS, ALB, API Gateway, CloudFront, IAM. Entire design implemented independently as part of QUT capstone.'
  }
];

const devopsEducation = [
  {
    label: '✅ Designed full AWS Architecture for Video Compressor App',
    title: 'Capstone AWS Infrastructure Design',
    details: 'Deployed a production-grade video compression platform on AWS. Used EC2, S3, ECS, Load Balancer, CloudFront, IAM, API Gateway. Built entire architecture and deployment flow independently with DevOps practices.'
  },
  {
    label: '✅ Applied AFL in Cybersecurity subject for testing',
    title: 'Security Project – AFL Implementation',
    details: 'Used American Fuzzy Lop (AFL) tool in cybersecurity course to test vulnerabilities in C-based code. Simulated attacks and identified crashes using fuzzing methodology to strengthen secure coding practice.'
  }
];

const DevOpsInfra = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="left-column">
        <h1 style={{ color: '#ffffff' }}>DevOps & Infrastructure</h1>
        <p style={{ color: '#cccccc' }}>LIC ePGS + Capstone Project Contributions | Red Hat + AWS Expertise</p>
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
          <h3 style={{ fontWeight: 'bold', color: '#00ffaa' }}>Professional Experience – DevOps & Infra</h3>
          <p style={{ fontStyle: 'italic', color: '#aaa' }}>Tech Mahindra – LIC ePGS Project | 2019–2024</p>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {devopsExperience.map((item, index) => (
              <div
                key={index}
                onClick={() => setModalContent(item)}
                style={{ cursor: 'pointer', color: '#ffffff',textDecoration: 'underline' }}
              >
                {item.label}
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
          <h3 style={{ fontWeight: 'bold', color: '#66b2ff' }}>DevOps Education & Capstone Projects</h3>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {devopsEducation.map((item, index) => (
              <div
                key={index}
                onClick={() => setModalContent(item)}
                style={{ cursor: 'pointer', color: '#ffffff', textDecoration: 'underline' }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
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

export default DevOpsInfra;