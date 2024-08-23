import chaImg01 from "../assets/img/challenge01.jpg";
import chaImg02 from "../assets/img/challenge02.jpg";
import chaImg03 from "../assets/img/challenge03.jpg";
import chaImg04 from "../assets/img/challenge04.jpg";
import chaImg05 from "../assets/img/challenge05.jpg";
import chaImg06 from "../assets/img/challenge06.jpg";
import chaImg07 from "../assets/img/challenge07.jpg";
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import logoimg01 from "../assets/img/page/logo/logo01.jpg";
import logoimg02 from "../assets/img/page/logo/logo03.png";
import logoimg03 from "../assets/img/page/logo/logo02.png";
import logoimg04 from "../assets/img/page/logo/logo04.svg";
import logoimg05 from "../assets/img/page/logo/logo05.svg";
import logoimg06 from "../assets/img/page/logo/logo06.png";
import logoimg07 from "../assets/img/page/logo/logo07.png";
import mainimg01 from "../assets/img/page/screen/mainimg01.jpg";
import mainimg02 from "../assets/img/page/screen/mainimg02.jpg";
import mainimg03 from "../assets/img/page/screen/mainimg03.jpg";
import mainimg04 from "../assets/img/page/screen/mainimg04.jpg";
import mainimg05 from "../assets/img/page/screen/mainimg05.jpg";
import mainimg06 from "../assets/img/page/screen/mainimg06.png";
import scrimg01 from "../assets/img/page/screen/screen01.jpg";
import scrimg02 from "../assets/img/page/screen/screen02.jpg";
import scrimg03 from "../assets/img/page/screen/screen03.jpg";
import scrimg04_1 from "../assets/img/page/screen/screen04-1.jpg";
import scrimg04_2 from "../assets/img/page/screen/screen04-2.jpg";
import scrimg05 from "../assets/img/page/screen/screen05.jpg";
import scrimg06 from "../assets/img/page/screen/screen06.jpg";

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
    title: "Listening",
    desc: "상대방의 이야기를 들어주는 것을 좋아하고 진심을 다해 공감해주는 성격이에요!",
    chaImg: chaImg01,
  },
  {
    title: "Less but better",
    desc: "'부족하지만 더 나은'생각으로 프로젝트에 최선을 다합니다.",
    chaImg: chaImg02,
  },
  {
    title: "Choice Without Regret",
    desc: "후회없는 선택과 삶을 살고싶기에 매순간 신중하고 열심히 사려고 노력하고 있습니다. :)",
    chaImg: chaImg03,
  },
  {
    title: "Communication",
    desc: "원활한 소통을 통해 팀원들과의 협업을 매우 중요하게 생각합니다. 소통은 팀원들과 의견을 공유하고 이해하는데 도움을 주며, 팀의 신뢰를 쌓고 효율적인 협업을 가능하게 합니다.",
    chaImg: chaImg04,
  },
  {
    title: "Passion",
    desc: "밝은 에너지로 동료들과 협동하며 매력적인 코딩, 깔끔한 동적 구현을 해내고 마는 퍼블리셔/프론트엔드 개발자가 되겠습니다.",
    chaImg: chaImg05,
  },
  {
    title: "Effort",
    desc: "어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 노력하겠습니다.",
    chaImg: chaImg06,
  },
  {
    title: "Steadily",
    desc: "웹디자인을 하며 웹에 대한 호기심이 생겼고 현재는 웹에 대해 공부하며 조금은 느리지만 꾸준하게 성장하고 있다고 생각합니다.",
    chaImg: chaImg07,
  },
];

