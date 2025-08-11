export const SITE = {
  name: "EJENC",
  tagline: "레인버드 골프장 자동관수 · 스프링클러 전문",
  email: "ej-enc@naver.com",
  phone: "010-0000-0000",
  kakao: "https://pf.kakao.com/_xxxxxx",
  address: "경기 용인시 (주소 업데이트)",
};

export const NAV = [
  { label: "서비스", href: "#services" },
  { label: "프로젝트", href: "#projects" },
  { label: "고객사", href: "#clients" },
  { label: "문의", href: "/contact" }
];

export const SERVICES = [
  {
    title: "골프장 자동관수 설계",
    desc: "레인버드 CirrusPRO 기반의 데이터 중심 설계. 유량·압력·구역별 밸런싱까지 고려한 실무형 도면 제공.",
    items: ["메인·페어웨이·그린·티 구역 설계", "펌프·감압·필터 스테이션", "케이블·디코더 네트워크"]
  },
  {
    title: "시공·리뉴얼",
    desc: "신규 18홀부터 부분 리뉴얼까지. 디치위치 트렌칭, 전선 루프, 디코더 교체, 밸브인 헤드 업그레이드.",
    items: ["Rain Bird 702B/752 V-in 교체", "ICM/GBS 코일 최적화", "배관·전선 루프 공사"]
  },
  {
    title: "유지보수·A/S",
    desc: "시즌 전 점검, 누수·무관수 트러블슈팅, 전자밸브·디코더 교체, 중앙제어 업그레이드.",
    items: ["Stratus II → CirrusPRO 전환", "마스터밸브 신규 설치", "감압변·필터 클리닝"]
  }
];

export const PROJECTS = [
  { title: "충청 지역 18홀 리뉴얼", badge: "전선 루프 · 디코더 교체", images: ["/projects/cc-01.jpg"], desc: "노후 디코더 구간 무관수 해결 및 구역 밸런싱 재조정." },
  { title: "경기권 카트로 컷팅 공사", badge: "디치위치 · 조인트 박스", images: ["/projects/cc-02.jpg"], desc: "카트로 포설 후 조인트 박스 신규 설치, 라인 매설 심도 표준화." },
  { title: "마스터밸브 신설", badge: "외부 2개소 · 5일", images: ["/projects/cc-03.jpg"], desc: "중앙제어 연동 및 과잉 관수 방지 로직 적용." }
];

export const LOGOS = ["/logos/club1.svg","/logos/club2.svg","/logos/club3.svg","/logos/club4.svg"];

export const STATS = [
  { label: "시공 골프장", value: "50+ 곳" },
  { label: "연평균 프로젝트", value: "30+ 건" },
  { label: "긴급 출동", value: "24h 대응" }
];
