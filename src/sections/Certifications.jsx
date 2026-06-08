import "../styles/certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "Internship Completion Certificate",
      organization: "Imaginnovate Tech Solutions",
      image: "/internshipcertificate.jpg",
    },

    {
      title: "Professional Experience Letter",
      organization: "Imaginnovate Tech Solutions",
      image: "/experienceLetter.jpg",
    },

    {
      title: "UI Full Stack Web Development",
      organization: "Naresh i Technologies",
      image: "/nareshITCertificate.jpg",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-header">
        <p className="section-subtitle">Professional Credentials</p>

        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>
      </div>

      <div className="certifications-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.image} alt={cert.title} />

            <div className="certificate-content">
              <h3>{cert.title}</h3>

              <p>{cert.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
