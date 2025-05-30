import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/SoftwareEngineering.css';

const softwarePoints = [
  {
    label: 'Requirement Gathering & Functional Design',
    title: 'Requirement Gathering & Functional Design',
    details: 'Gathered, documented, and finalized requirements for enterprise-level insurance modules including Renewal, Policy Issuance, and Loan systems. Translated business goals into technical workflows and ensured validation with stakeholders.'
  },
  {
    label: 'Full Stack Development using Angular, Spring Boot, Java, HTML, and Bootstrap',
    title: 'Full Stack Development',
    details: 'Built dynamic insurance applications using Angular on frontend and Spring Boot with Java on backend. Applied Bootstrap for responsive UI design and implemented secure RESTful services. Delivered scalable and reusable full-stack components.'
  },
  {
    label: 'Backend API Design & Integration using Java (Spring Boot) and Red Hat Fuse',
    title: 'Backend API Design & Red Hat Fuse',
    details: 'Designed backend microservices with Spring Boot and integrated them using Red Hat Fuse. Managed APIs across distributed services ensuring secure, scalable, and modular architecture supporting 3-scale deployment.'
  },
  {
    label: 'Handled and deployed Fuse Integration APIs to RedHat OCP , 3 scale',
    title: 'RedHat Fuse Integration Deployment',
    details: 'Packaged and deployed Red Hat Fuse-based integration APIs onto Red Hat OpenShift Container Platform (OCP). Managed 3scale gateway configurations for external exposure with CI/CD support.'
  },
  {
    label: 'Supported Backend Services with PL/SQL',
    title: 'Backend Services & PL/SQL',
    details: 'Implemented backend database logic using PL/SQL. Created optimized queries, packages, and procedures to support insurance operations and reporting. Ensured fast access and transaction consistency.'
  }
];

const projects = [
  {
    label: 'Created web & mobile apps using React & React Native',
    title: 'React and React Native Projects',
    details: 'Designed and developed responsive web pages and mobile applications using React and React Native. Demonstrated frontend UI/UX expertise while implementing RESTful API integration and reusable components.'
  },
  {
    label: 'Delivered IT project using WordPress for a startup',
    title: 'WordPress Project for Startup',
    details: 'Built and delivered a complete business website for a new startup using WordPress. Customized themes, added functionality using plugins, and supported content and SEO optimization.'
  },
  {
    label: 'Developed and deployed Video Compressor App on AWS',
    title: 'Video Compressor – React + AWS Architecture',
    details: 'Built a video compression platform using React, FFmpeg, and Node.js. Deployed using scalable AWS architecture with S3, EC2, ECS, Load Balancer, API Gateway, CloudFront, and IAM. Designed full DevOps and backend architecture independently.'
  }
];

const SoftwareEngineering = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="left-column">
        <h1 style={{ color: '#ffffff' }}>Software Engineering</h1>
        <p style={{ color: '#cccccc' }}>LIC ePGS Project – Application Engineering & Education Experience</p>
      </div>

      <div className="software-container">
        {/* Experience Block */}
        <motion.div className="sdlc-card">
          <h3 style={{ color: '#00ffaa' }}>Key Contributions – Software Engineering Experience</h3>
          <p style={{ fontStyle: 'italic', color: '#aaa' }}>Tech Mahindra – LIC ePGS Project | 2019–2024</p>
          <div className="list-block">
            {softwarePoints.map((item, index) => (
              <div key={index} onClick={() => setModalContent(item)} className="list-item">
                <span className="tick">✅</span>
                <span className="label-text">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Block */}
        <motion.div className="sdlc-card">
          <h3 style={{ color: '#66b2ff' }}>Software Projects & Education</h3>
          <div className="list-block">
            {projects.map((item, index) => (
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

export default SoftwareEngineering;
