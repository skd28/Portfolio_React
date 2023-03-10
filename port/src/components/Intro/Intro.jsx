import React from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect } from "react";
import { useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Coder", "Content Creator"],
    });
  }, []);

  return (
    <div className="into" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Shivanjal Dwivedi</h1>
          <h3>
            Web<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio"></a>
        <img src="assets/down.png" alt="" />
      </div>
    </div>
  );
}
