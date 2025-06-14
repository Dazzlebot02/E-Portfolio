import React from 'react';
import { Calendar, FileText, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-orange-500"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-white border-4 border-cyan-500 rounded-full shadow-lg"></div>

              {/* Content */}
              <div className="ml-16 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-cyan-600 font-semibold mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Current Position Badge */}
                {exp.current && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full">
                      Current Position
                    </span>
                  </div>
                )}

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-slate-700">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume */}
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

export default Experience;