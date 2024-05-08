import React from "react";
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";

const portText = [
  {
    num: "01",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port01,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
  {
    num: "02",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port02,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
  {
    num: "03",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port03,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
  {
    num: "04",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port04,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
  {
    num: "05",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port02,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
  {
    num: "06",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port03,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
  {
    num: "07",
    title: "포폴 타이틀 작성",
    desc: "포폴 설명 작성하기",
    img: port04,
    code: "https://github.com/sini1004/LACOSTE",
    view: "https://lacosteshop.netlify.app/",
    name: "포트폴리오",
  },
];

const Port = () => {
  return (
    <section id="port">
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key}>
              <span className="num">{port.num}.</span>
              <a
                href={port.code}
                target="_blank"
                className="img"
                rel="noreferrer"
              >
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a
                href={port.view}
                target="_blank"
                className="site"
                rel="noreferrer"
              >
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
