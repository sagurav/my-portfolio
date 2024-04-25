import React from "react";
import "../styles/Resume.css"; // Make sure to create and link this new CSS file
import profilePicture from "../assests/Profile.jpg";

const Resume = () => {
  return (
    <div className="resume-container">
      <aside className="sidebar">
        <img
          src={profilePicture}
          alt="Suraj Adhikrao Gurav"
          className="profile-pic"
        />
        <h1 className="sidebar-name">Suraj Adhikrao Gurav</h1>
        <p className="sidebar-profession">
          <h3>SOFTWARE ENGINEERING PROFESSIONAL</h3>
        </p>
        <div className="sidebar-profession">
          <h2>Contact Info </h2>
          <p>+61 - 449 700 104</p>
          <p>sgurav0104@gmail.com</p>
          <p>www.linkedin.com/in/suraj-adhikrao-gurav/</p>
        </div>
      </aside>
      <main className="main-content">
        <section className="section overview-summary">
          <h2>Overview Summary</h2>
          <p>
            Accomplished Software Engineer with over 4.5 years of experience in
            designing and development. Proficient in SDLC, Full stack
            development , BI development , modern Ja frameworks and a strong
            proponent of clean code and agile methodologies. Adept at leading
            development teams and driving project milestones while fostering
            innovative solutions. Known for a proactive approach, strategic
            planning skills, and a continuous learning mindset geared towards
            leveraging technology to solve challenging business problems.
          </p>
        </section>
        <section className="section education">
          <h2>Education</h2>
          <p>
            Master of Information Technology, Queensland University of
            Technology (Feb 2023 - Present)
          </p>
          <p>
            Bachelor of Engineering in Electronics and Telecommunication, Mumbai
            University (2014 - 2018)
          </p>
        </section>
        <section className="section experience">
          <h2>Professional Experience</h2>
          <div>
             <h3>
              Senior Software Engineer(FreeLancer)  | June 2023 -
              Present
            </h3>

            <ul>
              <li>
                Develoing designs and maintaiing enterprise software solutions
                and application servers .
              </li>
              <li>Managing Integration Team</li>
            </ul>
          </div>
         
          <div>
            <h3>Software Engineer | Dec 2021 - Feb 2023</h3>
            <ul>
              <li>Developed and maintained enterprise software solutions.</li>
              <li>
                Received ACE (Associates Consistently Excel) award for
                outstanding contribution.
              </li>
            </ul>
          </div>
           <div>
            <h3>
              Junior Software Engineer | Sept 2019 - Dec 2021
            </h3>
            <ul>
              <li>
                Key responsibilities included gathering requirements, designing
                documents, and implementing software.
              </li>
              <li>
                Promoted to Software Engineer at Automation Ninja due to
                exemplary performance.
              </li>
            </ul>
          </div>
        </section>
        <section className="section skills">
          <h2>Skills</h2>
          <li>
            SDLC - Requiremet Gthering, Designing, Development-Full stack/ Bi
            Developer, Deployments , Devops{" "}
          </li>
          <li>Front-end development - Angular, HTML, CSS, JavaScript</li>
          <li>Java, Spring Boot, and SQL.</li>
          <li>BI full stack - Pentaho BI, Reporting, Dashboading, ETL</li>
          <li>Devops - SCM, Jenkins, Ansible, Jira</li>
        </section>
        <section className="section publications">
          <h2>Technical Publications</h2>
          <li>
            IEEE: Institute of Electrical and Electronics Engineering S.
            Patnaik, V. Wate, S. Gurav, N. Fernandes and A. Bhatkar,
            "Interactive Scene Analysis," 2018 International Conference on
            Recent Innovations in Electrical, Electronics & Communication
            Engineering (ICRIEECE), 2018, pp. 964-969, doi:
            10.1109/ICRIEECE44171.2018.9008931.{" "}
          </li>
          <li>
            IJSER: International Journal of Science & Engineering Research A.
            Bhatkar, N. Fernandes, S. Gurav and V. Wate, “Interactive Scene
            Analysis," 2018 International Journal of Science & Engineering
            Research Volume 9, Issue 3, March – 2018 ISSN 2229-5518
          </li>
        </section>
        <section className="section awards">
          <h2>Awards</h2>
          <li> 3Bravo Awards </li>
          <li>1 Ninja Award</li>
          <li>1 ACE - Associates Consistently Excel </li>
        </section>
      </main>
    </div>
  );
};

export default Resume;
