import { useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa'

interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  color: string
}

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experiences: ExperienceItem[] = [

    {
      role: 'Flutter Development Intern',
      company: 'Qoresys',
      location: 'In-Office',
      period: 'Mar 2024',
      startDate: '2024-03',
      endDate: '2024-03',
      color: 'from-blue-400 to-blue-600',
      technologies: ['Flutter', 'Dart', 'Bloc/Provider', 'REST APIs', 'Firebase'],
      description: [
        'Engineered and deployed high-performance Flutter applications with adaptive, responsive UI layouts optimized for Android devices.',
        'Implemented core features, API integrations, and state management workflows to ensure reliability, scalability, and maintainable architecture across the app lifecycle.'
      ]

    },
    {
      role: 'Frontend Development Intern',
      company: 'Ocean Academy',
      location: 'Remote',
      period: 'Mar 2025 - Apr 2025',
      startDate: '2025-03',
      endDate: '2025-04',
      color: 'from-cyan-400 to-blue-600',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Git'],
      description: [
        'Completed a comprehensive one-month frontend development internship, sharpening technical skills and gaining real-world exposure to professional development practices.',
        'Collaborated effectively with the team, demonstrating adaptability and strong communication skills in a professional setting while learning industry-standard development workflows.',
      ]
    },
    {
      role: 'Application Development Intern',
      company: 'Learnlike',
      location: 'In-Office',
      period: 'Jul 2025',
      startDate: '2025-07',
      endDate: '2025-07',
      color: 'from-purple-400 to-purple-600',
      technologies: ['React', 'JavaScript', 'PHP', 'REST APIs', 'Git'],
      description: [
        'Developed cross-platform interfaces using Flutter and React, delivering responsive layouts, smooth performance, and a consistent user experience across devices.',
        'Optimized backend logic in PHP to ensure seamless data synchronization, faster response times, and improved overall workflow efficiency.'
      ]
    }
    ,
    {
      role: 'Software Development Intern',
      company: 'WG TECH SOLUTIONS',
      location: 'Remote',
      period: 'Aug 2025',
      startDate: '2025-08',
      endDate: '2025-11',
      color: 'from-orange-400 to-orange-600',
      technologies: [
        'Python', 'Flask', 'FastAPI', 'Computer Vision',
        'AI Automation', 'Machine Learning', 'Git', 'APIs'
      ],
      description: [
        'Developed advanced computer vision models for healthcare and agriculture, enabling accurate gesture and posture tracking for real-time monitoring systems.',
        'Engineered Python automation pipelines using Flask and FastAPI to support real-time data processing, seamless integrations, and scalable backend workflows.'
      ]
    }


  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className='experience-section relative min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 overflow-hidden'>
      <div className="absolute top-20 left-10 w-16 h-16 border-4 border-gray-600/20 rotate-45 animate-spin-slow hidden sm:block"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-gray-600/10 rounded-full animate-pulse hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-10 h-10 border-4 border-gray-500/20 rounded-full animate-bounce-slow hidden sm:block"></div>
      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-10 animate-fade-in opacity-0 animation-delay-100">
          <div className="inline-block">
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest poppins font-semibold">
              Professional Journey
            </span>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-gray-500 to-transparent mx-auto mt-2 animate-width-expand"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 bebas tracking-wider">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              WORK EXPERIENCE
            </span>
          </h2>
          <p className="text-gray-400 montserrat max-w-2xl mx-auto text-sm sm:text-base">
            Building innovative solutions and growing through real-world challenges
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 hidden md:block"></div>
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-fade-in opacity-0`}
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-800 border-4 border-gray-500 hidden md:block animate-pulse"></div>
                <div className={`ml-0 sm:ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
                  <div
                    className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl group cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="p-4 sm:p-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 poppins group-hover:text-gray-100 transition-colors">
                              {exp.role}
                            </h3>
                            <p className={`text-base sm:text-lg font-semibold mt-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                              {exp.company}
                            </p>
                          </div>
                          <div className={`text-gray-400 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                            <FaChevronDown />
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 montserrat">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaCalendarAlt className="text-gray-500" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaMapMarkerAlt className="text-gray-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-4">
                          {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 sm:px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-xs text-gray-300 poppins"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <span className="px-2 sm:px-3 py-1 bg-gray-700/30 border border-gray-600/30 rounded-full text-xs text-gray-400 poppins">
                              +{exp.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`transition-all duration-500 overflow-hidden ${expandedIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-700/50 pt-4 sm:pt-6">
                        <div className="space-y-2 sm:space-y-3">
                          {exp.description.map((desc, descIndex) => (
                            <div key={descIndex} className="flex gap-2 sm:gap-3 animate-slide-up" style={{ animationDelay: `${descIndex * 50}ms` }}>
                              <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></div>
                              <p className="text-gray-400 montserrat text-xs sm:text-sm leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>
                        {exp.technologies.length > 4 && (
                          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700/30">
                            <p className="text-xs text-gray-500 uppercase tracking-wider poppins mb-3">All Technologies Used</p>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 sm:px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-xs text-gray-300 poppins hover:bg-gray-700/70 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`hidden md:block absolute top-0 ${index % 2 === 0 ? 'left-[calc(50%+2rem)]' : 'right-[calc(50%+2rem)]'}`}>
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-lg px-2 sm:px-3 py-1 text-base sm:text-xl text-gray-300 poppins font-semibold">
                      {exp.startDate.split('-')[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
