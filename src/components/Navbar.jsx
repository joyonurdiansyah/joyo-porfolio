import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import downloadPdf from "../assets/download.png";
import { Link } from "react-scroll";
import cvFile from "../assets/cv/CV - JOYO NURDIANSYAH.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = (e) => {
    e.preventDefault(); 
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      
      const link = document.createElement("a");
      link.href = cvFile;
      link.download = "CV-Joyo-Nurdiansyah.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 3000); 
  };

  return (
    <>
      <nav
        className={`flex items-center justify-evenly px-6 py-4 bg-white fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md bg-opacity-60" : ""
        }`}
      >
        <div className="flex items-center space-x-3">
          {/* Logo click handler to scroll to #introduction */}
          <img 
            alt="Logo" 
            className="w-8 h-8 cursor-pointer" 
            src={logo} 
            onClick={() => window.scrollTo({ top: document.getElementById('introduction').offsetTop, behavior: 'smooth' })} 
          />
          <span className="text-xl font-bold font-sora">bangjoy</span>
        </div>

        <div className="hidden space-x-10 md:flex">
          <Link to="about" smooth={true} duration={500} offset={-80} className="font-medium text-gray-700 transition cursor-pointer font-sora hover:text-black">
            About Me
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-80} className="font-medium text-gray-700 transition cursor-pointer font-sora hover:text-black">
            Skills
          </Link>
          <Link to="experience" smooth={true} duration={500} offset={-80} className="font-medium text-gray-700 transition cursor-pointer font-sora hover:text-black">
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-80} className="font-medium text-gray-700 transition cursor-pointer font-sora hover:text-black">
            Projects
          </Link>
          <Link to="testimonial" smooth={true} duration={500} offset={-80} className="font-medium text-gray-700 transition cursor-pointer font-sora hover:text-black">
            My Course
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-80} className="font-medium text-gray-700 transition cursor-pointer font-sora hover:text-black">
            Contact Me
          </Link>
        </div>

        {/* Resume Button */}
        <div className="flex items-center ml-4 space-x-2">
          <a href={cvFile} onClick={handleDownload}>
            <button className="flex items-center px-5 py-2 space-x-2 text-white transition bg-black rounded-lg shadow-md hover:bg-gray-800">
              <span className="font-medium font-sora">Resume</span>
              <img alt="Download Icon" className="w-5 h-5" src={downloadPdf} />
            </button>
          </a>
        </div>
      </nav>

      {showLoader && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="terminal-loader">
            <div className="terminal-header">
              <div className="terminal-title">Status</div>
              <div className="terminal-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
              </div>
            </div>
            <div className="text">Loading...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
