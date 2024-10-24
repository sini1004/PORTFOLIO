import React from "react";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__text">
          <span>sini</span>
          <span>@web</span>
        </div>
        <div className="footer__info">
          {/* <div className="left">
            <div className="title">
              <a href="#">signup</a>
            </div>
            <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div> */}
          {/* <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="#"></a>
                <em>문구</em>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="footer__right">© 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
