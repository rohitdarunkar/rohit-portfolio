import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AdditionalProjects from "./components/AdditionalProjects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main id="main-content" className="scroll-container">
        <section className="page-section">
          <Hero />
        </section>

        <section className="page-section">
          <About />
        </section>

        <section className="page-section">
          <Projects />
        </section>

        <section className="page-section">
          <Skills />
        </section>

        <section className="page-section">
          <AdditionalProjects />
        </section>

        <section className="page-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}