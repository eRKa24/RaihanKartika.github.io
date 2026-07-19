import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Raihan Kartika. Built with React.</p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/raihan-kartika-55699a1ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="#top">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;