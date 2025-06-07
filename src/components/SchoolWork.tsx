import React, { useState } from 'react';
import { BookOpen, ExternalLink, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { courses } from '../data/portfolio';

const SchoolWork: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleCourse = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <section id="schoolwork" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Academic Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive coursework in Computer Information Systems at Monroe University
          </p>
        </div>

        <div className="space-y-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Header */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleCourse(course.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{course.name}</h3>
                      <p className="text-slate-600">{course.code}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-500">
                      {expandedCourse === course.id ? 'Collapse' : 'Expand'}
                    </span>
                    {expandedCourse === course.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              {expandedCourse === course.id && (
                <div className="px-6 pb-6 border-t border-slate-100">
                  {/* Course Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Course Description</h4>
                    <p className="text-slate-700 leading-relaxed">{course.description}</p>
                  </div>

                  {/* Reflection */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Reflection</h4>
                    <div className="text-slate-700 leading-relaxed space-y-4">
                      {course.reflection.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Sample Projects */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Sample Projects</h4>
                    <div className="space-y-3">
                      {course.projects.map((project, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-cyan-600" />
                            <div>
                              <h5 className="font-medium text-slate-900">{project.name}</h5>
                              <p className="text-sm text-slate-600">{project.description}</p>
                            </div>
                          </div>
                          {project.url && project.url !== '#' && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 text-cyan-600 hover:text-cyan-700 transition-colors duration-200"
                            >
                              <span className="text-sm font-medium">View</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16">
          <a
            href="/documents/Dazurna_Warner_Resume.pdf"
            download
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SchoolWork;