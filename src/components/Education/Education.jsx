import "./Education.css";

const education = [
  {
    degree: "Masters of Computer Application (MCA)",
    college: "National Institute of Technology, Kurukshetra",
    year: "August 2024 - July 2027",
    cgpa: "CGPA - 7.6 (Current)",
  },
  {
    degree: "Bachelor of Computer Science",
    college: "Annie Besant College, University - DAVV",
    year: "August 2021 - July 2024",
    cgpa: "CGPA - 8.25",
  },
  {
    degree: "Class XII (Higher Secondary)",
    college: "Lakshya Central H.S. School, Rajgarh",
    year: "2021",
    cgpa: "Percentage - 94%",
  },
  {
    degree: "Class X (Secondary School)",
    college: "New Talent H.S. School, Rajgarh",
    year: "2019",
    cgpa: "Percentage - 91.6%",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="left-bar"></div>

            <div className="education-content">
              <h3>{item.degree}</h3>
              <h4>{item.college}</h4>
              <p className="year">{item.year}</p>
              <p className="cgpa">{item.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;