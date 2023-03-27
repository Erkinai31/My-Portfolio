import React, { forwardRef } from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../../assets/video/IMG_8022.MOV";
import Vid2 from "../../assets/video/IMG_8030.MOV";
import Vid3 from "../../assets/video/IMG_8036.MOV";
import Vid4 from "../../assets/video/IMG_7390.MOV";
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
      title: "Timer and Stopwatch",
      src: Vid2,
      credit: "Look at the code here",
      src2: "https://github.com/Erkinai31/Time-managment-own-design-.git",
    },
  ];
  return (
    <div className="projectPage" ref={MyProjectsRef}>
      <div className="project_content">
        <h1 className="title"> My Projects</h1>
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
