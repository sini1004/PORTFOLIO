import React, { useState, useRef, useEffect } from "react";

import { skillText } from "../constants";

const Skill = () => {
  const [currentImage, setCurrentImage] = useState(skillText[0].chaImg);
  const [activeIndex, setActiveIndex] = useState(0);

  const leftImageRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftImageRef.current && descRef.current) {
        const descElements = descRef.current.children;
        const leftImageRect = leftImageRef.current.getBoundingClientRect();
        const leftImageTop = leftImageRect.top + window.scrollY;
        const leftImageHeight = leftImageRect.height;
        const leftImageBottom = leftImageTop + leftImageHeight;

        for (let index = 0; index < descElements.length; index++) {
          const descElement = descElements[index];
          const elementRect = descElement.getBoundingClientRect();
          const elementTop = elementRect.top + window.scrollY;
          const elementBottom = elementTop + elementRect.height;

          if (elementTop >= leftImageTop && elementBottom <= leftImageBottom) {
            descElement.classList.remove("blurred");
            descElement.style.fontSize = "1.8em";
          } else {
            descElement.classList.add("blurred");
            descElement.style.fontSize = "";
          }

          const scrollPosition = window.scrollY + window.innerHeight * 0.8;
          console.log("position>>>>>>>>>>>>>>>>>>>>>>>>", scrollPosition);

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentImage(skillText[index].chaImg);
            setActiveIndex(index);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <section id="skill">
      <div className="skill__inner">
        <div className="skill__left" ref={leftImageRef}>
          <h2 className="skill__title" ref={leftImageRef}>
            Challenge <em>나의 도전</em>
          </h2>
          {/* <div className="skill__image">
            <img src={currentImage} alt="challenge" />
          </div> */}
        </div>
        <div className="skill__desc" ref={descRef}>
          {skillText.map((skill, key) => (
            <div
              key={key}
              className={`skill__item ${
                activeIndex === key ? "large-font" : ""
              }`}
              onMouseEnter={() => setCurrentImage(skill.chaImg)}
            >
              <div className="skill__image">
                <img src={currentImage} alt="challenge" />
              </div>
              <div className="">
                <span>{key + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
