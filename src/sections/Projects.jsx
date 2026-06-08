import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      title: "Hotel Booking System",
      description:
        "Built a hotel booking system with room booking, user management, and hotel management functionalities.",

      tech: "Java • Spring Boot • SQL Server • Postman",
    },

    {
      title: "E-Commerce Application",
      description:
        "Developed an e-commerce backend with products, categories, cart, orders, and scalable REST APIs.",

      tech: "Java • Spring Boot • SQL Server  • Swagger",
    },

    {
      title: "AAPS Placements Training & Consulting Services",
      description:
        "Designed and developed a responsive placement and training website with backend integration.",

      tech: "React.js • Node.js • Express.js • MongoDB",
    },

    {
      title: "Memory Game",
      description:
        "Developed a memory card matching game during a React.js workshop where users match cards by remembering positions and interactions.",

      tech: "React.js • JavaScript • CSS",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p className="section-subtitle">My Recent Work</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech-stack">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
