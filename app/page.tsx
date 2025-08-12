
import Hero from "@/components/Hero";
import { SERVICES } from "@/lib/data";

export default function HomePage(){
  return (
    <div>
      <Hero />
      <section id="services" className="mx-auto max-w-6xl px-4 mt-16">
        <h2 className="text-2xl font-semibold">우리가 하는 일</h2>
        <p className="text-gray-600 mt-2">건설·설비 전 과정을 한 팀으로 제공합니다.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {SERVICES.map((s, i)=>(
            <div key={i} className="rounded-xl border bg-white p-5 hover:shadow">
              <h3 className="font-medium text-brand">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-16">
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

      <section className="mx-auto max-w-6xl px-4 mt-16">
        <div className="rounded-2xl bg-brand text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">프로젝트 상담이 필요하신가요?</h3>
            <p className="text-white/80 mt-1">사무실 031-701-2043 · ej-enc@naver.com</p>
          </div>
          <a href="/contact" className="mt-4 md:mt-0 px-5 py-2.5 rounded-md bg-white text-gray-900">문의하기</a>
        </div>
      </section>
    </div>
  )
}
