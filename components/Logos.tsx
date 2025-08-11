import Image from "next/image";
import { LOGOS } from "@/lib/data";

export default function Logos() {
  return (
    <section id="clients" className="section">
      <div className="container">
        <p className="text-gray-600">파트너 & 고객사</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {LOGOS.map((src, i)=> (
            <div key={i} className="card p-6 flex items-center justify-center">
              <Image src={src} alt={`logo-${i}`} width={120} height={60} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
