import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm Pusala Komala Rani, a Java Backend Developer with hands-on
            experience in Java, Spring Boot, MySQL, React.js, Node.js, and
            MongoDB.
          </p>

          <p>
            I enjoy building scalable applications, developing RESTful APIs, and
            creating solutions that solve real-world business problems.
            Passionate about continuous learning, I am constantly improving my
            skills in backend and full-stack development while exploring modern
            technologies and industry best practices.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3>B.Tech</h3>
            <p>ECE Graduate</p>
          </div>

          <div className="stat-card">
            <h3>1+</h3>
            <p>Years Learning & Experience</p>
          </div>

          <div className="stat-card">
            <h3>4+</h3>
            <p>Projects Built</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
