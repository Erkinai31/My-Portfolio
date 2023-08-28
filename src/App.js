import About from "./components/About/About";
import Header  from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";
import Skills from "./components/Skills/Skills";
import MyProjects from "./components/My projects/MyProjects";
import { useRef } from "react";
import Education from "./components/Education/Education";

function App() {
  const HomeRef = useRef();
  const AboutRef = useRef();
  const SkillsRef = useRef();
  const MyProjectsRef = useRef();
  const EducationRef = useRef();

  return (
    <div className="bgr">
      <Header
      HomeRef={HomeRef}
      AboutRef={AboutRef}
      SkillsRef={SkillsRef}
      MyProjectsRef={MyProjectsRef}
      EducationRef={EducationRef}/>
      <Home HomeRef={HomeRef}/>
      <div className="head_bgr">
        <About AboutRef={AboutRef}/>
      </div>
       <MyProjects  MyProjectsRef={MyProjectsRef}/>
     
       <div className="proj_page">
        <div className="blur">
      <Education EducationRef={EducationRef}/>
       </div>
      </div>
       <Skills SkillsRef={SkillsRef} /> 
         
       
    </div>
  );
}

export default App;
