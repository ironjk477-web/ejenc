import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">서비스</h2>
        <p className="text-gray-600 mt-2">골프장 현장 이해에 기반한 실무형 설계·시공·유지보수</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s)=> (
            <div key={s.title} className="card p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-1">
                {s.items.map((i)=> <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
