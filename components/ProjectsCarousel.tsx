"use client";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { useState } from "react";

export default function ProjectsCarousel() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx+1) % PROJECTS.length);
  const prev = () => setIdx((idx-1+PROJECTS.length) % PROJECTS.length);
  const p = PROJECTS[idx];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">프로젝트</h2>
            <p className="text-gray-600 mt-2">실제 현장 사진 기반 시공·리뉴얼 사례</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-outline" onClick={prev}>← 이전</button>
            <button className="btn-primary" onClick={next}>다음 →</button>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="card overflow-hidden">
            <Image src={p.images[0]} alt={p.title} width={1200} height={800} className="w-full h-auto"/>
          </div>
          <div>
            <span className="badge">{p.badge}</span>
            <h3 className="text-2xl font-semibold mt-3">{p.title}</h3>
            <p className="text-gray-600 mt-3">{p.desc}</p>
            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>디치위치 트렌칭 & 전선 루프 표준화</li>
              <li>전자밸브·디코더 불량 구간 교체</li>
              <li>중앙제어 연동 및 테스트</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
