import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
                onClick={(e) => {
                  if (pro.link === "보안 이슈") {
                    e.preventDefault(); // 링크 기본 동작 방지
                    Swal.fire({
                      title: "안녕하세요!",
                      text: "Modal with a custom image.",
                      html: `
                      현재 클릭하신 사이트는<br/>
                      보안상의 이유로 확인하실 수 없습니다.🥲<br/>
                      감사합니다.🙏🏻
                      `,
                      showClass: {
                        popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `,
                      },
                      hideClass: {
                        popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `,
                      },
                      showCancelButton: false,
                      confirmButtonText: "확인",
                    });
                  }
                }}
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
