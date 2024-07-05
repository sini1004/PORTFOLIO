import React from "react";
import { Link } from "react-router-dom";

import { siteText } from "../constants";

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site Coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}</span>
              <div className="title">
                <h3>{site.title}</h3>
              </div>
              <p className="text">{site.text[0]}</p>
              {site.text.slice(1).map((text, index) => (
                <span className="text_skill" key={index}>
                  {text}
                </span>
              ))}
              <div className="btn">
                <a href={site.view} target="_blank" rel="noreferrer">
                  view
                </a>
                <a href={site.code} target="_blank" rel="noreferrer">
                  github
                </a>
                {site.pdf && (
                  <a href={site.pdf} target="_blank" rel="noreferrer">
                    Download PDF
                  </a>
                )}
              </div>
              {/* <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
