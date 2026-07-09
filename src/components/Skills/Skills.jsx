import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiCplusplus
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    desc: "Structure of modern web pages."
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    desc: "Responsive and attractive UI."
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    desc: "Interactive web applications."
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    desc: "Fast responsive layouts."
  },
  {
    icon: <FaReact />,
    name: "React.js",
    desc: "Reusable UI components."
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    desc: "Backend server development."
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    desc: "REST API development."
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    desc: "NoSQL database management."
  },
  {
    icon: <SiCplusplus />,
    name: "C++",
    desc: "Use Language for Problem solving & DSA."
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    desc: "Version control system."
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    desc: "Project collaboration."
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-heading">
          <h2>My Skills</h2>
          <div className="line"></div>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-inner">

                <div className="skill-front">
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>

                <div className="skill-back">
                  <p>{skill.desc}</p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;