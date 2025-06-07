import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & DevOps',
    design: 'Design'
  };

  const categoryColors = {
    frontend: 'from-cyan-500 to-blue-500',
    backend: 'from-green-500 to-emerald-500',
    tools: 'from-purple-500 to-violet-500',
    design: 'from-orange-500 to-red-500'
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, title]) => (
            <div key={category} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{title}</h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${categoryColors[skill.category]} h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[ 'Git', 'Jira', 'Slack'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;