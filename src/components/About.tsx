import { useState, useEffect } from 'react'
import naveen from '../assets/img/naveen.png'
import { FaRocket, FaCode, FaBrain} from 'react-icons/fa'

export const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='about-section relative min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 overflow-hidden'>
      {/* Animated background gradient follows mouse, but only on desktop */}
      <div 
        className="hidden md:block absolute w-96 h-96 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
        }}
      />
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-gray-600/30 rounded-lg animate-spin-slow hidden sm:block"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-gray-600/20 rotate-45 animate-pulse hidden sm:block"></div>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        {/* Text Section */}
        <div className="space-y-8 animate-fade-in opacity-0 animation-delay-100 text-center md:text-left">
          <div className="inline-block">
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest poppins font-semibold">
              Full Stack Developer & AI Engineer
            </span>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-gray-500 to-transparent mt-2 animate-width-expand mx-auto md:mx-0"></div>
          </div>
          <div className="space-y-4 text-gray-400 montserrat leading-relaxed text-sm sm:text-base">
            <p className="animate-fade-in opacity-0 animation-delay-300">
              Pursuing <span className="text-gray-300 font-semibold">B.Tech IT</span> at NSCET, Theni.
            </p>
            <p className="animate-fade-in opacity-0 animation-delay-400">
              I love turning ideas into <span className="text-gray-300 font-semibold">clean, fast, scalable products</span>—from web apps in React/Node to smooth mobile experiences in Flutter and AI-powered solutions.
            </p>
            <p className="animate-fade-in opacity-0 animation-delay-500">
              I enjoy building things that actually work in the real world—AI automation, intelligent systems, full stack applications, and everything in between.
            </p>
            <p className="text-gray-300 font-semibold animate-fade-in opacity-0 animation-delay-600">
              Good ideas, clean code, and late-night flow keep me running ☕💻
            </p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 animate-fade-in opacity-0 animation-delay-700 mx-auto md:mx-0">
            <h3 className="text-gray-300 font-semibold mb-3 poppins flex items-center gap-2 justify-center md:justify-start">
              <FaRocket className="text-gray-500" />
              My Goal
            </h3>
            <p className="text-gray-400 montserrat italic text-xs sm:text-base">
              "Build products that are <span className="text-gray-200 font-semibold">smart, fast, and genuinely useful</span>—without making users feel like they need a manual to operate them."
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative animate-fade-in opacity-0 animation-delay-200 flex justify-center items-center">
          <div className="relative">
            <div className="relative border-8 border-gray-300 p-2 overflow-hidden rounded-full border-gray-700/50 shadow-2xl  mx-auto bg-gray-900">
              <img 
                src={naveen} 
                alt="B. Naveen Bharathi" 
                className="w-full h-full object-cover scale-x-[-1] relative z-10 rounded-full"
              />
            </div>
            {/* Floating Info Cards - only on desktop */}
            <div className="absolute -bottom-6 -left-6 bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-3 sm:p-4 shadow-xl animate-float hidden md:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaCode className="text-xl sm:text-3xl text-gray-400" />
              </div>
            </div>
            <div className="absolute -top-4 right-2 bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-3 sm:p-4 shadow-xl animate-float-delayed hidden md:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaBrain className="text-xl sm:text-3xl text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