export const siteText = [
  {
    id: 1,
    period: "2023.01 - 2023.02",
    title: "CHWEDU(학생이용 앱)",
    text: [
      "로그인 시 '@'를 포함한 이메일 형식의 아이디와 5자리 이상 비밀번호를 입력해야 하는 조건을 붙였으며, 로그인시 입력했던 이메일의 '@'앞 자리를 아이디로 인식하여 메인에서 볼 수 있습니다. jsQR 모듈을 이용하여 QR인식을 할 수 있으며, 투두리스트에 할 일 추가, 삭제, 수정을 할 수 있습니다. Math.random()를 이용해 랜덤으로 단어를 볼 수 있게 하였습니다.",
      "html5, css3, jquery, javascript",
    ],
    view: "https://sini1004.github.io/PWA_CHWEDU/",
    code: "https://github.com/sini1004/PWA_CHWEDU/",
    pdf: "./assets/pdf/CHWEDU.pdf",
  },
  {
    id: 2,
    period: "2022.11 - 2022.11",
    title: "React_Todo List",
    text: [
      "투두리스트에 투두아이템을 추가, 삭제할 수 있고, 좌측상단 버튼을 통해 다크 모드를 설정할 수 있습니다. 해당 투두 아이템을 완료했는지에 따라서 필터링도 가능합니다.",
      "React, css Module",
    ],
    view: "https://shinhee-todo.netlify.app/",
    code: "https://github.com/sini1004/React_TODO",
  },
  {
    id: 3,
    period: "2022.11 - 2022.11",
    title: "React_Shopphing(LACOSTE)",
    text: [
      "데이터베이스 역할을 해주는 db.josn파일을 생성하여, 이미지의 url, 가격 등의 정보를 넣어주었습니다. fetch함수를 이용해 API호출을 하였으며, 로그인이 되었을 때에만 상품의 상세페이지를 볼 수 있도록 하였고, 검색 기능을 구현하였습니다. React-Bootstrap과 미디어쿼리를 사용해 반응형으로 작업하였습니다.",
      "React, json-server, Router, React-Bootstrap, Sass",
    ],
    view: "https://lacosteshop.netlify.app/",
    code: "https://github.com/sini1004/LACOSTE",
  },
  {
    id: 4,
    period: "2022.12 - 2022.12",
    title: "React_OTT 클론코딩",
    text: [
      "react-router를 사용해 SPA형태로 구성되었습니다.  axios를 활용해 데이터를 불러왔으며, async, await를 사용해 각각의 api를 비동기적으로 불러왔습니다.",
      "React, Router, React-Bootstrap, Sass",
    ],
    view: "https://shinhee-ott-hulu.netlify.app/",
    code: "https://github.com/sini1004/OTT",
  },
  {
    id: 5,
    period: "2023.12 - 2024.01",
    title: "wedding invitation",
    text: [""],
    view: "#",
    code: "https://github.com/ChangSol/wedding-invitation",
  },
  {
    id: 6,
    period: "2023.11 - 2023.2",
    title: "Vue_Todo",
    text: [
      "vue를 학습하며 만든 Todo List 입니다. localStorage를 사용하여 새로고침해도 등록한 리스트가 남아있을 수 있게 하였으며, TransitionGroup Component를 사용하여 애니메이션을 적용하였습니다. Madal Component를 사용하여 input창에 아무것도 입력하지 않고 추가하였을 때 Modal이 뜰 수 있도록 하였습니다.",
      "Vue, TransitionGroup Component, Modal Component",
    ],
    view: "https://shinhee-vue-todo.netlify.app/",
    code: "https://github.com/sini1004/Vue_TODO",
  },
];

