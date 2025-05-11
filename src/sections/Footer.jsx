// import { socialImgs } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="flex flex-col justify-center">
//           <p>Terms & Conditions</p>
//         </div>
//         <div className="socials">
//           {socialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <img src={socialImg.imgPath} alt="social icon" />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Manjot Singh. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { useState } from "react";
// import { socialImgs } from "../constants";

// const Footer = () => {
//   const [showTerms, setShowTerms] = useState(false);

//   // Filter to keep only LinkedIn and GitHub if they exist
//   const filteredSocialImgs = socialImgs.filter(
//     img => img.name === "linkedin" || img.name === "github"
//   );
  

//   const toggleTerms = () => {
//     setShowTerms(!showTerms);
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="flex flex-col justify-center">
//           <p 
//             className="cursor-pointer hover:underline" 
//             onClick={toggleTerms}
//           >
//             Terms & Conditions
//           </p>
//         </div>
//         <div className="socials">
//           {filteredSocialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <a 
//                 href={socialImg.name === "github" ? "https://github.com/YourGithubID" : "https://linkedin.com/in/YourLinkedInID"} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Manjot Singh. All rights reserved.
//           </p>
//         </div>
//       </div>

//       {/* Terms and Conditions Popup */}
//       {showTerms && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg max-w-2xl max-h-screen overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-black">Terms & Conditions</h2>
//               <button 
//                 onClick={toggleTerms}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="terms-content text-black">
//               <h3 className="font-semibold my-2 text-black">1. Introduction</h3>
//               <p className="mb-4 text-black">
//                 Welcome to my portfolio website. By accessing and using this website, you agree to be bound by these Terms and Conditions.
//               </p>

//               <h3 className="font-semibold my-2 text-black">2. Intellectual Property</h3>
//               <p className="mb-4 text-black">
//                 All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Manjot Singh and is protected by copyright laws.
//               </p>

//               <h3 className="font-semibold my-2 text-black">3. Use License</h3>
//               <p className="mb-4 text-black">
//                 Permission is granted to temporarily view the materials on this website for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
//               </p>

//               <h3 className="font-semibold my-2 text-black">4. Disclaimer</h3>
//               <p className="mb-4 text-black">
//                 The materials on this website are provided "as is". I make no warranties, expressed or implied, and hereby disclaim all implied warranties including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
//               </p>

//               <h3 className="font-semibold my-2 text-black">5. Limitations</h3>
//               <p className="mb-4 text-black">
//                 I will not be liable for any damages arising out of the use or inability to use the materials on this website, even if I have been notified of the possibility of such damage.
//               </p>

//               <h3 className="font-semibold my-2 text-black">6. Revisions and Errors</h3>
//               <p className="mb-4 text-black">
//                 The materials appearing on this website may include technical, typographical, or photographic errors. I do not warrant that any of the materials on this website are accurate, complete, or current.
//               </p>

//               <h3 className="font-semibold my-2 text-black">7. Links</h3>
//               <p className="mb-4 text-black">
//                 I have not reviewed all of the sites linked to this website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by me of the site.
//               </p>

//               <h3 className="font-semibold my-2 text-black">8. Modifications to Terms</h3>
//               <p className="mb-4 text-black">
//                 I may revise these terms of use at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions.
//               </p>
//             </div>
//             <div className="mt-6 text-center">
//               <button 
//                 onClick={toggleTerms}
//                 className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Footer;


// import { useState } from "react";
// import { socialImgs } from "../constants";

// const Footer = () => {
//   const [showTerms, setShowTerms] = useState(false);

//   // Keep all original social icons
//   // No need to filter since we want to keep all icons now

//   const toggleTerms = () => {
//     setShowTerms(!showTerms);
//   };
  
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="flex flex-col justify-center">
//           <p 
//             className="cursor-pointer hover:underline" 
//             onClick={toggleTerms}
//           >
//             Terms & Conditions
//           </p>
//         </div>
//         <div className="socials">
//           {socialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <a 
//                 href={socialImg.name === "github" ? "https://github.com/manjotsinghnagi" : "https://www.linkedin.com/in/manjotsinghnagi"} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Manjot Singh. All rights reserved.
//           </p>
//         </div>
//       </div>

//       {/* Terms and Conditions Popup */}
//       {showTerms && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
//           <div className="bg-white p-8 rounded-lg max-w-2xl max-h-screen overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-black">Terms & Conditions</h2>
//               <button 
//                 onClick={toggleTerms}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="terms-content text-black">
//               <p className="mb-4 text-black">
//                 Welcome to my portfolio website. By accessing this website, you agree to be bound by these Terms and Conditions.
//               </p>
//               <p className="mb-4 text-black">
//                 All content is my property and protected by copyright. Permission is granted for personal, non-commercial use only.
//               </p>
//               <p className="mb-4 text-black">
//                 This site is provided "as is" without warranties. I am not liable for any damages arising from the use of this site.
//               </p>
//               <p className="mb-4 text-black">
//                 I am a learner creating my first portfolio based on YouTube tutorials with my own modifications.
//               </p>
//             </div>
//             <div className="mt-6 text-center">
//               <button 
//                 onClick={toggleTerms}
//                 className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Footer;

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
                     socialImg.name === "linkedin" ? "https://www.linkedin.com/in/manjot-singh-138638259" : "#"} 
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