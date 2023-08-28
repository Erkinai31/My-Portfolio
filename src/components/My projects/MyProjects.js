import React, { forwardRef } from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../../assets/video/GartenShop.mp4";
import Vid2 from "../../assets/video/MovieVideo.mp4";
import Vid3 from "../../assets/video/NewYear.mp4";
import Vid4 from "../../assets/video/GithubProfil.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "./MyProjects.scss";

const MyProjects = forwardRef((props, ref) => {
  const { MyProjectsRef } = props;

  const videoProperities = [
    {
      id: 1,
      title: "Garden Store",
      src: Vid1,
      src2: "https://github.com/Erkinai31/Course-final-project.git",
      credit: "Look at the code here",
    },
    {
      id: 2,
      title: "Movie Recommendation",
      src: Vid4,
      credit: "Look at the code here",
      src2: "https://github.com/Erkinai31/MovieSpace-Project.git",
    },
    {
      id: 3,
      title: "New year resolution",
      src: Vid3,
      credit: "Look at the code here",
      src2: "https://github.com/Erkinai31/New-Year-Resolution-Proj-own-Idea-.git",
    },
    {
      id: 4,
      title: "Github Profil",
      src: Vid2,
      credit: "Look at the code here",
      src2: "https://github.com/Erkinai31/github-users.git",
    },
  ];
  return (
    <div className="projectPage" ref={MyProjectsRef}>
      <div className="project_content">
        <h1 className="title">Meine Projekte</h1>
        <Carousel>
          {videoProperities.map((videoObj) => {
            return (
              <Carousel.Item key={videoObj.id}>
                <ReactPlayer
                  width="100%"
                  height="500px"
                  url={videoObj.src}
                  pip={true}
                  controls={true}
                  playing={true}
                />
                <Carousel.Caption>
                  <h3>{videoObj.title}</h3>
                  <a href={videoObj.src2}> {videoObj.credit}</a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
});
export default MyProjects;
