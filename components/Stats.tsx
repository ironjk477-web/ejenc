import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="section bg-white">
      <div className="container grid md:grid-cols-3 gap-6">
        {STATS.map((s)=> (
          <div key={s.label} className="card p-6 text-center">
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
