import mark from "../assets/img/itsme.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";


export const Main = () => {
  const texts = useMemo(() => ["Developer", "Engineer", "Creator", "Innovator"], []);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex, texts]);

  return (
    <div className='About-us relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] md:h-[90vh] gap-8 md:gap-12 overflow-hidden px-4 sm:px-6'>
      <div className="hidden md:block absolute left-2 top-1/4 space-y-6 animate-fade-in opacity-0 animation-delay-200">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-float">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
          <pre className="text-gray-400 text-xs font-mono">
            <code>{`const skills = [\n  "React",\n  "Node.js",\n  "TypeScript"\n];`}</code>
          </pre>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-float-delayed">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
          <pre className="text-gray-400 text-xs font-mono">
            <code>{`function build() {\n  return "✨";\n}`}</code>
          </pre>
        </div>
      </div>

      <div className="hidden md:block absolute right-5 bottom-1/2 space-y-6 animate-fade-in opacity-0 animation-delay-400">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-float">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 text-xs">●</span>
            <span className="text-gray-400 text-xs font-mono">terminal</span>
          </div>
          <div className="text-gray-400 text-xs font-mono">
            <span className="text-gray-500">$</span> npm run dev<br/>
            <span className="text-gray-600">✓ Ready in 2.5s</span>
          </div>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-float-delayed">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 text-xs">◆</span>
            <span className="text-gray-400 text-xs font-mono">status</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-400 text-xs font-mono">All systems operational</span>
          </div>
        </div>
      </div>
<div className="block md:hidden text-center mb-6">
          <h3 className="text-gray-500 text-lg sm:text-2xl poppins font-light tracking-wide mb-3 animate-fade-in opacity-0 animation-delay-100">
            Hey There, I'm
          </h3>
          <div className="relative inline-block">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 text-4xl sm:text-6xl bebas-neue font-bold animate-fade-in opacity-0 animation-delay-300 hover:scale-105 transition-transform duration-300 cursor-default">
              Naveen
            </h1>
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 text-5xl sm:text-7xl bebas-neue font-bold animate-fade-in opacity-0 animation-delay-500 hover:scale-105 transition-transform duration-300 cursor-default">
            Bharathi
          </h1>
        </div>
      
      <div className="w-full max-w-[320px] sm:max-w-sm relative group perspective-1000 animate-fade-in opacity-0 animation-delay-300 mb-8 md:mb-0">
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
        <div className="relative preserve-3d group-hover:rotate-y-5 transition-all duration-700 ease-out animate-float-slow">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-3xl transform translate-z-[-20px] blur-md"></div>
          <div className="relative transform-gpu hover:translate-z-8 transition-all duration-500">
            <img 
              src={mark} 
              alt="Naveen Bharathi" 
              className="w-full h-auto rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] md:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transform transition-all duration-500 hover:scale-105 border-4 border-gray-700/50 relative z-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)] animate-slide-in-left" 
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="hidden md:block absolute top-4 right-4 w-16 h-16 border-2 border-gray-500/30 rounded-full animate-spin-slow"></div>
            <div className="hidden md:block absolute bottom-4 left-4 w-12 h-12 border-2 border-gray-600/30 rounded-full animate-spin-reverse"></div>
          </div>
          <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-400/40 to-gray-600/40 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-float"></div>
          <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-gray-500/40 to-gray-700/40 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-float-delayed"></div>
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_20px_rgba(255,255,255,0.1)] pointer-events-none"></div>
        </div>
      </div>

      <div className="w-full max-w-lg sm:max-w-2xl space-y-6">
        <div className="space-y-4">
          <h3 className="hidden md:block text-gray-500 text-lg sm:text-2xl poppins font-light tracking-wide mb-3 animate-fade-in opacity-0 animation-delay-100">
            Hey There, I'm
          </h3>
          <div className="hidden md:inline-block relative">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 text-4xl sm:text-6xl md:text-7xl bebas-neue font-bold animate-fade-in opacity-0 animation-delay-300 hover:scale-105 transition-transform duration-300 cursor-default">
              Naveen
            </h1>
          </div>
          <h1 className="hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 text-5xl sm:text-7xl md:text-8xl bebas-neue font-bold animate-fade-in opacity-0 animation-delay-500 hover:scale-105 transition-transform duration-300 cursor-default">
            Bharathi
          </h1>
          <div className="mt-3 sm:mt-12 md:inline-block relative hidden">
            <div className="text-gray-300 mix-blend-screen opacity-20  text-3xl sm:text-5xl md:text-6xl poppins font-bold">
              &lt;<span className="typing-text">{typedText}</span>
              <span className="animate-blink">|</span>&gt;
            </div>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-gray-500 to-gray-400 animate-width-expand animation-delay-1000"></div>
          </div>
           <div className="mt-3 inline-block relative w-full text-center md:hidden">
            <div className="text-gray-300 mix-blend-screen opacity-20  text-3xl sm:text-5xl md:text-6xl poppins font-bold">
              &lt;<span className="typing-text">{typedText}</span>
              <span className="animate-blink">|</span>&gt;
            </div>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-gray-500 to-gray-400 animate-width-expand animation-delay-1000"></div>
          </div>
          <p className="text-gray-500 text-base sm:text-lg montserrat font-light mt-6 sm:mt-8 animate-fade-in opacity-0 animation-delay-900 leading-relaxed tracking-wide">
            Crafting exceptional digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-10 animate-fade-in opacity-0 animation-delay-1100 items-center">
            <div className="relative w-full sm:w-auto">
              <button 
                onClick={() => setShowSocial(!showSocial)}
                onMouseEnter={() => setShowSocial(true)}
                className="w-full sm:w-auto px-2 sm:px-8 py-3 border-2 border-gray-600 text-gray-400 rounded-full font-semibold hover:border-gray-500 hover:text-gray-200 hover:shadow-lg hover:shadow-gray-600/30 transform transition-all duration-300 poppins text-center"
              >
                Contact Me
              </button>
              <div 
                className={`w-full flex flex-row ml-8 justify-center items-center sm:absolute sm:left-full sm:ml-4 sm:top-1/2 sm:-translate-y-1/2 sm:flex-row gap-3 mt-8 sm:mt-0 transition-all duration-500 ${
                  showSocial ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                <a 
                  href="https://github.com/bnaveenbharathi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-300 delay-100 ${
                    showSocial ? 'translate-x-0' : 'translate-x-[-20px]'
                  } w-1/4 sm:w-10 text-center`}
                >
                  <FaGithub className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-600 hover:border-gray-400 p-1 sm:p-2 bg-gray-800/50 hover:bg-gray-700/80 cursor-pointer" />
                </a>
                <a 
                  href="https://linkedin.com/in/bnaveenbharathi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-300 delay-200 ${
                    showSocial ? 'translate-x-0' : 'translate-x-[-20px]'
                  } w-1/4 sm:w-10 text-center`}
                >
                  <FaLinkedin className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-600 hover:border-gray-400 p-1 sm:p-2 bg-gray-800/50 hover:bg-gray-700/80 cursor-pointer" />
                </a>
                <a 
                  href="https://instagram.com/bnaveenbharathi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-300 delay-300 ${
                    showSocial ? 'translate-x-0' : 'translate-x-[-20px]'
                  } w-1/4 sm:w-10 text-center`}
                >
                  <FaInstagram className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-600 hover:border-gray-400 p-1 sm:p-2 bg-gray-800/50 hover:bg-gray-700/80 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
