import chaImg01 from '../assets/img/challenge01.jpg';
import port01 from '../assets/img/port01.jpg';
import port02 from '../assets/img/port02.jpg';
import port03 from '../assets/img/port03.jpg';
import port04 from '../assets/img/port04.jpg';
import logoimg01 from '../assets/img/page/logo/logo01.jpg';
import logoimg02 from '../assets/img/page/logo/logo02.png';
import logoimg03 from '../assets/img/page/logo/logo03.png';
import logoimg04 from '../assets/img/page/logo/logo04.svg';
import mainimg01 from '../assets/img/page/screen/mainimg01.jpg';
import mainimg02 from '../assets/img/page/screen/mainimg02.jpg';
import scrimg01 from '../assets/img/page/screen/screen01.jpg';
import scrimg02 from '../assets/img/page/screen/screen02.jpg';
import scrimg03 from '../assets/img/page/screen/screen03.jpg';

export const headerNav = [
	{
		title: 'intro',
		url: '#intro',
	},
	{
		title: 'skill',
		url: '#skill',
	},
	{
		title: 'site',
		url: '#site',
	},
	{
		title: 'protfile',
		url: '#prot',
	},
	{
		title: 'contact',
		url: '#contact',
	},
];

export const introText = {
	title: 'port developer',
	desc: ['talent isssss', 'found at the end of the', 'effort'],
};

export const skillText = [
	{
		title: 'Listening',
		desc: '상대방의 이야기를 들어주는 것을 좋아하고 진심을 다해 공감해주는 성격이에요!',
		chaImg: chaImg01,
	},
	{
		title: 'Less but better',
		desc: "'부족하지만 더 나은'생각으로 프로젝트에 최선을 다합니다.",
	},
	{
		title: 'Choice Without Regret',
		desc: '후회없는 선택과 삶을 살고싶기에 매순간 신중하고 열심히 사려고 노력하고 있습니다. :)',
	},
	{
		title: 'Learn',
		desc: 'Html, CSS, Javascript를 배웠지만 부족함을 느껴 스터디를 통해 리액트, 뷰 등을 배우며 적극적으로 개발에 대한 역량을 키우고 있습니다.',
	},
	{
		title: 'Passion',
		desc: '밝은 에너지로 동료들과 협동하며 매력적인 코딩, 깔끔한 동적 구현을 해내고 마는 퍼블리셔/프론트엔드 개발자가 되겠습니다.',
	},
	{
		title: 'Effort',
		desc: '어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 노력하겠습니다.',
	},
	{
		title: 'Steadily',
		desc: '웹디자인을 하며 웹에 대한 호기심이 생겼고 지금은 웹에 대해 공부하며 조금은 느리지만 꾸준하게 성장하고 있다고 생각합니다.',
	},
];

export const siteText = [
	// 여가부-개방관리시스템,공모전 사이트 / 에너지기술연구원관리자페이지 /
	{
		id: 1,
		logoimg: logoimg01,
		logoalt: '여성가족부',
		period: '2023.2 - 2024.6',
		title: 'CHWEDU(학생이용 앱)',
		text: [
			"로그인 시 '@'를 포함한 이메일 형식의 아이디와 5자리 이상 비밀번호를 입력해야 하는 조건을 붙였으며, 로그인시 입력했던 이메일의 '@'앞 자리를 아이디로 인식하여 메인에서 볼 수 있습니다. jsQR 모듈을 이용하여 QR인식을 할 수 있으며, 투두리스트에 할 일 추가, 삭제, 수정을 할 수 있습니다. Math.random()를 이용해 랜덤으로 단어를 볼 수 있게 하였습니다.",
			'html5, css3, jquery, javascript',
		],
		view: 'https://sini1004.github.io/PWA_CHWEDU/',
		code: 'https://github.com/sini1004/PWA_CHWEDU/',
		pdf: 'assets/pdf/CHWEDU.pdf',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, next.js'],
	},
	{
		id: 2,
		period: '2023.11 - 2024.2',
		title: 'React_Todo List',
		text: [
			'투두리스트에 투두아이템을 추가, 삭제할 수 있고, 좌측상단 버튼을 통해 다크 모드를 설정할 수 있습니다. 해당 투두 아이템을 완료했는지에 따라서 필터링도 가능합니다.',
			'React, css Module',
		],
		view: 'https://shinhee-todo.netlify.app/',
		code: 'https://github.com/sini1004/React_TODO',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, vue'],
	},
	{
		id: 3,
		title: 'React_Shopphing(LACOSTE)',
		text: [
			'데이터베이스 역할을 해주는 db.josn파일을 생성하여, 이미지의 url, 가격 등의 정보를 넣어주었습니다. fetch함수를 이용해 API호출을 하였으며, 로그인이 되었을 때에만 상품의 상세페이지를 볼 수 있도록 하였고, 검색 기능을 구현하였습니다. React-Bootstrap과 미디어쿼리를 사용해 반응형으로 작업하였습니다.',
			'React, json-server, Router, React-Bootstrap, Sass',
		],
		view: 'https://lacosteshop.netlify.app/',
		code: 'https://github.com/sini1004/LACOSTE',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, vue'],
	},
	{
		id: 4,
		logoimg: logoimg01,
		logoalt: '여성가족부',
		text: ['make', 'site compliant with', 'next.js'],
		title: '사이트 라우터 연습 타이틀',
		link: 'https://mogefdatacontest.co.kr/',
		desc: '기존 서비스의 안정적인 운영을 위해 유지보수와 개선 작업을 진행하는 한편, 새로운 서비스의 UI 개발 업무도 맡았습니다.',
		code: 'https://github.com/webstoryboy/port2023-next',
		view: 'https://port2023-next.netlify.app',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, next.js'],
	},
];

