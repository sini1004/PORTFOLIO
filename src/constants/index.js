import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import logoimg01 from "../assets/img/page/logo/logo01.jpg";
import logoimg02 from "../assets/img/page/logo/logo02.png";
import logoimg03 from "../assets/img/page/logo/logo03.png";
import logoimg04 from "../assets/img/page/logo/logo04.svg";
import mainimg01 from "../assets/img/page/screen/mainimg01.jpg";
import mainimg02 from "../assets/img/page/screen/mainimg02.jpg";
import scrimg01 from "../assets/img/page/screen/screen01.jpg";
import scrimg02 from "../assets/img/page/screen/screen02.jpg";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "protfile",
    url: "#prot",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const introText = {
  title: "port developer",
  desc: ["talent isssss", "found at the end of the", "effort"],
};

export const skillText = [
  {
    title: "꿈을 설계하고 디자인하다.",
    desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.",
  },
  {
    title: "열심히 할수록 기회는 따른다.",
    desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.",
  },
  {
    title: "나에게 정직하다.",
    desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.",
  },
];

export const siteText = [
  // 여가부-개방관리시스템,공모전 사이트 / 에너지기술연구원관리자페이지 /
  {
    id: 1,
    logoimg: logoimg01,
    logoalt: "여성가족부",
    period: "2023.2 - 2024.6",
    text: ["make", "site compliant with", "next.js"],
    title: "사이트 라우터 연습 타이틀",
    link: "https://mogefdatacontest.co.kr/",
    desc: "'청소년데이터 융복합 분석·활용 공모전' 은 여성가족부에서 주최하는 공모전 웹 사이트로서 공모전 접수를 할 수 있으며, 공모전 개요, 요강과 접수 확인이 가능합니다.",
    screen: scrimg01,
    screenalt: "공모전공공데이터검색기능",
    code: "https://github.com/webstoryboy/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
  {
    id: 2,
    logoimg: logoimg03,
    logoalt: "전통문화혁신플랫폼",
    period: "2023.11 - 2024.2",
    text: ["make", "site compliant with", "vue.js"],
    title: "뷰를 이용한 사이트 제작",
    link: "http://chsr.re.kr/",
    desc: "",
    screen: scrimg01,
    screenalt: "전통문화혁신플랫폼",
    code: "https://github.com/webstoryboy/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, vue",
    ],
  },
  {
    id: 3,
    logoimg: logoimg03,
    logoalt: "전통문화혁신플랫폼",
    text: ["make", "site compliant with", "vue.js"],
    title: "뷰를 이용한 사이트 제작",
    link: "http://chsr.re.kr/",
    desc: "",
    code: "https://github.com/webstoryboy/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, vue",
    ],
  },
  {
    id: 4,
    logoimg: logoimg01,
    logoalt: "여성가족부",
    text: ["make", "site compliant with", "next.js"],
    title: "사이트 라우터 연습 타이틀",
    link: "https://mogefdatacontest.co.kr/",
    desc: "기존 서비스의 안정적인 운영을 위해 유지보수와 개선 작업을 진행하는 한편, 새로운 서비스의 UI 개발 업무도 맡았습니다.",
    code: "https://github.com/webstoryboy/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
];

export const proText = [
  //  프로젝트 : 여가부-개방관리시스템,공모전 사이트 / 에너지기술연구원관리자페이지 /전통문화플랫폼
  {
    id: 1,
    num: "01",
    logoimg: logoimg01,
    logoalt: "여성가족부",
    period: "2023.2 - 2024.6",
    text: ["make", "site compliant with", "html, css, jquery, and javascript"],
    title: "여성가족부 공모전",
    link: "https://mogefdatacontest.co.kr/",
    desc: "'청소년데이터 융복합 분석·활용 공모전' 은 여성가족부에서 주최하는 공모전 웹 사이트로서 공모전 접수를 할 수 있으며, 공모전 개요, 요강과 접수 확인이 가능합니다.",
    main: mainimg01,
    mainalt: "프로젝트1",
    screen: scrimg01,
    screenalt: "공모전공공데이터검색기능",
    code: "https://github.com/webstoryboy/port2023-next",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
  {
    id: 2,
    num: "02",
    logoimg: logoimg03,
    logoalt: "전통문화혁신플랫폼",
    period: "2023.10 - 2023.12",
    text: ["make", "site compliant with", "html, css, jquery, and javascript"],
    title: "뷰를 이용한 사이트 제작",
    link: "http://chsr.re.kr/",
    desc: "ddddddddd",
    main: mainimg02,
    mainalt: "프로젝트3",
    screen: scrimg02,
    screenalt: "전통문화혁신플랫폼",
    code: "https://github.com/webstoryboy/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, vue",
    ],
  },
  {
    id: 3,
    num: "03",
    logoimg: logoimg03,
    logoalt: "한국에너지기술연구원",
    text: ["make", "site compliant with", "vue.js"],
    title: "한국에너지기술연구원",
    link: "http://chsr.re.kr/",
    desc: "전자정부 프레임워크 기반의 CMS 사이트이며, API 조회·모니터링과 개방 DB 테이블 조회, 사용자 권한 관리, 메뉴 관리 등이 가능합니다.",
    code: "https://github.com/webstoryboy/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, vue",
    ],
  },
  {
    id: 4,
    num: "04",
    logoimg: logoimg01,
    logoalt: "여성가족부",
    text: ["make", "site compliant with", "next.js"],
    title: "사이트 라우터 연습 타이틀",
    link: "https://mogefdatacontest.co.kr/",
    desc: "기존 서비스의 안정적인 운영을 위해 유지보수와 개선 작업을 진행하는 한편, 새로운 서비스의 UI 개발 업무도 맡았습니다.",
    code: "https://github.com/webstoryboy/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
];

export const portText = [
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

export const contactText = [
  {
    link: "https://open.kakao",
    title: "KAKAO : sini",
  },
  {
    link: "mailto:P_SHINHEE@naver.com",
    title: "mail : p_shinhee@naver.com",
  },
];
