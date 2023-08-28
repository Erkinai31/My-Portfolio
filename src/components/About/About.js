import React, { forwardRef } from "react";
import "./About.sass";
import clip from "../../assets/img/clipart1.png";
import cv from "../../assets/LB.pdf"


const About = forwardRef((props,ref)=> {
  const {AboutRef} = props
  return (
    <div className="aboutMe" ref={AboutRef}>
        <div className="personal_info">
           <h1 className="title">Persönliche Daten
          </h1> <img
          src={clip}
          width="60px"
          height="90px"
          alt="clip"
          className="clip"
        />
        
        </div>
        <div className="info_aboutme">
        Im Februar dieses Jahres habe ich den Frontend Developer Kurs erfolgreich abgeschlossen und schon im letzten Monat meiner Ausbildung wurde mir ein Online-Praktikum bei einem Unternehmen angeboten. 

Hier habe ich angefangen, an einem wirklich großen Projekt zu arbeiten, neue Technologien wie Gitlab, TypeScript, Styled Components zu lernen und Teamarbeit mit der Scrum-Methodik ist tolle Erfahrung für mich.<br/>

Nach meinem Praktikum kam ich als Webentwickler zu Reifenvertrieb24, wo ich in die Welt von WordPress eintauchte und lernte, wie man einen FTP-Server verwaltet. Drei Monate lang war ich maßgeblich an der Fertigstellung der Hauptwebsite des Unternehmens beteiligt, eine Leistung, die meine Fähigkeit unterstreicht, Projekte bis zum Abschluss zu begleiten. Nun bin ich, inspiriert von diesem Erfolg, auf der Suche nach einem neuen beruflichen Umfeld, um meine Fähigkeiten weiter zu verbessern und mein gesammeltes Wissen zu kanalisieren.

 </div>
        <a href={cv} download className="btn2">Lebenslauf herunterladen </a>
      </div>
  );
}
)
export default About