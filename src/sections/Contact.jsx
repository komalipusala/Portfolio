import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending Message...");

    const formData = new FormData(event.target);

    formData.append("access_key", "ea312247-06c9-4bed-9773-bacac57f2b63");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("Failed to Send Message");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="section-subtitle">Get In Touch</p>

        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <form onSubmit={onSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {result && <span className="result-text">{result}</span>}
        </form>

        <div className="contact-divider"></div>

        <div className="contact-footer">
          <h3>Pusala Komala Rani</h3>

          <p>
            Thank you for visiting my portfolio. Feel free to connect with me
            for job opportunities, collaborations, and professional networking.
          </p>

          <span>© 2026 Pusala Komala Rani. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
