import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Experience from "./component/Experience";
import Projects from "./component/Project";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;