import "../style/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <p className="section-label">MY JOURNEY</p>
          <h2>Professional Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>National Account Manager</h3>
                  <h4>PT Aplikanusa Lintasarta</h4>
                </div>

                <span className="experience-date">
                  Jan 2026 — Present
                </span>
              </div>

              <p className="experience-description">
                Manage strategic enterprise accounts by identifying business and technology challenges, 
                advise clients on the most effective technology solutions, 
                and delivering tailored solutions across connectivity, cloud, data center, cybersecurity, and AI infrastructure, 
                while driving revenue growth and expanding business opportunities for Lintasarta.
              </p>

              <ul className="experience-achievements">
                <li>
                  Collaborate with cross-functional teams, 
                  including solution architects, product specialists, engineers,
                  and operations, to design, validate, and deliver technology solutions aligned with 
                  customer requirements and business objectives.  
                </li>

                <li>
                  Manage a diversified enterprise portfolio across financial services, 
                  utilities, manufacturing, healthcare, and insurance, 
                  developing industry knowledge and adapting technology solutions to different business environments.
                </li>

                <li>
                  Engage business and technology stakeholders to conduct requirements discovery, 
                  identify improvement opportunities, and develop solution recommendations that balance 
                  technical feasibility, business value, and commercial considerations.
                </li>
              </ul>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Product Sale Specialist</h3>
                  <h4>PT IDS Medical Systems Indonesia</h4>
                </div>

                <span className="experience-date">
                  Feb 2025 — Aug 2025
                </span>
              </div>

              <p className="experience-description">
                Managed healthcare accounts by assessing clinical and operational challenges, 
                engaging key stakeholders, and recommending medical technology solutions to support adoption, 
                improve healthcare delivery, and create long-term client value.
              </p>

              <ul className="experience-achievements">
                <li>
                  Recovered approximately 15% of lost market share by analyzing customer needs, 
                  rebuilding key client relationships, and executing strategic account development initiatives.
                </li>

                <li>
                  Educated healthcare stakeholders through product demonstrations and technical discussions, 
                  improving their understanding of medical technologies and supporting informed solution adoption.
                </li>
              </ul>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Field Engineer Intern</h3>
                  <h4>Telkomedika</h4>
                </div>

                <span className="experience-date">
                  Jul 2023 — Sep 2023
                </span>
              </div>

              <p className="experience-description">
                Supported medical equipment inspection, preventive maintenance,
                troubleshooting, and technical documentation within healthcare
                facilities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;