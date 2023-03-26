import React, { forwardRef } from "react";
import "./Education.scss";
import educpng from "../../assets/img/pngegg.png";
import certificate from "../../assets/img/IMG_8123.PNG";

const Education = forwardRef((props, ref) => {
  const { EducationRef } = props;

  return (
    <div ref={EducationRef} className="education__bgr">
      <div className="educ__wrapper">
        <img src={educpng} width="120px" height='100px' className="scale"/>
        <div>
          <p>
            <strong>02.2023</strong>     Intern at the company Rukki.Pro
          </p>
          <p>
            <strong>04.2022-02.2023</strong>{" "}
            <a href="https://tel-ran.de/en">   Tel-ran GmbH</a> ,<br /> 
            Frontend Web Development(online course){" "}
          </p>
          <p>
            <strong>2016-2020</strong>{" "}
            <a href="https://www.knu.kg/en">
                  J.B Kyrgyz State University
            </a>{" "}
            ,<br /> Business Administration
          </p>
        </div>
        <img src={certificate} width="350px" height='450px'/>
      </div>
    </div>
  );
});
export default Education;
