import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import About from "./sections/About"
import { init } from '@emailjs/browser';
init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards/>
    <About />
    <TechStack />
    <Contact />
    <Footer />
    </>
    
  )
}

export default App