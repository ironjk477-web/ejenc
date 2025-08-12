
import Link from "next/link";

export default function Hero(){
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden rounded-b-[24px]">
      <img src="/projects/hero1.jpg" className="absolute inset-0 w-full h-full object-cover" alt="현장 전경"/>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            건설·설비 토탈 솔루션<br/><span className="text-brand-light">EJENC</span>가 시공합니다.
          </h1>
          <p className="mt-5 max-w-2xl text-white/85">
            골프장 자동관수 · 전기·배관 · 상·하수도 · 수처리. 설계부터 리뉴얼·유지보수까지 한 번에.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/projects" className="px-5 py-2.5 rounded-md bg-white text-gray-900">시공 사례 보기</Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-md bg-brand text-white">문의하기</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
