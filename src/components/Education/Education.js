import React, { forwardRef } from "react";
import "./Education.scss";
import certificate from "../../assets/img/IMG_8123.PNG";

const Education = forwardRef((props, ref) => {
  const { EducationRef } = props;

  return (
    <div ref={EducationRef} className="education__bgr">
      <div className="educ__wrapper">
        <div>
        <p>
            <strong>05.2023-08.2023</strong> Web-Entwicklerin bei <a href="https://reifenvertrieb24.de/"  target="_blank">Reifenvertrieb24</a>
          </p>
          <p>
            <strong>03.2023-04.2023</strong> Praktikant im Unternehmen <a href="https://ruki.pro/"  target="_blank">Rukki.Pro</a>
          </p>
          <p>
            <strong>04.2022-02.2023</strong>{" "}
            <a href="https://tel-ran.de/en"  target="_blank"> Tel-ran GmbH</a> ,<br /> 
            Frontend Web-Entwickler(Online Kurs){" "}
          </p>
          <p>
            <strong>2016-2020</strong>{" "}
            <a href="https://www.knu.kg/en"  target="_blank">
            J.B Kirgisische Staatliche Universität
            </a>{" "}
            ,<br /> Betriebswirtschaftslehre
          </p>
        </div>
        <img src={certificate} width="350px" height='500px' className="certificate" alt="certificate"/>
      </div>
    </div>
  );
});
export default Education;
