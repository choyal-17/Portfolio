import "./Hero.css";
import profile from "../Hero/image.png";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { LuDownload } from "react-icons/lu";


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <motion.div
            className="col-lg-6 hero-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1>Hello,I'm Ayushi  Choyal</h1>

            <h2 className="typing-text">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Frontend Developer",
                  1500,
                  "React Developer",
                  1500,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                cursor={false}
              />
            </h2>

            {/* <p>
              Passionate Full Stack Developer pursuing MCA at NIT Kurukshetra.
              I enjoy building responsive websites and solving real-world
              problems with modern technologies.
            </p> */}

            <div className="hero-buttons">
              <a href="#contact" className="btn-dark">
                Hire Me
              </a>

              <button className="resume-btn">
  Resume
  <LuDownload className="download-icon" />
</button>
            </div>

            {/* Social Icons */}
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
                href="https://leetcode.com/u/Ayushichoyal17/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:choyalayushi@gmail.com"
                title="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="col-lg-6 hero-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-box">
              <img src={profile} alt="Ayushi Choyal" />
            </div>
          </motion.div>

        </div>

        <div className="scroll-down">
          <a href="#about">
            <HiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;