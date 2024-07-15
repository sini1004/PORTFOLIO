import React, { useState } from "react";

import { skillText } from "../constants";

const Skill = () => {
  const [currentImage, setCurrentImage] = useState(skillText[0].chaImg);

  return (
    <section id="skill">
      <div className="skill__inner">
        <div className="skill__left">
          <h2 className="skill__title">
            Challenge <em>나의 도전</em>
          </h2>
          {/* <div className="skill__image">
            이미지부분
            <img src={currentImage} alt="challenge" />
          </div> */}
        </div>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key} onMouseEnter={() => setCurrentImage(skill.chaImg)}>
              <span>{key + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
