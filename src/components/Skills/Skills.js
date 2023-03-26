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
      <h1 className="title">Skills</h1>

      <div className="skills_content">
        <div className="tech_skill">
          <h2>Technical Skills</h2>
          <div className="progress">
            <div className="progress-inside html">HTML</div>
            <strong className="percentage">85%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside redux">Redux</div>
            <strong className="percentage">45%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside css">CSS/SASS/SCSS</div>
            <strong className="percentage">80%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside css">Bootstrap</div>
            <strong className="percentage">60%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside react">React</div>
            <strong className="percentage">65%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside js">JS</div>
            <strong className="percentage">75%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside js">Git</div>
            <strong className="percentage">60%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside js">Github/Gitlab</div>
            <strong className="percentage">60%</strong>
          </div>
          <div className="progress">
            <div className="progress-inside js">Figma/Zeplin</div>
            <strong className="percentage">85%</strong>
          </div>
        </div>
        <div className="lng_skill">
          <h2>Language Skills</h2>
        <div className="lng_grid">
           < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng eng"></div>
                <div class="circle-in" onmouseover="increaseProgress()">55%<span>English</span></div>
              </div> 
          </div>
          < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng ge"></div>
                <div class="circle-in" onmouseover="increaseProgress()">75%<span>German</span></div>
              </div> 
          </div>
          < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng ru"></div>
                <div class="circle-in" onmouseover="increaseProgress()">100%<span>Russian</span></div>
              </div> 
          </div>
          < div className="wh_bgr">
              <div class="circle-out">
                <div class="lng kg"></div>
                <div class="circle-in" onmouseover="increaseProgress()">100%<span>Kyrgyz</span></div>
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