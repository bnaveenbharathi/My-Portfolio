import { FaTrophy, FaAward, FaMedal, FaCode, FaStar, FaLaptopCode, FaShieldAlt } from 'react-icons/fa'
import sih from '../assets/img/sih2.jpeg'
import guvi from '../assets/img/guvi2.png'
import srm from '../assets/img/srm.jpg'
import kalam from '../assets/img/kalam.png'
import kumarasammy from '../assets/img/kumarasammy.png'
import hackacity from '../assets/img/hack-a-city.png'
import trustlens from '../assets/img/productexpo.png'

interface Achievement {
  title: string
  organization: string
  description: string
  icon: React.ReactElement
  year: string
  category: string
  image: string
}

export const Achievements = () => {
  const achievements: Achievement[] = [

    {
      title: 'Dr. Kalam Young Achiever Awards 2025',
      organization: 'Madurai',
      description: 'Our team will be presenting SkillForge Hub - An AI + blockchain EdTech platform that connects students, institutions, and recruiters with personalized learning, mentorship, and verified credentials to boost employability.',
      icon: <FaStar />,
      year: '2025',
      category: 'State Level',
      image: kalam
    },
    {
      title: '3rd Prize - National Science Day Project Expo 2K25',
      organization: 'Jerusalem College of Engineering, Chennai',
      description: 'Secured 3rd Prize with "Trust Lens" at the National Science Day Inter College Project Expo 2K25, conducted by the Department of Information Technology in collaboration with The Institution of Engineers (India), Kancheepuram Local Center. An amazing platform to present innovative solutions.',
      icon: <FaTrophy />,
      year: '2025',
      category: 'Competition',
      image: trustlens
    },
    {
      title: '36-Hour Hackathon - NERD LEARN',
      organization: 'Kumarasamy College of Engineering, Karur',
      description: 'Created NERD LEARN, an AI-powered learning platform with student progress tracking for real-time insights, gamified lessons to keep learning fun, and adaptive learning paths personalized for each student. An unforgettable 36-hour experience filled with coding, learning, and innovation!',
      icon: <FaLaptopCode />,
      year: '2025',
      category: 'Hackathon',
      image: kumarasammy
    },
   
    {
      title: 'Guvi TNCPL Finalist',
      organization: 'Guvi - IIT Madras',
      description: 'Reached state-level finals for building an AI-powered language learning tool with adaptive feedback.',
      icon: <FaAward />,
      year: '2024',
      category: 'State Level',
      image: guvi
    },
    {
      title: 'Quantathon 2.0 Finalist',
      organization: 'SRM University, Chennai',
      description: 'Selected among top teams at SRM University, Chennai, for creating a decentralized, blockchain-backed content moderation platform.',
      icon: <FaMedal />,
      year: '2024',
      category: 'National Level',
      image: srm
    },
    {
      title: 'Hack-A-City 2.0 - CYBER NINJA',
      organization: 'City Engineering College',
      description: 'Developed CYBER NINJA, a powerful cybersecurity application addressing real-world digital threats. Features include AI-powered deepfake detection, advanced image encryption for data privacy, and intelligent phishing website detection. A perfect blend of technical learning, creativity, and collaboration.',
      icon: <FaShieldAlt />,
      year: '2024',
      category: 'Hackathon',
      image: hackacity
    },

    {
      title: 'Smart India Hackathon 2023 Finalist',
      organization: 'Ministry of Power, Assam',
      description: 'Recognized by the Ministry of Power, Assam, for developing an AI-based hydro power optimization system.',
      icon: <FaTrophy />,
      year: '2023',
      category: 'National Level',
      image: sih
    }
  ]

  return (
    <div className='achievements-section relative min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 overflow-hidden'>
      <div className="absolute top-20 right-10 w-24 h-24 bg-gray-600/10 rounded-full animate-pulse blur-xl hidden sm:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-4 border-gray-600/20 rotate-45 animate-spin-slow hidden sm:block"></div>
      <div className="absolute top-1/2 left-10 w-10 h-10 border-4 border-gray-500/20 rounded-full animate-bounce-slow hidden sm:block"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gray-500/5 rounded-full blur-2xl animate-pulse hidden sm:block"></div>
      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-10 animate-fade-in opacity-0 animation-delay-100">
          <div className="inline-block relative">
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest poppins font-semibold flex items-center gap-2 justify-center">
              <div className="w-4 h-[2px] bg-gray-600"></div>
              Milestones & Recognition
              <div className="w-4 h-[2px] bg-gray-600"></div>
            </span>
            <div className="h-1 w-16 sm:w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-3 animate-width-expand"></div>
          </div>
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-bold mt-4 mb-4 bebas tracking-wider">
            <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
              ACHIEVEMENTS
            </span>
          </h2>
          <p className="text-gray-400 montserrat max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
            Celebrating innovation, excellence, and impactful solutions across national and international platforms
          </p>
        </div>
        <div className="mb-8 animate-fade-in opacity-0 animation-delay-200">
          <div className="group relative overflow-hidden rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl bg-gray-800/40 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-48 sm:h-80 md:h-auto overflow-hidden">
                <img 
                  src={achievements[0].image} 
                  alt={achievements[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl">
                  <p className="text-lg sm:text-2xl font-bold bebas text-gray-100">{achievements[0].year}</p>
                </div>
              </div>
              <div className="relative p-4 sm:p-8 md:p-12 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gray-600/10 rounded-full blur-3xl"></div>
                <div className="inline-flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gray-700/50 border border-gray-600/50 rounded-full w-fit mb-2 sm:mb-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300 poppins uppercase tracking-wider font-semibold">
                    {achievements[0].category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-100 poppins mb-2 sm:mb-4 leading-tight group-hover:text-white transition-colors">
                  {achievements[0].title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 text-gray-400">
                  <FaCode className="text-base sm:text-xl text-gray-500" />
                  <p className="montserrat font-medium text-xs sm:text-base">{achievements[0].organization}</p>
                </div>
                <p className="text-gray-400 montserrat leading-relaxed mb-2 sm:mb-6 text-xs sm:text-base">
                  {achievements[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {achievements.slice(1).map((achievement, index) => (
            <div
              key={index + 1}
              className="group relative animate-fade-in opacity-0 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="relative h-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:shadow-2xl">
                
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
                <div className="relative h-32 sm:h-56 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full">
                    <p className="text-xs text-gray-300 poppins uppercase tracking-wider font-semibold">
                      {achievement.category}
                    </p>
                  </div>
                 
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 px-2 sm:px-4 py-1 sm:py-2 bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl">
                    <p className="text-xs sm:text-lg font-bold bebas text-gray-100">{achievement.year}</p>
                  </div>
                </div>
                
                <div className="relative z-10 p-3 sm:p-6">
              
                  <h3 className="text-xs sm:text-lg font-bold text-gray-100 poppins mb-1 sm:mb-2 group-hover:text-white transition-colors leading-tight min-h-[32px] sm:min-h-[56px]">
                    {achievement.title}
                  </h3>
                
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 text-gray-400">
                    <FaCode className="text-xs sm:text-sm text-gray-500 flex-shrink-0" />
                    <p className="montserrat text-xs sm:text-sm line-clamp-1">{achievement.organization}</p>
                  </div>
                 
                  <p className="text-gray-400 montserrat text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>
                </div>
               
                <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 w-16 sm:w-32 h-16 sm:h-32 bg-gray-500/20 rounded-full blur-3xl group-hover:bg-gray-400/30 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
