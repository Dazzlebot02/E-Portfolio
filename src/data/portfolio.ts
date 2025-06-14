import { Project, Experience, Skill, Course } from '../types';

export const skills: Skill[] = [
  { name: 'React', level: 60, category: 'frontend' },
  { name: 'JavaScript', level: 70, category: 'frontend' },
  { name: 'HTML/CSS', level: 50, category: 'frontend' },
  { name: 'Database Management', level: 85, category: 'backend' },
  { name: 'SQL', level: 82, category: 'backend' },
  { name: 'Python', level: 78, category: 'backend' },
  { name: 'Git/GitHub', level: 88, category: 'tools' },
  { name: 'Project Management', level: 85, category: 'tools' },
  { name: 'Figma', level: 80, category: 'design' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Amazon Clone',
    description: 'A full-featured e-commerce platform replicating Amazon\'s core functionality with user authentication, product catalog, shopping cart, and checkout system.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
    liveUrl: '',
    githubUrl: 'https://github.com/Dazzlebot02/AmazonClone.git',
    featured: true,
    course: 'Object Oriented Programming'
  },
  {
    id: 2,
    title: 'Apple Database Management System',
    description: 'Comprehensive database design and implementation project showcasing advanced database concepts, normalization, and query optimization for Apple product management.',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['SQL', 'Database Design', 'ERD', 'Normalization'],
    liveUrl: 'https://docs.google.com/presentation/d/1Qk5btoiFNYUwdXFBp6U-gWFy4wDXCv6ozfiCSauSuhU/edit?usp=sharing',
    githubUrl: '',
    featured: true,
    course: 'Database Management Systems'
  },
  {
    id: 3,
    title: 'Wireless Technology Research',
    description: 'In-depth research project analyzing current wireless technology trends, 5G implementation, and future innovations in wireless communications.',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Research', 'Technical Writing', 'Analysis'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    course: 'Wireless Technology'
  },
  {
    id: 4,
    title: 'IT Project Management Case Study',
    description: 'Comprehensive project management analysis including risk assessment, resource allocation, and implementation strategies for enterprise IT solutions.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Project Management', 'Risk Analysis', 'Documentation'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    course: 'IT Project Management'
  },
  {
    id: 5,
    title: 'Systems Analysis & Design Project',
    description: 'Complete systems analysis and design documentation including requirements gathering, system modeling, and implementation planning.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['UML', 'System Design', 'Requirements Analysis'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    course: 'Systems Analysis and Design'
  },
];

