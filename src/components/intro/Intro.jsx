import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react"; 

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Freelancer Developer",
        "Freelancer Front-End",
        "Freelancer Engenner",
        "Employee Developer",
        "Employee Front-End",
        "Employee Engenner",
        "Entrepreneur Developer",
        "Entrepreneur Front-End",
        "Entrepreneur Engenner",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello Word, I'm</h2>
          <h1>Yeferson Culma</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-black.png" alt="" className="arrowDown" />
        </a>
      </div>
    </div>
  );
}
