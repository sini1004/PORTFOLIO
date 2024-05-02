import React from "react";

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">site</h2>
        <div className="site__wrap">
          <article className="site__item s1">
            <span className="num">1.</span>
            <div className="text">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h3 className="title">제작 사이트</h3>
            <div className="btn">
              <a href="">코드링크(깃)</a>
              <a href="">뷰 링크(사이트)</a>
            </div>
            <div className="info">
              <span>제목</span>
              <span>설명</span>
              <span>스택</span>
            </div>
          </article>
          <article className="site__item s2">
            <span className="num">2.</span>
            <div className="text">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h3 className="title">제작 사이트</h3>
            <div className="btn">
              <a href="">코드링크(깃)</a>
              <a href="">뷰 링크(사이트)</a>
            </div>
            <div className="info">
              <span>제목</span>
              <span>설명</span>
              <span>스택</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Site;
