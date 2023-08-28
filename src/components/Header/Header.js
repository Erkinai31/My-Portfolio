import React from "react";
import "./Header.scss";

export default function Header(props) {
  const { HomeRef, AboutRef, SkillsRef, MyProjectsRef, EducationRef } = props;

  const handleClickHome = () => {
    HomeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleClickAbout = () => {
    AboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleClickSkills = () => {
    SkillsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleClickProject = () => {
    MyProjectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleClickEducation = () => {
    EducationRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <div className="header_wrapper"> 
       <nav>
          <ul className="menu">
            <li className="menu__item" onClick={handleClickHome}>
                Home
            </li>
            <li className="menu__item" onClick={handleClickAbout}>
                About
            </li>
            <li className="menu__item" onClick={handleClickSkills} >
                Skills
            </li>
            <li className="menu__item" onClick={handleClickEducation}>
                Education
            </li>
            <li className="menu__item"onClick={handleClickProject}>
                Projects
            </li>
          </ul>
          <div class="hamburger-menu">
					<input id="menu__toggle" type="checkbox" />
					<label class="menu__btn" for="menu__toggle">
					  <span></span>
					</label>
					<ul class="menu__box">
          <li className="item" onClick={handleClickHome}>
                Home
            </li>
            <li className="item" onClick={handleClickAbout}>
                About
            </li>
          <li className="item" onClick={handleClickSkills} >
                Skills
            </li>
          <li className="item" onClick={handleClickEducation}>
                Education
            </li>
            <li className="item" onClick={handleClickProject}>Projects</li>
					</ul>
				  </div>
        </nav>
      </div>
    </div>
  );
}