export const courses: Course[] = [
  {
    id: 1,
    name: 'Database Management Systems',
    code: 'IT-330',
    description: 'Comprehensive study of database design principles, SQL programming, normalization techniques, and database administration. Covers relational database theory, entity-relationship modeling, and advanced query optimization.',
    reflection: `This course provided me with a solid foundation in database design and management. Through hands-on projects like the Apple Database Management System, I learned to create efficient database schemas, write complex SQL queries, and understand the importance of data normalization. The course emphasized real-world applications and taught me how databases serve as the backbone of modern applications.

The practical experience gained through designing and implementing database solutions has been invaluable in my development as a computer information systems professional. I particularly enjoyed working with complex relationships and learning how to optimize database performance through proper indexing and query design.

This knowledge has directly contributed to my understanding of backend development and has been essential in projects where data persistence and retrieval are critical components. The skills learned here continue to be relevant in my current work with full-stack development.`,
    projects: [
      {
        name: 'Apple Database Management Project',
        description: 'Designed and implemented a comprehensive database system for Apple product management',
        url: 'https://docs.google.com/presentation/d/1Qk5btoiFNYUwdXFBp6U-gWFy4wDXCv6ozfiCSauSuhU/edit?usp=sharing'
      }
    ]
  },
  {
    id: 2,
    name: 'Object Oriented Programming',
    code: 'IT-280',
    description: 'Introduction to object-oriented programming concepts including classes, objects, inheritance, polymorphism, and encapsulation. Practical application through project-based learning using modern programming languages.',
    reflection: `Object Oriented Programming fundamentally changed how I approach software development. Learning concepts like inheritance, polymorphism, and encapsulation provided me with powerful tools for creating maintainable and scalable code. The Amazon Clone project was particularly challenging and rewarding, as it required implementing complex object relationships and user interactions.

Through this course, I developed a deeper understanding of code organization and design patterns. The hands-on approach helped me grasp abstract concepts by applying them to real-world scenarios. Working on the Amazon Clone taught me about component-based architecture and how to structure large applications effectively.

The problem-solving skills and programming methodologies learned in this course have been fundamental to my growth as a developer. The emphasis on clean, reusable code has influenced my approach to all subsequent programming projects and continues to guide my development practices.`,
    projects: [
      {
        name: 'Amazon Clone E-commerce Platform',
        description: 'Full-featured e-commerce application with user authentication and shopping functionality',
        url: 'https://github.com/Dazzlebot02/AmazonClone.git'
      }
    ]
  },
  {
    id: 3,
    name: 'Wireless Technology',
    code: 'IT-376',
    description: 'Study of wireless communication systems, protocols, and emerging technologies. Covers WiFi, Bluetooth, cellular networks, 5G technology, and IoT applications in modern computing environments.',
    reflection: `The Wireless Technology course opened my eyes to the complex infrastructure that enables our connected world. Studying various wireless protocols and their applications gave me a comprehensive understanding of how devices communicate wirelessly. The research component allowed me to dive deep into emerging technologies like 5G and their potential impact on future applications.

This course was particularly relevant given the increasing importance of mobile and IoT applications in today's technology landscape. Understanding the limitations and capabilities of different wireless technologies has informed my approach to developing applications that need to work across various network conditions and device types.

The knowledge gained about wireless security, signal propagation, and network optimization has been valuable in understanding the broader context of application development. This understanding helps me make better decisions about data usage, offline functionality, and user experience in mobile applications.`,
    projects: [
      {
        name: 'Wireless Technology Research Paper',
        description: 'Comprehensive analysis of current wireless technology trends and future innovations',
        url: '/documents/Wireless_Technology_Research_Paper_APA7.docx'
      }
    ]
  },
  {
    id: 4,
    name: 'IT Project Management',
    code: 'IT-494',
    description: 'Principles and practices of managing IT projects including planning, scheduling, risk management, and team coordination. Emphasis on project lifecycle management and stakeholder communication.',
    reflection: `IT Project Management taught me the critical importance of planning and organization in successful technology implementations. Learning about project lifecycles, risk assessment, and stakeholder management provided me with skills that extend far beyond technical development. The course emphasized the human element of technology projects and how effective communication can make or break a project.

Working through case studies and project scenarios helped me understand the complexities involved in managing technology initiatives. I learned to identify potential risks early, create realistic timelines, and manage resources effectively. These skills have been invaluable in both academic and professional settings.

The project management methodologies and tools introduced in this course have become integral to how I approach any significant undertaking. Whether working on individual projects or collaborating with teams, the structured approach to planning and execution learned here continues to serve me well in delivering successful outcomes.`,
    projects: [
      {
        name: 'IT Project Management Research Paper',
        description: 'Analysis of project management methodologies and best practices in IT environments',
        url: '/documents/IT_Project_Management_Research_Paper.docx'
      }
    ]
  },
  {
    id: 5,
    name: 'Systems Analysis and Design',
    code: 'IT-295',
    description: 'Systematic approach to analyzing business requirements and designing information systems. Covers requirements gathering, system modeling, UML diagrams, and implementation strategies.',
    reflection: `Systems Analysis and Design provided me with a structured methodology for understanding and solving complex business problems through technology. Learning to gather requirements, model systems, and create comprehensive design documentation taught me the importance of thorough planning before implementation. The course emphasized the critical role of understanding user needs and business processes.

The hands-on experience with UML diagrams and system modeling tools gave me practical skills for communicating complex technical concepts to both technical and non-technical stakeholders. This course bridged the gap between business requirements and technical implementation, showing me how to translate real-world needs into system specifications.

The analytical thinking and systematic approach learned in this course have been fundamental to my development as a systems professional. The ability to break down complex problems, identify key requirements, and design appropriate solutions continues to be one of my most valuable skills in approaching new challenges and projects.`,
    projects: [
      {
        name: 'Systems Analysis and Design Documentation',
        description: 'Complete system analysis including requirements gathering and design specifications',
        url: '/documents/Environmental Health Unit.docx'
      }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Computer Information Systems Student',
    company: 'Monroe University',
    location: 'St. Lucia',
    startDate: '2024-06',
    endDate: '',
    current: true,
    description: [
      'Pursuing Bachelor\'s degree in Computer Information Systems with focus on full-stack development',
      'Completed coursework in Database Management, Object-Oriented Programming, and Systems Analysis',
      'Developed practical skills through hands-on projects including e-commerce applications and database systems',
      'Maintained strong academic performance while building portfolio of technical projects',
    ],
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Limin Holdings Ltd',
    location: 'Remote',
    startDate: '2024-11',
    endDate: '',
    current: true,
    description: [
      'Developed responsive web applications using React, JavaScript, and modern CSS frameworks',
      'Collaborated with clients to understand requirements and deliver user-friendly solutions',
      'Implemented best practices for code organization and version control using Git',
      'Created interactive user interfaces with focus on accessibility and performance',
    ],
  },
  {
    id: 3,
    title: 'IT Intern',
    company: 'Limin Holdings Ltd',
    location: 'Remote',
    startDate: '2025-06',
    endDate: '2024-07',
    current: false,
    description: [
      'Assisted in the development and maintenance of internal software applications',
      'Participated in system analysis and design sessions to gather requirements',
      'Contributed to database management tasks including data entry and query optimization',
      'Gained exposure to project management methodologies and team collaboration tools',
      "Delved deeper into frontend technologies, enhancing skills in React and JavaScript",
      'Learned about backend integration and API development to support frontend applications',
      'Developed problem-solving skills through real-world IT challenges and troubleshooting',
    ],
  }
];