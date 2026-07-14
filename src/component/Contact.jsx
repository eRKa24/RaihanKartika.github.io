import "../style/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <p className="section-label">LET'S CONNECT</p>

        <h2>Interested in Working Together?</h2>

        <p className="contact-description">
          I'm open to opportunities where I can contribute at the intersection
          of business, technology, and data. Feel free to reach out to discuss
          opportunities, projects, or potential collaborations.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:your-email@gmail.com"
            className="contact-primary"
          >
            Get In Touch
          </a>

          <a
            href="#"
            className="contact-secondary"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;