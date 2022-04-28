import React from "react";
import { useState } from "react";
import "./about.scss";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Design",
      desc: "The design of web applications, I do it to follow the appropriate metrics for a real project.",
      img: "https://blog.ida.cl/wp-content/uploads/sites/5/2016/09/website-development-vs-web-application-development.jpg",
      url: "https://www.github.com/yeferfer",
      descUrl: "GITHUB",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "I have made mobile applications using basic components, however that does not stop me from continuing to grow and study new tools.",
      img: "https://www.muycomputerpro.com/wp-content/uploads/2016/02/aplicaciones-iphone.jpg",
      url: "https://www.linkedin.com/in/yefersonculma",
      descUrl: "LINKEDIN",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Larning",
      desc: "I am currently learning about React and Flutter. other things that go directly with the above are SASS.",
      img: "https://www.dignited.com/wp-content/uploads/2020/01/software-development.png",
      url: "#intro",
      descUrl: "RESUME",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="about" id="about">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item itemAbout">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a
                    href="assets/CV YefersonCulma.pdf"
                    download="CV Yeferson Culma"
                    onClick={() => {
                      window.location = d.url;
                    }}
                  >
                    {d.descUrl}
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow-black.png"
        className="arrow left arrows"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow-black.png"
        className="arrow right arrows"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
