import React from "react";

import { introText } from "../constants";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/typing";

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="intro">
      <div className="intro__inner">
        <div className="intro__main">
          <h1 className="intro__title">{introText.title}</h1>
          <Lottie
            options={defaultOptions}
            speed={0.7}
            height={400}
            width={400}
          />
        </div>
        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src="{about}" alt="어바웃" />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
