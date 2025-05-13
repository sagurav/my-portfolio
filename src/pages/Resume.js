import React from "react";
import "../styles/Resume.css";
import profilePicture from "../assests/Profile.jpg";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container">
        <aside className="sidebar">
          <img src={profilePicture} alt="Suraj Adhikrao Gurav" className="profile-pic" />
          <h1 className="sidebar-name">Suraj Adhikrao Gurav</h1>
          <p className="sidebar-profession"><h3>SOFTWARE ENGINEERING PROFESSIONAL</h3></p>
          <div className="sidebar-profession">
            <h2>Contact Info</h2>
            <p>+61 - 449 700 104</p>
            <p>sgurav0104@gmail.com</p>
            <p>www.linkedin.com/in/suraj-adhikrao-gurav/</p>
          </div>
        </aside>

        <main className="main-content">
          <section className="section overview-summary">
            <h2>Overview Summary</h2>
            <p>
              Versatile and result-oriented software professional with 4.5+ years of
              experience across software development, data engineering, integration,
              and infrastructure. Skilled in SDLC, DevOps, BI tools (Pentaho),
              full stack (Java + Angular), cloud (AWS), and automation. Completed
              MIT (Software Development) from QUT and delivered major projects
              including a full AWS-based video compression app and industry
              solution delivery for LIC and Australian clients.
            </p>
          </section>

          <section className="section education">
            <h2>Education</h2>
            <p>
              Master of Information Technology (Software Development), QUT –
              Feb 2023 to Dec 2024 (Dean’s Commendation)
            </p>
            <p>
              Bachelor of Engineering (Electronics and Telecommunication), Mumbai University – 2014 to 2018
            </p>
          </section>

          <section className="section experience">
            <h2>Professional Experience</h2>

            <div>
              <h3>Senior Software Engineer – Team Lead (Tech Mahindra, Contract) | Jul 2023 – Aug 2024</h3>
              <ul>
                <li>Led a team, implemented automation strategies, and established DevOps for Pentaho setup.</li>
                <li>Designed & deployed new modules, conducted client meetings, and managed delivery ownership.</li>
              </ul>
            </div>

            <div>
              <h3>Software Engineer (Tech Mahindra) | Sept 2019 – Feb 2023</h3>
              <ul>
                <li>Worked across Full Stack Development, BI, and Integrations.</li>
                <li>Created automation modules, Pentaho Dashboards, and deployed APIs to Red Hat Fuse and OCP.</li>
                <li>Gathered requirements and delivered software with documentation & testing ownership.</li>
              </ul>
            </div>
          </section>

          <section className="section skills">
            <h2>Technical Implementation Areas</h2>
            <ul>
              <li><Link to="/sdlc" style={{ color: "#73bbe5", textDecoration: "underline" }}>SDLC</Link></li>
              <li><Link to="/data-engineering" style={{ color: "#73bbe5", textDecoration: "underline" }}>Data Engineering and Data Analytics</Link></li>
              <li><Link to="/software-engineering" style={{ color: "#73bbe5", textDecoration: "underline" }}>Software Engineering</Link></li>
              <li><Link to="/devops-experience" style={{ color: "#73bbe5", textDecoration: "underline" }}>DevOps and Infrastructure</Link></li>
            </ul>
          </section>

          <section className="section tech-skills">
            <h2>Technical Skills</h2>
            <ul>
              <li><strong>SDLC:</strong> Planning, Analysis, Design, Implementation, Testing, Integration, Maintenance</li>
              <li><strong>Methodologies:</strong> Agile, Scrum, Sprint Planning, DevOps Practices</li>
              <li><strong>Full Stack:</strong> Angular, JavaScript, HTML, CSS, React, React Native, Java, Spring Boot, C# (Basic)</li>
              <li><strong>BI Tools:</strong> Pentaho PDI, PRD, CDE for ETL, Reports, Dashboards</li>
              <li><strong>Database:</strong> SQL (Oracle), PL/SQL, Data Modelling, Data Migration</li>
              <li><strong>Data Analytics:</strong> Excel, Python, R, Tableau, Power BI</li>
              <li><strong>Cloud:</strong> AWS (EC2, ECS, S3, API Gateway, CloudFront, CloudWatch, SQS, Route53)</li>
              <li><strong>DevOps:</strong> Jenkins, Ansible, BitBucket, Nagios</li>
              <li><strong>Infra:</strong> Red Hat Fuse, OCP, Linux scripting, Shell Jobs, GAMFT</li>
            </ul>
          </section>

          <section className="section certifications">
            <h2>Certifications</h2>
            <ul>
              <li>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/GRGEWUDDQ16A" target="_blank" rel="noreferrer" style={{ color: "#73bbe5", textDecoration: "underline" }}>
                  Google Data Analytics – Coursera (Nov 2024)
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/ULAFF6FNE8JJ" target="_blank" rel="noreferrer" style={{ color: "#73bbe5", textDecoration: "underline" }}>
                  Google Project Management – Coursera (July 2024)
                </a>
              </li>
            </ul>
          </section>

          <section className="section awards">
            <h2>Awards</h2>
            <ul>
              <li>Dean's Commendation (QUT)</li>
              <li>ACE Award (Tech Mahindra)</li>
              <li>3x Bravo Awards</li>
              <li>Automation Ninja Award</li>
              <li>Letter of Appreciation – Xavier Institute</li>
            </ul>
          </section>

          <section className="section publications">
            <h2>Technical Publications</h2>
            <ul>
              <li>
                IEEE: “Interactive Scene Analysis” – ICRIEECE 2018, DOI:&nbsp;
                <a href="https://doi.org/10.1109/ICRIEECE44171.2018.9008931" target="_blank" rel="noreferrer" style={{ color: "#73bbe5", textDecoration: "underline" }}>
                  10.1109/ICRIEECE44171.2018.9008931
                </a>
              </li>
              <li>
                IJSER: “Interactive Scene Analysis” – Volume 9, Issue 3, March 2018, ISSN 2229-5518
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;