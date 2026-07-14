import "../style/Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Data & Analytics",
      skills: [
        "Python",
        "SQL",
        "BigQuery",
        "Pandas",
        "Power BI",
        "Tableau",
        "Excel",
        "Data Visualization",
        "Customer Segmentation",
      ],
    },
    {
      title: "Business, Technology & Strategy",
      skills: [
        "Strategic Account Management",
        "Technology Solution Selling",
        "Business Needs Assessment",
        "Solution Alignment",
        "Stakeholder Management",
        "Business Development",
        "Go-to-Market Strategy",
        "Market Research",
        "Cloud Solutions",
        "Data Center Solutions",
        "Cybersecurity Solutions",
        "AI & GPU Infrastructure",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">CAPABILITIES</p>
          <h2>Skills & Expertise</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;