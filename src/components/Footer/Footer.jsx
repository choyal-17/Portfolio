import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-content">
          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>

          {/* Let's Connect */}
          <div className="footer-social">
            <h3>Let's Connect</h3>

            <div className="social-icons">
              <a
                href="https://github.com/choyal-17"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ayushi-choyal-49681a322/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:choyalayushi@gmail.com" title="Email">
                <FaEnvelope />
              </a>

              <a
                href="https://leetcode.com/u/Ayushichoyal17/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <p className="copyright">
          © 2026 Ayushi Choyal. All Rights Reserved.
        </p>
      </footer>

      {/* Feedback Button */}
      <a
        href="mailto:choyalayushi@gmail.com?subject=Portfolio Feedback&body=Hi Ayushi,%0A%0AI would like to share my feedback about your portfolio."
        className="feedback-btn"
      >
        <FaCommentDots />
        <span>Feedback</span>
      </a>
    </>
  );
}

export default Footer;