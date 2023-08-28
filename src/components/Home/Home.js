import React, { forwardRef } from "react";
import myPhoto from "../../assets/img/sticker.webp";
import "./Home.scss";
import Typed from "typed.js";
import linkedin from "../../assets/img/Linkedin-logo-on-transparent-Background-PNG-.png"
import xing from "../../assets/img/xing-icon.svg"
import gmail from "../../assets/img/logo-email.png"
import github from "../../assets/img/github.svg.png"


const Home = forwardRef((props, ref) => {
  const { HomeRef } = props;
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i> Hallo, meine Name ist Erkinai</i>",
        " und ich bin Frontend Entwicklerin!",
      ],
      typeSpeed: 80,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="profil" ref={HomeRef}>
      <div>
        <div className="profil__intro">
          <h1 className="title" ref={el}></h1>
          <img
            src={myPhoto}
            width="270px"
            height="290px"
            alt="profil"
            className="myPhoto"
          />
        </div>
        <div>
          <p className="about">
          Es macht mir wirklich Spaß, Schnittstellen zu erstellen und mit Benutzern zu interagieren. Die Frontend-Entwicklung ermöglicht es mir, meiner Kreativität Ausdruck zu verleihen und angenehme, praktische und schöne Schnittstellen für Menschen zu erstellen.
          </p>
        </div>
      </div>
      
     
       <div className='contact_icons'>
     <a href='https://www.linkedin.com/in/emuktarbekova'> <img src={linkedin} width='50px' className='png'/></a>
    <a href='https://www.xing.com/profile/Erkinai_Muktarbekova2/cv'> <img src={xing} width='40px' className='png'/></a> 
     <a href='https://github.com/Erkinai31'> <img src={github} width='50px' className='png'/> </a>
    </div>
  
    <a href="mailto:emuktarbekova@gmail.com" className="btn1">
     <img src={gmail} width='50px' className='png'/> Kontaktiere mich
      </a>
    </div>
  );
});
export default Home;
