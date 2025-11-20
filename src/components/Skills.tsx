import { useState } from 'react'
import { 
  FaReact, FaNodeJs, FaPhp, FaDocker, FaGithub, 
  FaHtml5, FaCss3Alt, FaJs 
} from 'react-icons/fa'
import { 
  SiFlutter, SiExpress, SiFlask, SiDjango, SiMysql, 
  SiPostgresql, SiMongodb, SiSupabase, SiFastapi, 
  SiN8N, SiOpencv, SiLangchain
} from 'react-icons/si'
import { BiLinkExternal } from 'react-icons/bi'

interface Skill {
  name: string
  icon: React.ReactElement
  color: string
  docs: string
  category: string
}

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', icon: <FaHtml5 />, color: 'from-orange-500 to-orange-600', docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML', category: 'FRONTEND' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'from-blue-500 to-blue-600', docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS', category: 'FRONTEND' },
    { name: 'JavaScript', icon: <FaJs />, color: 'from-yellow-400 to-yellow-500', docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'FRONTEND' },
    { name: 'React', icon: <FaReact />, color: 'from-cyan-400 to-cyan-600', docs: 'https://react.dev', category: 'FRONTEND' },
    { name: 'Flutter', icon: <SiFlutter />, color: 'from-blue-400 to-blue-500', docs: 'https://flutter.dev/docs', category: 'FRONTEND' },
    
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, color: 'from-green-500 to-green-600', docs: 'https://nodejs.org/docs', category: 'BACKEND' },
    { name: 'Express.js', icon: <SiExpress />, color: 'from-gray-400 to-gray-600', docs: 'https://expressjs.com', category: 'BACKEND' },
    { name: 'PHP', icon: <FaPhp />, color: 'from-indigo-500 to-purple-600', docs: 'https://www.php.net/docs.php', category: 'BACKEND' },
    { name: 'Flask', icon: <SiFlask />, color: 'from-gray-300 to-gray-500', docs: 'https://flask.palletsprojects.com', category: 'BACKEND' },
    { name: 'Django', icon: <SiDjango />, color: 'from-green-600 to-green-700', docs: 'https://docs.djangoproject.com', category: 'BACKEND' },
    
    // Database
    { name: 'MySQL', icon: <SiMysql />, color: 'from-blue-500 to-blue-700', docs: 'https://dev.mysql.com/doc', category: 'DATABASE' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'from-blue-600 to-blue-800', docs: 'https://www.postgresql.org/docs', category: 'DATABASE' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'from-green-500 to-green-700', docs: 'https://www.mongodb.com/docs', category: 'DATABASE' },
    { name: 'Supabase', icon: <SiSupabase />, color: 'from-emerald-400 to-emerald-600', docs: 'https://supabase.com/docs', category: 'DATABASE' },
    
    // Tools & Frameworks
    { name: 'Docker', icon: <FaDocker />, color: 'from-blue-400 to-blue-600', docs: 'https://docs.docker.com', category: 'TOOLS' },
    { name: 'FastAPI', icon: <SiFastapi />, color: 'from-teal-400 to-teal-600', docs: 'https://fastapi.tiangolo.com', category: 'TOOLS' },
    { name: 'Github', icon: <FaGithub />, color: 'from-gray-600 to-gray-800', docs: 'https://docs.github.com', category: 'TOOLS' },
    { name: 'N8N', icon: <SiN8N />, color: 'from-red-400 to-pink-600', docs: 'https://docs.n8n.io', category: 'TOOLS' },
    
    // AI & Computer Vision
    { name: 'Object Detection', icon: <SiOpencv />, color: 'from-red-500 to-red-700', docs: 'https://docs.opencv.org', category: 'AI & CV' },
    { name: 'Langchain', icon: <SiLangchain />, color: 'from-purple-500 to-purple-700', docs: 'https://python.langchain.com/docs', category: 'AI & CV' },
  ]

  return (
    <div className='skills-section relative min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 overflow-hidden'>
      
      {/* Animated Background Elements - hidden on mobile */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-gray-600/20 rounded-full animate-spin-slow hidden sm:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-gray-600/10 rotate-45 animate-pulse hidden sm:block"></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 border-4 border-gray-500/20 animate-bounce-slow hidden sm:block"></div>

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-in opacity-0 animation-delay-100">
          <div className="inline-block">
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest poppins font-semibold">
              My Tech Arsenal
            </span>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-gray-500 to-transparent mx-auto mt-2 animate-width-expand"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 bebas tracking-wider">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </span>
          </h2>
          <p className="text-gray-400 montserrat max-w-2xl mx-auto text-sm sm:text-base">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Marquee Skills - Responsive Scroll */}
        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div className="relative overflow-x-auto">
            <div className="flex gap-2 sm:gap-4 animate-marquee min-w-[600px] sm:min-w-0">
              {[...skills, ...skills].map((skill, index) => (
                <a
                  key={`${skill.name}-${index}`}
                  href={skill.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-2 sm:p-4 hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden w-20 sm:w-32">
                    
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-1 sm:gap-2">
                      <div className="text-xl sm:text-3xl text-gray-400 group-hover:text-gray-200 transition-colors">
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <p className="text-gray-300 font-semibold montserrat text-xs text-center group-hover:text-gray-100 transition-colors">
                        {skill.name}
                      </p>

                      {/* Docs Link Icon */}
                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <BiLinkExternal className="text-gray-400 text-xs" />
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-20 blur-xl`}></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-x-auto">
            <div className="flex gap-2 sm:gap-4 animate-marquee-reverse min-w-[600px] sm:min-w-0">
              {[...skills, ...skills].reverse().map((skill, index) => (
                <a
                  key={`${skill.name}-reverse-${index}`}
                  href={skill.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-2 sm:p-4 hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden w-20 sm:w-32">
                    
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-1 sm:gap-2">
                      <div className="text-xl sm:text-3xl text-gray-400 group-hover:text-gray-200 transition-colors">
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <p className="text-gray-300 font-semibold montserrat text-xs text-center group-hover:text-gray-100 transition-colors">
                        {skill.name}
                      </p>

                      {/* Docs Link Icon */}
                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <BiLinkExternal className="text-gray-400 text-xs" />
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-20 blur-xl`}></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in opacity-0 animation-delay-800">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center hover:border-gray-600 transition-all hover:scale-105">
            <div className="text-2xl sm:text-4xl font-bold bebas bg-gradient-to-r from-orange-400 to-gray-600 bg-clip-text text-transparent">
              5+
            </div>
            <p className="text-gray-400 text-xs sm:text-sm montserrat mt-2">Frontend Techs</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center hover:border-gray-600 transition-all hover:scale-105">
            <div className="text-2xl sm:text-4xl font-bold bebas bg-gradient-to-r from-green-400 to-gray-600 bg-clip-text text-transparent">
              5+
            </div>
            <p className="text-gray-400 text-xs sm:text-sm montserrat mt-2">Backend Frameworks</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center hover:border-gray-600 transition-all hover:scale-105">
            <div className="text-2xl sm:text-4xl font-bold bebas bg-gradient-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent">
              4+
            </div>
            <p className="text-gray-400 text-xs sm:text-sm montserrat mt-2">Database Systems</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center hover:border-gray-600 transition-all hover:scale-105">
            <div className="text-2xl sm:text-4xl font-bold bebas bg-gradient-to-r from-purple-400 to-gray-600 bg-clip-text text-transparent">
              6+
            </div>
            <p className="text-gray-400 text-xs sm:text-sm montserrat mt-2">Tools & AI Tech</p>
          </div>
        </div>

      </div>
    </div>
  )
}
