

import { useState } from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  // Keep all original social icons
  // No need to filter since we want to keep all icons now

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p 
            className="cursor-pointer hover:underline" 
            onClick={toggleTerms}
          >
            Terms & Conditions
          </p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a 
                href={socialImg.name === "github" ? "https://github.com/ManjotSinghRayet" : 
                     socialImg.name === "linkedin" ? "https://www.linkedin.com/in/manjot-singh-138638259" : 
                    socialImg.name === "x" ? "https://github.com/ManjotSinghRayet" : "#"
                    } 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Manjot Singh. All rights reserved.
          </p>
        </div>
      </div>

      {/* Terms and Conditions Popup */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white p-8 rounded-lg max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Terms & Conditions</h2>
              <button 
                onClick={toggleTerms}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="terms-content text-black">
              <p className="mb-4 text-black">
                Welcome to my portfolio website. By accessing this website, you agree to be bound by these Terms and Conditions.
              </p>
              <p className="mb-4 text-black">
                All content is my property and protected by copyright. Permission is granted for personal, non-commercial use only.
              </p>
              <p className="mb-4 text-black">
                This site is provided "as is" without warranties. I am not liable for any damages arising from the use of this site.
              </p>
              <p className="mb-4 text-black">
                I am a learner creating my first portfolio based on YouTube tutorials with my own modifications.
              </p>
            </div>
            <div className="mt-6 text-center">
              <button 
                onClick={toggleTerms}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;