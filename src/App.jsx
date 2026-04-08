import Navbar from "./navbar/Navbar";
import Home from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Projects />
       <SkillsSection />
       <Contact/>
       <Footer/> 
     
    </div>
  );
}

export default App;
