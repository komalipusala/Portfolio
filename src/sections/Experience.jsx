import "../styles/experience.css";

function Experience() {
  const experiences = [
    {
      role: "Trainee Software Engineer",
      company: "Imaginnovate Tech Solutions Pvt Ltd",
      location: "Visakhapatnam, Andhra Pradesh",
      duration: "Sep 2024 – May 2025",

      description:
        "Built backend applications and REST APIs while gaining hands-on experience in enterprise development, database integration, API testing, and collaborative development practices.",
    },

    {
      role: "Software Engineer",
      company: "Imaginnovate Tech Solutions Pvt Ltd",
      location: "Visakhapatnam, Andhra Pradesh",
      duration: "Jun 2025 – Sep 2025",

      description:
        "Worked on the JB Hunt Visibility Mobile Services application, contributing to frontend enhancements and backend services including push notification features for mobile users. Collaborated in Agile development and real-time project workflows.",
    },

    {
      role: "Freelance Web Developer",
      company: "AAPS Placements Training & Consulting Services",
      location: "Remote",
      duration: "Dec 2025 – Present",

      description:
        "Designed and developed a responsive training and consulting website with a modern user interface and end-to-end functionality for client requirements.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <p className="section-subtitle">Professional Journey</p>

        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <span className="duration">{exp.duration}</span>

            <h3>{exp.role}</h3>

            <h4>{exp.company}</h4>

            <p className="location">{exp.location}</p>

            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
