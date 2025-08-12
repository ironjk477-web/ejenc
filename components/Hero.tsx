
import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Hero(){
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden rounded-b-[24px]">
      <img src="/projects/hero1.jpg" className="absolute inset-0 w-full h-full object-cover" alt="현장 전경"/>
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">{SITE.headline}</h1>
          <p className="mt-5 max-w-2xl text-white/90">{SITE.sub}</p>
          <div className="mt-8 flex gap-3">
            <Link href="/projects" className="px-5 py-2.5 rounded-md bg-white text-gray-900">시공 사례 보기</Link>
            <Link href="/works" className="px-5 py-2.5 rounded-md border border-white/50">주요 실적</Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-md bg-brand text-white">{SITE.cta}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
