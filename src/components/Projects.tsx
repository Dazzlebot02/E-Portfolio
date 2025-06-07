import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            A showcase of my academic and personal projects demonstrating technical skills and problem-solving abilities
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === 'featured'
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Featured Only
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-700 hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-700 hover:bg-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Course Badge */}
                {project.course && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                      {project.course}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium group/link">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>
                  
                  {/* Quick Links */}
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                        title="View Live Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Dazzlebot02"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;