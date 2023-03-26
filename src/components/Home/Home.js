import React, { forwardRef } from "react";
import myPhoto from "../../assets/img/sticker.webp";
import "./Home.scss";
import Typed from "typed.js";

const Home = forwardRef((props, ref) => {
  const { HomeRef } = props;
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i> Hi, my name's Erkinai</i>",
        " and i'm Junior Frontend developer !",
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
            I really enjoy creating interfaces and interacting with users.
            Frontend development allows me to express my creativity and create
            pleasant, convenient and beautiful interfaces for people.
          </p>
        </div>
      </div>
      <a href="mailto:emuktarbekova@gmail.com" className="btn1">
        Contact Me
      </a>
    </div>
  );
});
export default Home;
