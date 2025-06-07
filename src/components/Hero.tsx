import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl">
              <img 
                src="/documents/about_me.png" 
                alt="Dazurna Warner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Dazurna Warner
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Frontend Developer & Computer Information Systems Student
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and studying Computer Information Systems 
            at Monroe University. Specializing in frontend development with a strong foundation in 
            database management and systems analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('schoolwork')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg font-medium hover:bg-slate-800 hover:border-slate-500 transform hover:scale-105 transition-all duration-200"
            >
              Academic Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/Dazzlebot02" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all duration-200 group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="#" 
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all duration-200 group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="#contact" 
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all duration-200 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="/documents/Dazurna_Warner_Resume.docx" 
              download
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all duration-200 group"
            >
              <FileText className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;