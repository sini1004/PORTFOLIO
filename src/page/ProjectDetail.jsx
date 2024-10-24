import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { proText } from "../constants";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = proText.find((item) => item.id === parseInt(id));

  const [animate, setAnimate] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(projectRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  if (!project) {
    return <div>Page not found</div>;
  }

  // const displayLink = project.link
  //   .replace(/^https?:\/\/(www\.)?/, "")
  //   .replace(/\/$/, "");

  return (
    <div className={`project__detail design${project.id}`}>
      <div className="project__inner">
        <div ref={projectRef} className={`project ${animate ? "animate" : ""}`}>
          <div className="project__img">
            <img src={project.logoimg} alt={project.logoalt} />
          </div>
          <div className="project__desc">
            <h1>{project.title}</h1>
            <span>{project.period}</span>
            <p>{project.desc}</p>
          </div>
        </div>

        <div className="project__contents">
          <div
            className={`detail__img ${
              Array.isArray(project.screen) && project.screen.length > 1
                ? "multiple"
                : ""
            }`}
          >
            {project.id === 3 && <p>보안상 블러 처리하였습니다.</p>}

            {Array.isArray(project.screen) ? (
              project.screen.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))
            ) : (
              <img src={project.screen.src} alt={project.screen.alt} />
            )}
          </div>

          <div className="sub__img">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        <div className="project__text">
          {project.text.map((item, index) => (
            <div key={index}>
              <h4 className="text__title">{item.texttitle}</h4>
              <p>
                <span>✏️</span>
                {item.textdesc.split(".").map((sentence, i, arr) => (
                  <React.Fragment key={i}>
                    {sentence.trim()}
                    {i < arr.length - 1 && "."}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="info">
          {project.info.map((info, index) => (
            <span key={index}>{info}</span>
          ))}
        </div> */}
        {/* <div className="btn">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={project.view} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDetail;
