import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "시공 사례 | EJENC" };

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-bold">시공 사례</h1>
        <p className="text-gray-600 mt-2">실제 현장 사진과 함께 핵심 포인트를 요약했습니다.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} title={p.title} badge={p.badge} image={p.images[0]} desc={p.desc}/>
          ))}
        </div>
      </div>
    </section>
  );
}
