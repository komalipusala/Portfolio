import "../styles/skills.css";

import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

function Skills() {
  const coreSkills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  const databases = [
    { name: "SQL Server", icon: <DiMsqlServer /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Swagger", icon: <SiSwagger /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p className="section-subtitle">What I Work With</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
      </div>

      {/* Core Technologies */}
      <div className="skills-category">
        <h3>Core Technologies</h3>

        <div className="skills-grid">
          {coreSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="skills-category">
        <h3>Databases</h3>

        <div className="skills-grid">
          {databases.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="skills-category">
        <h3>Tools & Platforms</h3>

        <div className="skills-grid">
          {tools.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
