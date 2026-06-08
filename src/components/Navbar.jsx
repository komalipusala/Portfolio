import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <h2>KR</h2>
      </div>
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          Projects
        </Link>

        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          Experience
        </Link>

        <Link
          to="certifications"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          Certifications
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <HiMenuAlt3 />
      </div>
    </header>
  );
}

export default Navbar;
