import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${show ? "show" : "hide"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">Ayushi Choyal</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            HOME
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            SKILLS
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </a>
        </li>

        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            EDUCATION
          </a>
        </li>

        <li>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            ACHIEVEMENTS
          </a>
        </li>
      </ul>

      <a href="#contact" className="hire-btn">
        HIRE ME
      </a>
    </nav>
  );
};

export default Navbar;