export const proText = [
	//  프로젝트 : 여가부-개방관리시스템,공모전 사이트 / 에너지기술연구원관리자페이지 / 전통문화플랫폼 / 제보
	{
		id: 1,
		num: '01',
		logoimg: logoimg01,
		logoalt: '여성가족부',
		period: '2023.2 - 2024.6',
		text: ['make', 'site compliant with', 'html, css, jquery, and javascript'],
		title: '여성가족부 공모전',
		link: 'https://mogefdatacontest.co.kr/',
		desc: "'청소년데이터 융복합 분석·활용 공모전' 은 여성가족부에서 주최하는 공모전 웹 사이트로서 공모전 접수를 할 수 있으며, 공모전 개요, 요강과 접수 확인이 가능합니다.",
		main: mainimg01,
		mainalt: '프로젝트1',
		screen: scrimg01,
		screenalt: '공모전공공데이터검색기능',
		code: 'https://github.com/webstoryboy/port2023-next',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, next.js'],
	},
	{
		id: 2,
		num: '02',
		logoimg: logoimg03,
		logoalt: '전통문화혁신플랫폼',
		period: '2023.10 - 2023.12',
		text: ['make', 'site compliant with', 'html, css, jquery, and javascript'],
		title: '뷰를 이용한 사이트 제작',
		link: 'http://chsr.re.kr/',
		desc: 'ddddddddd',
		main: mainimg02,
		mainalt: '프로젝트2',
		screen: scrimg02,
		screenalt: '전통문화혁신플랫폼',
		code: 'https://github.com/webstoryboy/port2023-vue',
		view: 'https://port2023-vue.netlify.app',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, vue'],
	},
	{
		id: 3,
		num: '03',
		logoimg: logoimg03,
		logoalt: '한국에너지기술연구원',
		period: '2023.10 - 2023.12',
		text: ['make', 'site compliant with', 'vue.js'],
		title: '한국에너지기술연구원',
		link: 'http://chsr.re.kr/',
		desc: '전자정부 프레임워크 기반의 CMS 사이트이며, API 조회·모니터링과 개방 DB 테이블 조회, 사용자 권한 관리, 메뉴 관리 등이 가능합니다.',
		main: mainimg02,
		mainalt: '프로젝트3',
		screen: scrimg03,
		screenalt: '전통문화혁신플랫폼',
		// code: 'https://github.com/webstoryboy/port2023-vue',
		// view: 'https://port2023-vue.netlify.app',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, vue'],
	},
	{
		id: 4,
		num: '04',
		logoimg: logoimg01,
		logoalt: '여성가족부',
		period: '2023.10 - 2023.12',
		text: ['make', 'site compliant with', 'next.js'],
		title: '사이트 라우터 연습 타이틀',
		link: 'https://mogefdatacontest.co.kr/',
		desc: '기존 서비스의 안정적인 운영을 위해 유지보수와 개선 작업을 진행하는 한편, 새로운 서비스의 UI 개발 업무도 맡았습니다.',
		code: 'https://github.com/webstoryboy/port2023-next',
		view: 'https://port2023-next.netlify.app',
		info: ['site coding', 'production period : two days', 'use stack : HTML5/CSS3, Scss Variable, next.js'],
	},
];

export const portText = [
	{
		num: '01',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port01,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
	{
		num: '02',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port02,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
	{
		num: '03',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port03,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
	{
		num: '04',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port04,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
	{
		num: '05',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port02,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
	{
		num: '06',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port03,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
	{
		num: '07',
		title: '포폴 타이틀 작성',
		desc: '포폴 설명 작성하기',
		img: port04,
		code: 'https://github.com/sini1004/LACOSTE',
		view: 'https://lacosteshop.netlify.app/',
		name: '포트폴리오',
	},
];

export const contactText = [
	{
		link: 'https://open.kakao',
		title: 'KAKAO : sini',
	},
	{
		link: 'mailto:P_SHINHEE@naver.com',
		title: 'mail : p_shinhee@naver.com',
	},
];
