import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { proText } from "../constants";
import { distribute, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  const desiredOrder = [6, 1, 2, 3, 4, 5];
  const orderedProText = desiredOrder.map((id) =>
    proText.find((pro) => pro.id === id)
  );

  return (
    <section id="pro" ref={horizontalRef}>
      <div className="pro__inner">
        <div className="pro__title">
          Project <em>프로젝트 작업물</em>
        </div>
        <div className="pro__wrap">
          {orderedProText.map((pro, key) => (
            <article
              className={`pro__item p${key + 1}`}
              key={key}
              ref={(el) => (sectionsRef.current[key] = el)}
            >
              <span className="num">{pro.num}</span>
              <a
                href={pro.link}
                target="_blank"
                className="pro__img"
                rel="noreferrer"
              >
                <img src={pro.main} alt={pro.mainalt} />
              </a>
              <h3 className="title">{pro.title}</h3>
              <p className="date">{pro.period}</p>

              <div className="btn">
                <Link to={`/page-detail/${pro.id}`}>page</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
