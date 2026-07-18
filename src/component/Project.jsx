import { useState } from "react";
import "../style/Project.css";
import { projects } from "../data/ProjectData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleProjectClick = (project) => {
    // Click active project again to close it
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
      setCurrentSlide(0);
      return;
    }

    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (
      currentSlide <
      selectedProject.slides.length - 1
    ) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">
            SELECTED WORK
          </p>

          <h2>Featured Projects</h2>
        </div>

        <div
          className={`projects-layout ${
            selectedProject ? "expanded" : ""
          }`}
        >

          {/* LEFT SIDE */}

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                key={project.id}
                className={`project-card ${
                  selectedProject?.id === project.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleProjectClick(project)
                }
              >

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                {!selectedProject && (
                  <>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-technologies">
                      {project.technologies.map(
                        (tech) => (
                          <span key={tech}>
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    <p className="project-view">
                      View Project →
                    </p>
                  </>
                )}

              </article>

            ))}

          </div>

          {/* RIGHT SIDE */}

          {selectedProject && (

            <div className="project-detail">

            <div className="project-header">

              <button
                className="back-button"
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentSlide(0);
                }}
              >
                Back
              </button>

              <div className="project-title">

                <p className="project-category">
                  {selectedProject.category}
                </p>

                <h2>{selectedProject.title}</h2>

              </div>

            </div>

              <img
                className="slide-image"
                src={
                  selectedProject.slides[currentSlide]
                }
                alt={`Slide ${
                  currentSlide + 1
                }`}
              />

              <div className="slide-navigation">

                <button
                  onClick={previousSlide}
                  disabled={currentSlide === 0}
                >
                  ← Previous
                </button>

                <span>

                  {currentSlide + 1}
                  {" / "}
                  {
                    selectedProject.slides.length
                  }

                </span>

                <button
                  onClick={nextSlide}
                  disabled={
                    currentSlide ===
                    selectedProject.slides.length -
                      1
                  }
                >
                  Next →
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Projects;