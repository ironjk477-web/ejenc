
export default function AboutPage(){
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mt-6">회사 소개</h1>
      <p className="text-gray-600 mt-2">
        EJENC는 골프장 스프링클러·자동관수, 전기·배관, 상·하수도 및 수처리 설비를 설계부터 시공·리뉴얼·유지보수까지
        One-Stop으로 제공하는 건설·설비 전문 기업입니다.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card">
          <h2 className="font-medium">연혁</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>2001.07 설립</li>
            <li>2007 상·하수도 설비공사업 전문건설업 면허 취득</li>
            <li>2013 토공사업 전문건설업 면허 취득</li>
            <li>2014 미국 RAIN BIRD 공급 파트너십 체결</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-medium">보유 자격/강점</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li><b>RAIN BIRD 한국 공식 독점 대리점</b> (국내 유일 판매권)</li>
            <li>국내 골프장 관개 시스템 시공·유지보수 20년 이상</li>
            <li>설계/제조(펌프·밸브·잡철) 및 현장 시공 전담팀 보유</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
