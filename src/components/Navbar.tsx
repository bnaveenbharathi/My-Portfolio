import { useState, useEffect } from "react";
import { HiCode } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; 
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); 
    }
  };

  useEffect(() => {
    const sections = [
      { id: "about", label: "About", icon: "👨‍💻" },
      { id: "experience", label: "Experience", icon: "💼" },
      { id: "skills", label: "Skills", icon: "⚡" },
      { id: "projects", label: "Projects", icon: "🚀" },
      { id: "achievements", label: "Achievements", icon: "🏆" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const item of sections) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveSection("about");
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b1b1e]/95 backdrop-blur-xl border-b border-gray-800/60 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          >
            <div className="relative">
              <HiCode className="text-gray-300 text-2xl sm:text-3xl group-hover:text-white transition-colors duration-300 group-hover:rotate-12 transform transition-transform" />
              <div className="absolute -inset-2 bg-gray-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="bebas-neue text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-wider">
              NB.DEV
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-gray-800/50 rounded-full px-3 py-2 border border-gray-700/50">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 lg:px-5 py-2.5 rounded-full poppins font-medium text-xs lg:text-sm
                  transition-all duration-300 transform hover:scale-105
                  ${
                    activeSection === item.id
                      ? "text-white bg-gray-700/80 shadow-lg shadow-gray-700/30"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/40"
                  }
                  animate-fade-in opacity-0
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base lg:text-lg">{item.icon}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-800/60 border border-gray-700/60 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-2 bg-gray-800/40 rounded-xl p-3 border border-gray-700/50">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg poppins font-medium text-sm
                  transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "text-white bg-gray-700/80 shadow-lg"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/40"
                  }
                `}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animation: isMobileMenuOpen ? 'fadeIn 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
