import React from 'react';
import { Code, Palette, Database, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive web applications using React, JavaScript, and modern CSS frameworks.',
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Designing and implementing efficient database solutions with strong understanding of SQL and data modeling.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive user interfaces with focus on accessibility and user experience best practices.',
    },
    {
      icon: Users,
      title: 'Systems Analysis',
      description: 'Analyzing business requirements and designing comprehensive information systems solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Computer Information Systems student with a passion for frontend development and innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                I'm currently pursuing my degree in Computer Information Systems at Monroe University, 
                where I've developed a strong foundation in both technical and analytical skills. My 
                academic journey has been focused on understanding how technology can solve real-world 
                business problems.
              </p>
              <p>
                As a frontend developer, I specialize in creating user-friendly web applications using 
                React and modern JavaScript. My coursework in Database Management Systems, Object-Oriented 
                Programming, and Systems Analysis has given me a comprehensive understanding of software 
                development from both technical and business perspectives.
              </p>
              <p>
                Through projects like my Amazon Clone and Apple Database Management System, I've gained 
                hands-on experience in full-stack development, database design, and project management. 
                I'm passionate about creating technology solutions that are both functional and accessible.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/documents/about_me.png" 
                alt="Computer Information Systems"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-200">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{highlight.title}</h4>
              <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;