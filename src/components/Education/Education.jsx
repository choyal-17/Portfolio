import "./Education.css";

const education = [
  {
    degree: "Masters of Computer Application (MCA)",
    institution: "National Institute of Technology, Kurukshetra",
    year: "August 2024 - July 2027",
    score: "CGPA - 7.6 (Current)",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Annie Besant College, University - DAVV",
    year: "August 2021 - July 2024",
    score: "CGPA - 8.25",
  },
  {
    degree: "Class XII (Higher Secondary)",
    institution: "Lakshya Central H.S. School, Rajgarh",
    year: "2021",
    score: "Percentage - 94%",
  },
  {
    degree: "Class X (Secondary School)",
    institution: "New Talent Public H.S. School, Rajgarh",
    year: "2019",
    score: "Percentage - 91.6%",
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
              <h4>{item.institution}</h4>
              <p className="year">{item.year}</p>
              <p className="cgpa">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;