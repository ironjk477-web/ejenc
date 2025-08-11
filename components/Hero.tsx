import Link from "next/link";

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-brand-light/50 to-white">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="badge">레인버드 공식 골프 솔루션</div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            골프장 자동관수, <span className="text-brand">설계부터 유지보수</span>까지 원스톱
          </h1>
          <p className="mt-4 text-gray-700">
            신규 18홀 공사 · 리뉴얼 · 전자밸브/디코더 교체 · 중앙제어 업그레이드(CirrusPRO).
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="btn-primary">프로젝트 상담</Link>
            <a href="#projects" className="btn-outline">시공 사례 보기</a>
          </div>
        </div>
        <div className="card p-4">
          <img src="/hero.jpg" alt="EJENC Hero" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}
