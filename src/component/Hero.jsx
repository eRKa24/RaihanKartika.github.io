import "../style/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Raihan Kartika</h1>
  
        <h2>Technology Consultant & Data Analyst</h2>
        <p>
          Helping businesses solve complex challenges using Cloud,
          Data Analytics, and AI-driven solutions.
        </p>

        <div className="hero-buttons">
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;