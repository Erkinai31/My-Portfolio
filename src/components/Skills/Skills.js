import React, { forwardRef } from "react";
import "./Skills.scss";


const Skills = forwardRef((props,ref)=> {
  const {SkillsRef} = props
  var progress = 30; 
var progressEl = document.querySelector('.progress'); 
var increaseProgress = function() { 
  progress = progress + 10; 
  progressEl.style.transform = 'rotate('+progress+'deg)'; 
} 
  return (
    <div className="skills_page" ref={SkillsRef}>
      <div className="skills_wrapper">
      <h1 className="title">Fähigkeiten</h1>

      <div className="skills_content">
        <div className="tech_skill">
          <h2>Technische Fähigkeiten</h2>
          <div className="progress">
            <div className="progress-inside html">HTML</div>
            <strong className="percentage">85%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside redux">Redux</div>
            <strong className="percentage">45%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside scss">CSS/SASS/SCSS</div>
            <strong className="percentage">80%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside bootstrap">Bootstrap</div>
            <strong className="percentage">60%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside react">React</div>
            <strong className="percentage">65%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside js">Java Script</div>
            <strong className="percentage">75%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside ts">TypeScript</div>
            <strong className="percentage">45%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside git">Git</div>
            <strong className="percentage">60%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside github">Github/Gitlab</div>
            <strong className="percentage">60%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside figma">Figma/Zeplin</div>
            <strong className="percentage">85%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside ftp">FTP Server</div>
            <strong className="percentage">75%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside wordpress">WordPress</div>
            <strong className="percentage">80%</strong>
          </div>
        </div>
        <div className="lng_skill">
          <h2>Sprachkenntnisse</h2>
        <div className="lng_grid">
           < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng eng"></div>
                <div class="circle-in" onmouseover="increaseProgress()">55%<span>Englisch</span></div>
              </div> 
          </div>
          < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng ge"></div>
                <div class="circle-in" onmouseover="increaseProgress()">75%<span>Deutsch</span></div>
              </div> 
          </div>
          < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng ru"></div>
                <div class="circle-in" onmouseover="increaseProgress()">100%<span>Russisch</span></div>
              </div> 
          </div>
          < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng kg"></div>
                <div class="circle-in" onmouseover="increaseProgress()">100%<span>Kirgisisch</span></div>
              </div> 
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  
    
  );
}
)
export default Skills