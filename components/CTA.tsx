import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-brand text-white">
      <div className="container grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold">현장 점검이 필요하신가요?</h2>
          <p className="mt-2 text-white/90">무관수·과잉관수, 누수, 감압·필터 문제까지 — 방문 점검 후 개선안을 제안드립니다.</p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <Link href="/contact" className="btn bg-white text-brand hover:bg-gray-100">빠른 상담</Link>
          <a href="#projects" className="btn-outline border-white text-white hover:bg-white/10">사례 보기</a>
        </div>
      </div>
    </section>
  );
}
