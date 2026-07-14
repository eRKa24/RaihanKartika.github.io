import "../style/Project.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">SELECTED WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          <a
            href="/projects/cpaas-dashboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <article className="project-card">
              <p className="project-category">
                DATA ANALYTICS
              </p>

              <h3>CPaaS Performance Dashboard</h3>

              <p className="project-description">
                Analyzed multi-channel CPaaS performance across WhatsApp,
                SMS, Email, and Call services to identify revenue concentration,
                channel performance, and customer contribution patterns.
              </p>

              <div className="project-technologies">
                <span>SQL</span>
                <span>BigQuery</span>
                <span>Python</span>
                <span>Tableau</span>
              </div>

              <p className="project-view">
                View Project →
              </p>
            </article>
          </a>


          <a
            href="/projects/customer-segmentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <article className="project-card">
              <p className="project-category">
                MACHINE LEARNING
              </p>

              <h3>Customer Segmentation Analysis</h3>

              <p className="project-description">
                Developed customer segmentation models using clustering
                techniques to identify customer behavior patterns and support
                data-driven business strategies.
              </p>

              <div className="project-technologies">
                <span>Python</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
                <span>K-Means</span>
              </div>

              <p className="project-view">
                View Project →
              </p>
            </article>
          </a>


          <a
            href="/projects/film-industry-gtm.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <article className="project-card">
              <p className="project-category">
                BUSINESS & TECHNOLOGY STRATEGY
              </p>

              <h3>Indonesian Film Industry GTM Strategy</h3>

              <p className="project-description">
                Developed a go-to-market strategy for GPU infrastructure
                services by analyzing industry growth, VFX production
                challenges, market opportunities, and potential early adopters.
              </p>

              <div className="project-technologies">
                <span>Market Research</span>
                <span>GPU Cloud</span>
                <span>Data Analysis</span>
                <span>GTM Strategy</span>
              </div>

              <p className="project-view">
                View Project →
              </p>
            </article>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;