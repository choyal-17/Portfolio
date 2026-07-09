import "./About.css";
import aboutImg from "../Hero/image.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about-heading">
          <h2>About</h2>
          <div className="line"></div>
        </div>

        <div className="row align-items-center">

          <motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="about-image">

              <img
                src={aboutImg}
                alt="Ayushi Choyal"
              />

            </div>

          </motion.div>

          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="about-subtitle">
              WHO AM I ?
            </span>

            <h3>
              Passionate Full Stack Developer &
              MCA Student
            </h3>

            <p>
              Hello! I'm <strong>Ayushi Choyal</strong>, currently pursuing
              Master of Computer Applications at
              <strong> National Institute of Technology, Kurukshetra.</strong>

              I enjoy designing modern websites,
              solving DSA problems and building
              scalable MERN Stack applications.
            </p>

            <p>
              I continuously improve my technical
              skills by working on real-world
              projects, learning new technologies
              and exploring software development.
            </p>

            <div className="about-info">

              <div className="info-card">

                <h5>Name</h5>

                <p>Ayushi Choyal</p>

              </div>

              <div className="info-card">

                <h5>Email</h5>

                <p>524410017@nitkkr.ac.in</p>

              </div>

              <div className="info-card">

                <h5>Location</h5>

                <p>Indore</p>

              </div>

              <div className="info-card">

                <h5>Degree</h5>

                <p>MCA</p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;