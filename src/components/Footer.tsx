import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaArrowUp } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/bnaveenbharathi',
      color: 'hover:text-gray-100 hover:border-gray-500'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/b-naveen-bharathi-7452ab259/',
      color: 'hover:text-gray-100 hover:border-gray-500'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:naveenbharathi5050@gmail.com',
      color: 'hover:text-gray-100 hover:border-gray-500'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#1b1b1e]/80 border-t border-gray-800/50">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Content - Centered Layout */}
        <div className="text-center space-y-8 mb-12">
          

          {/* Tagline */}
          <p className="text-gray-400 montserrat text-base max-w-2xl mx-auto leading-relaxed">
            <span className="text-gray-600 font-mono text-sm">// </span>
            Passionate about building innovative solutions that make a difference.
            <br />
            <span className="text-gray-600 font-mono text-sm">// </span>
            Let's build something amazing together!
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 py-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 flex items-center justify-center bg-gray-800/60 border-2 border-gray-700/60 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/60`}
                title={social.name}
                aria-label={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="inline-block">
            <a 
              href="mailto:naveenbharathi5050@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl text-gray-300 hover:text-gray-100 hover:border-gray-600 transition-all hover:bg-gray-700/40 font-mono text-sm"
            >
              <FaEnvelope className="text-gray-500" />
              <span className="text-gray-600">&lt;</span>
              naveenbharathi5050@gmail.com
              <span className="text-gray-600">/&gt;</span>
            </a>
          </div>

          {/* Inspirational Quote */}
          <div className="max-w-3xl mx-auto py-8">
            <div className="relative bg-gray-800/20 border border-gray-700/30 rounded-xl p-8">
              <div className="absolute -top-3 left-6 bg-[#1b1b1e] px-3 text-gray-500 font-mono text-sm">
                <span className="text-gray-600">const</span> inspiration = <span className="text-gray-600">{'{'}</span>
              </div>
              <div className="relative space-y-3">
                <p className="text-gray-300 montserrat text-lg md:text-xl italic leading-relaxed pl-4">
                  <span className="text-gray-600 font-mono not-italic text-sm">quote: </span>
                  "The only way to do great work is to love what you do."
                </p>
                <p className="text-gray-500 poppins text-base pl-4">
                  <span className="text-gray-600 font-mono text-sm">author: </span>
                  "Steve Jobs"
                </p>
              </div>
              <div className="absolute -bottom-3 right-6 bg-[#1b1b1e] px-3 text-gray-500 font-mono text-sm">
                <span className="text-gray-600">{'}'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-mono text-sm flex items-center gap-2 justify-center md:justify-start">
              <span className="text-gray-600">&lt;!--</span>
              <span>© {currentYear} B. Naveen Bharathi</span>
              <span className="hidden md:inline text-gray-600">|</span>
              <span className="flex items-center gap-1.5">
                Made with <FaHeart className="text-red-500 animate-pulse" /> and <FaCode className="text-gray-500" />
              </span>
              <span className="text-gray-600">--&gt;</span>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-800/60 border border-gray-700/60 rounded-xl text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-all hover:scale-105 font-mono text-sm font-medium"
            aria-label="Back to top"
          >
            <span className="text-gray-600">&lt;</span>
            <span>scrollToTop()</span>
            <span className="text-gray-600">/&gt;</span>
            <FaArrowUp className="text-xs ml-1" />
          </button>
        </div>

      </div>
      
      
    </footer>
  )
}
