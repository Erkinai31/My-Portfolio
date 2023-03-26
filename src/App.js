import About from "./components/About/About";
import Header  from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";
import Skills from "./components/Skills/Skills";
import MyProjects from "./components/My projects/MyProjects";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";
import Education from "./components/Education/Education";

function App() {
  const HomeRef = useRef();
  const AboutRef = useRef();
  const SkillsRef = useRef();
  const MyProjectsRef = useRef();
  const ContactRef = useRef();
  const EducationRef = useRef();

  return (
    <div className="bgr">
      <Header
      HomeRef={HomeRef}
      AboutRef={AboutRef}
      SkillsRef={SkillsRef}
      MyProjectsRef={MyProjectsRef}
      ContactRef={ContactRef}
      EducationRef={EducationRef}/>
      <Home HomeRef={HomeRef}/>
      <div className="head_bgr">
        <About AboutRef={AboutRef}/>
      </div>
      
      <Skills SkillsRef={SkillsRef} /> 
       <div className="proj_page">
        <div className="blur">
      <Education EducationRef={EducationRef}/>
       </div>
      </div>
      
     
          <MyProjects  MyProjectsRef={MyProjectsRef}/>
       
      <Footer  ContactRef={ContactRef}/>
    </div>
  );
}

export default App;
