import React from "react";

import { introText } from "../constants";
import TypingEffect from "../effect/TypingEffect";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/typing";

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      className: "lottie__svg", // svg에 적용
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="intro">
      <div className="intro__inner">
        <div className="intro__main">
          {/* <TypingEffect text={introText.title} /> */}
          {/* <Lottie options={defaultOptions} speed={1} width={680} height={400} /> */}
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
