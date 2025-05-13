import React from 'react';
import '../styles/About.css';
import profilePicture from '../assests/ProfileImageABT.jpg';

const About = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '60px 5%',
      background: 'linear-gradient(135deg, #1c1c1c 50%, #2b2b2b 50%)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#f1f1f1'
    }}>
      {/* LEFT COLUMN - IMAGE + NAME */}
      <div style={{ flex: '1 1 400px', maxWidth: '500px', paddingRight: '40px' }}>
        <img
          src={profilePicture}
          alt="Suraj Adhikrao Gurav"
          style={{
            width: '100%',
            borderRadius: '50%',
            border: '4px solid #fff',
            boxShadow: '0 6px 30px rgba(0,0,0,0.5)'
          }}
        />
        <h1 style={{ marginTop: '20px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
          Suraj Adhikrao Gurav
        </h1>
        <h3 style={{ fontWeight: 'normal', color: '#ccc', textAlign: 'center' }}>Software Engineer | Data Engineer</h3>
      </div>

      {/* RIGHT COLUMN - ABOUT TEXT */}
      <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          borderBottom: '2px solid #66ccff',
          display: 'inline-block',
          marginBottom: '25px',
          color: '#66ccff'
        }}>
          About Me
        </h2>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '20px' }}>
          I’m <strong>Suraj Adhikrao Gurav</strong>, a Software Engineer and Data Integration Lead with over 4.5 years of enterprise experience, spanning software development, full-stack solutions, data pipelines, and integration leadership.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '20px' }}>
          I have successfully led end-to-end SDLC processes in Agile environments, built scalable backend and frontend applications with Java, Spring Boot, and Angular, and delivered BI systems using Pentaho (PDI, PRD, CDE).
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '20px' }}>
          My core strength lies in <strong>data engineering</strong> — from crafting complex ETL workflows and data migration strategies, to developing optimized SQL/PLSQL scripts for real-time reporting. I've built secure, scalable cloud architectures on AWS (EC2, ECS, S3, API Gateway, CloudFront) and led DevOps pipelines using Jenkins and Ansible.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '20px' }}>
          I recently earned my <strong>Master’s in IT (Software Development)</strong> from QUT with Dean’s Commendation, and led a capstone project designing a production-grade video compressor app using React and AWS microservices.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
          Beyond the keyboard, I bring the same energy to cricket, carrom, and guitar strings as I do to server logs and dashboards. Let's build something impactful — with code that scales and solutions that matter.
        </p>
      </div>
    </div>
  );
};

export default About;
