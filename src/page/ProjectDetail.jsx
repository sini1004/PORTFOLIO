import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { siteText } from "../constants";

const ProjectDetail = () => {
  const { id } = useParams();
  const site = siteText.find((item) => item.id === parseInt(id));

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

  if (!site) {
    return <div>Page not found</div>;
  }

  // const displayLink = site.link
  //   .replace(/^https?:\/\/(www\.)?/, "")
  //   .replace(/\/$/, "");

  return (
    <div className={`project__detail design${site.id}`}>
      <div className="project__inner">
        <div ref={projectRef} className={`project ${animate ? "animate" : ""}`}>
          <div className="project__img">
            <img src={site.logoimg} alt={site.logoalt} />
          </div>
          <div className="project__desc">
            <h1>{site.title}</h1>
            <span>{site.period}</span>
            <p>{site.desc}</p>
          </div>
        </div>

        <div className="project__contents">
          <div className="detail__img">
            <img src={site.screen} alt={site.screenalt} />
          </div>
        </div>

        <p>{site.text.join(", ")}</p>

        <div className="info">
          {site.info.map((info, index) => (
            <span key={index}>{info}</span>
          ))}
        </div>
        <div className="btn">
          <a href={site.code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={site.view} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
