import React, { forwardRef } from "react";
import "./About.sass";
import clip from "../../assets/img/clipart1.png";
import cv from "../../assets/LB.pdf"


const About = forwardRef((props,ref)=> {
  const {AboutRef} = props
  return (
    <div className="aboutMe" ref={AboutRef}>
        <div className="personal_info">
           <h1 className="title">Personal Details
          </h1> <img
          src={clip}
          width="60px"
          height="90px"
          alt="clip"
          className="clip"
        />
        
        </div>
        <div className="info_aboutme">
        I started my Journey as a Frontend Developer in 2021, when i decided to create a layout for interest and began to study HTML and CSS, after i did a full layout, I realized that I want to do this professionally.
        <br></br>
        <br></br>
        That's why I signed up for courses, where I received a lot of theoretical and practical knowledge.Now I am applying this knowledge on an internship. I’m now looking for a junior dev position to finally kick start my career and learn among professionals.
        </div>
        <a href={cv} download className="btn2">Download Resume </a>
      </div>
  );
}
)
export default About