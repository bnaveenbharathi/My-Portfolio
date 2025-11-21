import { useState } from 'react'
import { FaGithub, FaHeart, FaExternalLinkAlt, FaGlobe, FaLeaf, FaNewspaper, FaTimes, FaCode, FaRocket } from 'react-icons/fa'
import guvi from '../assets/img/guvi.png'
import srmquan from '../assets/img/srmquan.png'
import numberplate from '../assets/img/numberplate.jpg'
import iqarena from '../assets/img/iqarena.jpeg'
import learning from '../assets/img/learningplatform.png'
import dating from '../assets/img/dating.png'
import fimnews from '../assets/img/fimnews.jpeg'

interface Project {
  title: string
  description: string
  fullDescription?: string
  icon: React.ReactElement
  image: string
  github: string
  liveDemo?: string
  technologies: string[]
  features?: string[]
  color: string
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: 'IQArena – Competitive Learning Platform',
      description: 'Designed a platform for students to take quizzes, track progress, and compete in coding challenges. Implemented leaderboards, real-time scoring, and question recommendations for enhanced competitive learning experience.',
      fullDescription: 'IQArena is a comprehensive competitive learning platform designed to enhance student engagement through gamification. The platform features real-time quiz competitions, personalized question recommendations powered by AI, and dynamic leaderboards that track student progress across multiple dimensions.',
      icon: <FaGlobe />,
      image: iqarena,
      github: 'https://www.nscet.org/iqarena',
      liveDemo: 'https://www.nscet.org/iqarena',
      technologies: ['React', 'Node.js', 'Mysql', 'Real-time', 'Leaderboards'],
     features: [
  'Real-time quiz battles with instant scoring and seamless user flow',
  'Dynamic leaderboards with multi-level ranking and competitive insights',
  'Comprehensive progress tracking with detailed performance analytics',
  'Built-in coding challenge module for hands-on practice',
  'Fully responsive, cross-device optimized interface'
],
      color: 'from-blue-400 to-cyan-600'
    },
    {
  title: 'FIM News – Real-Time Finance & Tech Updates App',
  description: 'Developed a fast and reliable finance news app delivering real-time stock updates, business insights, and tech trends in under 60 words, available in Tamil and English.',
  fullDescription: 'FIM News is a lightweight and efficient finance news application designed for investors, traders, and finance learners. The platform provides concise, real-time updates on stock markets, business developments, and technology trends. With dual-language support and personalized feeds, users can stay informed quickly and accurately without browsing multiple sources.',
  icon: <FaNewspaper />,
  image: fimnews,
  github: 'https://play.google.com/store/apps/details?id=com.fimtech.fimnews',
  technologies: ['React Native', 'RSS Feeds', 'API Integration', 'Push Notifications', 'Multilingual Support'],
  features: [
    'Real-time stock market updates and major index tracking',
    'Concise finance news summaries under 60 words',
    'Dual-language content in Tamil and English',
    'Personalized news feed based on user interest',
    'Instant push alerts for major market changes',
    'Clean and user-friendly interface for quick reading'
  ],
  color: 'from-blue-500 to-indigo-600'
}
,
    {
      title: 'AI-Powered Student Learning Platform',
      description: 'Created an AI-driven personalized learning portal offering adaptive course suggestions, progress analytics, and interactive content. Integrated Flask, MongoDB, and AI for dynamic user experience.',
      fullDescription: 'An intelligent learning management system that leverages artificial intelligence to provide personalized learning paths for each student. The platform analyzes student performance, learning patterns, and preferences to recommend courses and content that maximize learning outcomes.',
      icon: <FaNewspaper />,
      image: learning,
      github: 'https://github.com/bnaveenbharathi/ai-learning-platform',
      technologies: ['Flask', 'AI', 'MongoDB', 'Analytics', 'Adaptive Learning'],
      features: [
        'Personalized course recommendations using ML algorithms',
        'Advanced progress analytics and insights',
        'Interactive content delivery system',
        'Adaptive learning paths based on performance',
        'Real-time feedback and assessment',
        'Integration with multiple learning resources'
      ],
      color: 'from-purple-400 to-pink-600'
    },
    {
      title: 'Decentralized Content Moderation System',
      description: 'Contributed to AI and full-stack development for a decentralized social media platform. Built automated content moderation using NLP models and designed user interaction modules for transparent, community-driven governance.',
      fullDescription: 'A blockchain-based decentralized social media platform featuring AI-powered content moderation. This system ensures transparent and fair content governance through community participation while using advanced NLP models to detect and flag inappropriate content automatically.',
      icon: <FaNewspaper />,
      image: srmquan,
      github: 'https://github.com/bnaveenbharathi/Trust-Chain-Quantathon-2.0',
      technologies: ['AI', 'NLP', 'Blockchain', 'Content Moderation', 'Full Stack'],
      features: [
        'Automated content moderation using NLP',
        'Blockchain-based transparent governance',
        'Community-driven decision making',
        'Real-time content analysis and flagging',
        'Decentralized user reputation system',
        'Smart contract integration'
      ],
      color: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Automatic Number Plate Recognition System',
      description: 'Developed an ANPR system using YOLO and Tesseract OCR for real-time vehicle number plate detection, text extraction, and automated identification to support traffic monitoring, security surveillance, and data management applications.',
      fullDescription: 'A sophisticated computer vision system that combines YOLO object detection with Tesseract OCR for accurate license plate recognition. This system is designed for traffic monitoring, parking management, and security applications with high accuracy and real-time processing capabilities.',
      icon: <FaLeaf />,
      image: numberplate,
      github: 'https://github.com/bnaveenbharathi/Automatic-Number-Plate-Recognition',
      technologies: ['YOLO', 'Tesseract OCR', 'Computer Vision', 'Real-time', 'Python'],
      features: [
        'Real-time vehicle number plate detection',
        'High-accuracy text extraction using OCR',
        'Support for multiple license plate formats',
        'Integration with traffic monitoring systems',
        'Automated vehicle identification and logging',
        'Performance optimized for real-time processing'
      ],
      color: 'from-orange-400 to-red-600'
    },
    {
      title: 'Contacts Management API',
      description: 'Developed a secure Contacts Management API using Node.js, Express.js, and MongoDB with JWT authentication, enabling full CRUD operations, protected routes, and efficient data handling for personalized contact management.',
      fullDescription: 'A robust and secure RESTful API built for managing contacts with enterprise-level security features. The API implements JWT-based authentication, role-based access control, and provides comprehensive CRUD operations for contact management applications.',
      icon: <FaGlobe />,
      image: guvi,
      github: 'https://github.com/bnaveenbharathi/Contacts-Management-API-Nodejs',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      features: [
        'Secure JWT-based authentication',
        'Complete CRUD operations for contacts',
        'Role-based access control',
        'Data validation and sanitization',
        'Efficient MongoDB queries and indexing',
        'Comprehensive API documentation'
      ],
      color: 'from-teal-400 to-blue-600'
    },
    {
  title: 'AI Dating Planner App',
  description: 'A smart AI-powered dating planner that generates personalized date ideas, activities, meals, romantic suggestions, and nearby locations using FastAPI, Google GenAI, and Flutter.',
  fullDescription:
    'The AI Dating Planner App is a personalized relationship assistant designed to help couples plan meaningful and creative dates. Powered by Google GenAI and FastAPI, the app analyzes user preferences and generates tailored date plans, activity ideas, meal suggestions, romantic tips, and location-based recommendations. Built with Flutter, it offers a smooth, cross-platform experience with an intuitive and modern UI.',
  icon: <FaHeart />,
  image: dating,
  github: 'https://github.com/bnaveenbharathi/AI-DATING-PLANER-APP',
  liveDemo: '',
  technologies: ['Flutter', 'FastAPI', 'Google GenAI', 'AI Recommendation', 'Location-based Suggestions'],
  features: [
    'AI-generated personalized date plans based on preferences',
    'Activity, meal, and location recommendations tailored for couples',
    'Romantic tips and ideas powered by generative AI',
    'FastAPI backend with smooth prompt handling and response optimization',
    'Modern, cross-platform UI built with Flutter',
    'Instant suggestion refresh and real-time content generation'
  ],
  color: 'from-pink-400 to-red-600'
}

  ]

  return (
    <div className='projects-section relative min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 overflow-hidden'>
      
      <div className="absolute top-10 right-20 w-20 h-20 bg-gray-600/10 rounded-full animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-4 border-gray-600/20 rotate-45 animate-spin-slow hidden sm:block"></div>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#1b1b1e]/98 backdrop-blur-xl border border-gray-700/70 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-200 transition-all z-10 bg-gray-800/80 hover:bg-gray-700/80 p-3 rounded-full border border-gray-700/50 hover:border-gray-600"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="p-8">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 border border-gray-700/50">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl text-gray-300">
                  {selectedProject.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent bebas mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 montserrat text-base">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {selectedProject.fullDescription && (
                <div className="mb-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-200 poppins mb-3 flex items-center gap-2">
                    <FaCode className="text-gray-400" />
                    About This Project
                  </h3>
                  <p className="text-gray-300 montserrat leading-relaxed text-[15px]">
                    {selectedProject.fullDescription}
                  </p>
                </div>
              )}

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-200 poppins mb-4 flex items-center gap-2">
                    <FaRocket className="text-gray-400" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 hover:border-gray-600/70 transition-all"
                      >
                        <div className="mt-1 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></div>
                        <p className="text-gray-300 montserrat text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-200 poppins mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-700/50 border border-gray-600/60 rounded-xl text-sm text-gray-200 poppins font-semibold hover:bg-gray-700/70 hover:border-gray-500 hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl font-semibold poppins hover:scale-105 transition-all border border-gray-600 shadow-lg"
                >
                  <FaGithub className="text-xl" />
                  View on GitHub
                </a>
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 border border-gray-600 text-gray-200 rounded-xl font-semibold poppins hover:bg-gray-700/80 hover:border-gray-500 hover:scale-105 transition-all"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl w-full relative z-10">
        
       <div className="text-center mb-10 animate-fade-in opacity-0 animation-delay-100">
          <div className="inline-block">
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest poppins font-semibold">
              Innovation Showcase
            </span>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-gray-500 to-transparent mx-auto mt-2 animate-width-expand"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 bebas tracking-wider">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-gray-400 montserrat max-w-2xl mx-auto text-sm sm:text-base">
            Building innovative solutions and growing through real-world challenges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-fade-in opacity-0 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:shadow-2xl flex flex-col">
                
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0`}></div>

                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-0 transition-opacity duration-500 mix-blend-multiply`}></div>
                  
                  <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className={`text-4xl sm:text-6xl mb-3 bg-gradient-to-br ${project.color} text-transparent bg-clip-text animate-bounce-slow`}>
                        {project.icon}
                      </div>
                      <p className="text-gray-300 poppins text-xs sm:text-sm font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                <div className="relative p-4 sm:p-6 flex-1 flex flex-col z-10">
                  
                  <h3 className="text-base sm:text-xl font-bold text-gray-100 poppins mb-2 sm:mb-3 group-hover:text-white transition-colors line-clamp-2 min-h-[40px] sm:min-h-[56px]">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 montserrat text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-lg text-xs text-gray-300 poppins hover:bg-gray-700 hover:border-gray-600 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 bg-gray-700/30 border border-gray-600/30 rounded-lg text-xs text-gray-400 poppins">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 sm:pt-4 border-t border-gray-700/30">
                    <div className="flex gap-2 sm:gap-4 text-gray-400 text-lg sm:text-xl">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition-all duration-300 hover:scale-125 transform"
                        title="View on GitHub"
                      >
                        <FaGithub />
                      </a>

                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition-all duration-300 hover:scale-125 transform"
                        title="Open Project"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>

                    
                  </div>
                </div>

                <div className={`absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}></div>
                <div className={`absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
