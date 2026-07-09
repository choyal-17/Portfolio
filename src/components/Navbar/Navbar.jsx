import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>

      <div className="logo">
        Ayushi Choyal
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">HOME</a>
        </li>

        <li>
          <a href="#about">ABOUT</a>
        </li>

        <li>
          <a href="#skills">SKILLS</a>
        </li>

        <li>
          <a href="#projects">PROJECTS</a>
        </li>

        <li>
          <a href="#education">EDUCATION</a>
        </li>

        <li>
          <a href="#journey">ACHIEVEMENTS</a>
        </li>

      </ul>

      <a href="#contact" className="hire-btn">
        HIRE ME
      </a>

    </nav>
  );
};

export default Navbar;