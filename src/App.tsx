import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SchoolWork from './components/SchoolWork';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="schoolwork">
          <SchoolWork />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Dazurna Warner. Computer Information Systems Student at Monroe University.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;