export const proText = [
  //  프로젝트 : 리치데이터 / 수집관리 시스템 / 여가부-개방관리시스템,공모전 사이트 / 에너지기술연구원관리자페이지 / 전통문화플랫폼 / 제보

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 여가부-개방관리시스템,공모전 사이트
  {
    id: 1,
    num: "01",
    period: "2023.02 - 2024.06",
    link: "https://mogefdatacontest.co.kr/",
    title: "여성가족부 공모전",
    desc: "'청소년데이터 융복합 분석·활용 공모전' 은 여성가족부에서 주최하는 공모전 웹 사이트로서 공모전 접수를 할 수 있으며, 공모전 개요, 요강과 접수 확인이 가능합니다.",
    text: [
      "공모전 상세 정보를 표시하는 페이지를 구현하였으며, 참가자들이 공모전에 쉽게 신청할 수 있도록 참가 신청 페이지를 구현하였고, 공지사항/문의하기 등의 페이지를 구현하였습니다.",
      "기존 테이블 태그로 작성된 HTML을 <div>, <section>, <article> 등의 시맨틱한 마크업 태그로 변경하여 웹 접근성과 검색 엔진 최적화를 강화하였습니다.",
      "HTML 및 CSS를 활용한 마크업 작업을 담당하였고, JavaScript와 jQuery를 사용하여 공공 데이터 포털 API를 연동하는 작업을 담당했습니다. 이를 통해 실시간으로 데이터를 가져오고 가공하여 화면에 동적으로 표시하는 작업을 수행했습니다. 특히, 비동기 호출을 통해 데이터 로드 시 사용자 경험을 향상시키는 것에 중점을 두었습니다.",
      "이 프로젝트를 통해 HTML, CSS, JavaScript, jQuery를 활용한 마크업과 데이터 처리 기술을 향상시킬 수 있었습니다. ",
    ],
    logoimg: logoimg01,
    logoalt: "여성가족부",
    main: mainimg01,
    mainalt: "프로젝트1",
    screen: [{ src: scrimg01, alt: "공모전공공데이터검색기능" }],
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 전통문화혁신플랫폼
  {
    id: 2,
    num: "02",
    period: "2023.10 - 2024.01",
    link: "http://chsr.re.kr/",
    title: "전통문화혁신플랫폼",
    desc: "2023 전통문화서비스 활성화를 위한 온라인 플랫폼 기반 구축 ",
    text: ["make", "site compliant with", "html, css, jquery, and javascript"],
    logoimg: logoimg02,
    logoalt: "전통문화혁신플랫폼",
    main: mainimg02,
    mainalt: "프로젝트2",
    screen: [{ src: scrimg02, alt: "전통문화혁신플랫폼" }],
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 한국에너지기술연구원
  {
    id: 3,
    num: "03",
    period: "2023.10 - 2023.12",
    link: "보안 이슈",
    title: "한국에너지기술연구원",
    desc: "전자정부 프레임워크 기반의 CMS 사이트이며, API 조회·모니터링과 개방 DB 테이블 조회, 사용자 권한 관리, 메뉴 관리 등이 가능합니다.",
    text: [
      "CMS 화면단의 UI/UX 디자인을 구현하고, HTML, CSS, JavaScript 등을 사용하여 사용자 인터페이스를 개발하였습니다. 전자정부프레임워크의 템플릿 및 모듈을 활용하여 페이지 구성 요소들을 효율적으로 배치 및 최적화하였습니다.",
      "'OpenWAX' 도구를 사용하여 웹 접근성 진단을 실시하였으며, 'W3C Markup Validation Service'통해 웹 호환성 진단을 하여 검증 및 오류 수정을 진행했습니다.",
    ],
    logoimg: logoimg03,
    logoalt: "한국에너지기술연구원",
    main: mainimg03,
    mainalt: "프로젝트3",
    screen: [{ src: scrimg03, alt: "전통문화혁신플랫폼" }],
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 제보
  {
    id: 4,
    num: "04",
    period: "2023.02 - 2023.05",
    link: "https://jebo.io/home",
    title: "제보(Jebo)",
    desc: "사용자가 실시간으로 교통, 날씨, 재난, 사건사고 등 주변의 상황 정보를 공유하는 서비스입니다. 사용자들이 제공하는 순간 상황 정보가 다른 사용자들에게 중요한 자료가 될 수 있습니다.",
    text: [
      "리액트 기반의 프로젝트로 편의 지도 페이지의 UI를 개선하는 작업을 담당하였습니다. Styled-components를 활용하여 UI 요소들의 일관된 스타일을 유지하고, 코드의 재사용성을 높였습니다. 제보 및 공공 정보를 시각적으로 구분하여 사용자가 쉽게 인식할 수 있도록 redMarker, blueMarker 등의 속성을 활용하였습니다. 또한, 편의지도 리스트를 효율적으로 표시하고 사용자 상호작용을 개선하기 위해 MoreItemBoxWrapper, ItemListClose 컴포넌트를 추가하였습니다.",
      "제보 프로젝트의 QA(품질 보증)를 담당하였습니다. 다양한 디바이스 테스트, 브라우저 호환성 테스트, 기능 테스트와 버그 리포트를 통해 프로젝트의 품질을 보장하였습니다.",
      "제보큐브(구 제보 더보기)는 사용자가 커뮤니티, 채널, 테마, 캠페인 피드에 참여할 수 있는 공간으로, 이를 보다 직관적이고 사용하기 쉽게 만들기 위해 UI/UX 개선 및 디자인 작업을 수행하였습니다. 사용자 경험을 최적화하고, 시각적으로 매력적인 인터페이스를 제공하여 사용자 참여를 촉진할 수 있도록 하였습니다.",
    ],
    logoimg: logoimg04,
    logoalt: "제보",
    main: mainimg04,
    mainalt: "프로젝트4",
    screen: [
      { src: scrimg04_1, alt: "편의지도1" },
      { src: scrimg04_2, alt: "편의지도2" },
    ],
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 주식회사리스트
  {
    id: 5,
    num: "05",
    period: "2023.02 - 2024.08",
    link: "http://li-st.com/",
    title: "주식회사 리스트",
    desc: "데이터 전문 기술 기업으로, 회사의 데이터 솔루션과 기술 역량, 프로젝트 사례, 그리고 회사의 비전과 목표에 대한 정보를 제공합니다.",
    text: [
      "기존 서비스의 안정적인 운영을 위해 지속적인 유지보수와 개선 페이지별 개선 작업을 담당하였습니다.",
      "DBeaver 툴을 사용하여 입사자 및 퇴사자의 데이터 관리 업무를 수행하였습니다.",
    ],
    logoimg: logoimg05,
    logoalt: "(주)리스트",
    main: mainimg05,
    screen: [{ src: scrimg05, alt: "리스트_데이터바우처" }],
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 수집관리시스템
  {
    id: 6,
    num: "06",
    period: "2024.05 - 2024.08",
    link: "보안 이슈",
    title: "수집 관리 시스템",
    desc: "",
    text: [
      "시스템의 사용자 인터페이스(UI)를 구성하는 화면 마크업과 CSS 스타일링을 담당하였습니다.",
      "사용자가 다양한 정보를 쉽게 접근할 수 있도록 팝업(모달창) 기능을 구현하였고, 팝업(모달창)에서 이미지를 클릭하여 선택할 수 있는 기능을 추가하고, 선택된 이미지를 시각적으로 강조하여 표시하였습니다.",
      "데이터 분석 결과를 시각적으로 제공하기 위한 대시보드의 화면 설계 및 마크업을 작성하였습니다.",
    ],
    logoimg: logoimg06,
    logoalt: "수집관리시스템",
    main: mainimg06,
    screen: [{ src: scrimg06, alt: "수집관리시스템" }],
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 리치데이터
  {
    id: 7,
    num: "07",
    period: "2024.07 - 2024.08",
    link: "https://richdata.kr/",
    title: "리치데이터",
    desc: "민원상담 데이터 ",
    text: ["fffff"],
    logoimg: logoimg07,
    logoalt: "리치데이터",
    main: mainimg06,
    screen: [{ src: scrimg06, alt: "리치데이터" }],
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
