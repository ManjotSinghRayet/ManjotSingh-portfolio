// import { logoIconsList } from "../constants";

// const LogoIcon = ({ icon }) => {
//   return (
//     <div className="flex-none flex-center marquee-item">
//       <img src={icon.imgPath} alt={icon.name} />
//     </div>
//   );
// };

// const LogoShowcase = () => (
//   <div className="md:my-20 my-10 relative">
//     <div className="gradient-edge" />
//     <div className="gradient-edge" />

//     <div className="marquee h-52">
//       <div className="marquee-box md:gap-12 gap-5">
//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}

//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default LogoShowcase;


// Replace logoIconsList with your text array
const textItemsList = [
  "HTML5 & CSS3 Expert",
  "JavaScript Developer",
  "Responsive Design",
  "SwiperJS Integration",
  "Smooth Scrolling with LocomotiveJS",
  "CSS Grid & Flexbox Mastery",
  "CSS Animations & Transitions",
  "Cross-Browser Compatibility",

];

const LogoShowcase = () => (
  <div className="overflow-hidden whitespace-nowrap w-full h-60 py-18 ">
    <div className="flex animate-scroll">
      {[...textItemsList, ...textItemsList].map((text, index) => (
        <span
          key={index}
          className="mx-6 text-4xl font-semibold text-gray-700 hover:text-white hover:drop-shadow-[0_0_6px_white] transition duration-300"
        >
          {text}
        </span>
      ))}
    </div>
  </div>
);

export default LogoShowcase;
