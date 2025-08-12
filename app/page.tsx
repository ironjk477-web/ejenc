
import Hero from "@/components/Hero";
import { SERVICES } from "@/lib/data";
import Link from "next/link";

export default function HomePage(){
  return (
    <div>
      <Hero />

      <section id="business" className="container mt-16">
        <h2 className="text-2xl font-semibold">사업 분야</h2>
        <p className="text-gray-600 mt-2">골프장 자동관수 · 전기·배관 · 상·하수도 · 수처리 · 유지보수</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            ["골프장 자동관수", "설계·시공·리뉴얼, Rain Bird, 자동제어"],
            ["전기·배관·펌프장", "가압펌프, 감압/체크밸브, 관로, 전기판넬"],
            ["상·하수도/수처리", "오수처리, 연못/분수, 수질정화, 정수/생활용수"],
          ].map(([t,d],i)=>(
            <div key={i} className="card hover:shadow">
              <h3 className="font-medium text-brand">{t}</h3>
              <p className="text-sm text-gray-600 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="container mt-16">
        <h2 className="text-2xl font-semibold">우리가 하는 일</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {SERVICES.map((s, i)=>(
            <div key={i} className="card hover:shadow">
              <h3 className="font-medium text-brand">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-16">
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-medium">EJENC의 신뢰</h3>
          <ul className="mt-3 grid md:grid-cols-4 gap-4 text-sm text-gray-700">
            <li>2001년 설립 · 전문건설업 면허(상·하수도/토공)</li>
            <li>국내 유일 RAIN BIRD 공식 독점 대리점</li>
            <li>골프장/공항/경기장 등 대형 현장 경험</li>
            <li>설계 → 시공 → 리뉴얼 → 유지보수 원스톱</li>
          </ul>
        </div>
      </section>

      <section className="container mt-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">시공 사례</h2>
          <a href="/projects" className="text-brand text-sm">전체 보기 →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[1,2,3].map(i=>(
            <img key={i} src={`/projects/pick_${i}.jpg`} className="w-full h-56 object-cover rounded-xl" alt="시공 사례"/>
          ))}
        </div>
      </section>

      <section className="container mt-16 mb-24">
        <div className="rounded-2xl bg-brand text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">프로젝트 상담이 필요하신가요?</h3>
            <p className="text-white/80 mt-1">사무실 031-701-2043 · ej-enc@naver.com</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link href="/contact" className="px-5 py-2.5 rounded-md bg-white text-gray-900">문의하기</Link>
            <Link href="/works" className="px-5 py-2.5 rounded-md border border-white/50">주요 실적 보기</Link>
          </div>
        </div>
      </section>

      <a href="/contact" className="fixed bottom-6 right-6 px-4 py-3 rounded-full shadow-lg bg-brand text-white">빠른 문의</a>
    </div>
  )
}
