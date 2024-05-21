import React from "react";
import { useParams } from "react-router-dom";
import { siteText } from "../constants";

const PageDetail = () => {
  const { id } = useParams();
  const site = siteText.find((item) => item.id === parseInt(id));

  if (!site) {
    return <div>Page not found</div>;
  }

  return (
    <div className={`page-detail design${site.id}`}>
      <h1>{site.title}</h1>
      <p>{site.text.join(" ")}</p>
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
  );
};

export default PageDetail;
