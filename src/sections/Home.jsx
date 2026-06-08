import "../styles/home.css";
import { TypeAnimation } from "react-type-animation";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-image">
          <img src="/profile.png" alt="Komala Rani" />
        </div>
        <div className="home-content">
          <h4>Hello, It's Me</h4>

          <h1>
            Komala <span>Rani</span>
          </h1>

          <h2>
            And I'm a{" "}
            <span className="typing-text">
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="home-description">
            Passionate software developer focused on building modern web
            applications and scalable backend solutions.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pusalakomalarani/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/komalipusala"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:komalipusala123@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <div className="home-buttons">
            <a href="/resume.pdf" download className="resume-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
