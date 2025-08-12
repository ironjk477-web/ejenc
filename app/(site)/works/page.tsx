
import { WORKS } from "@/lib/data";

export default function WorksPage(){
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mt-6">주요 공사 실적</h1>
      <p className="text-gray-600 mt-2">연도별 대표 실적을 요약했습니다. 자세한 리스트는 요청 시 PDF로 제공해 드립니다.</p>
      <div className="mt-6 overflow-hidden rounded-xl border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 w-24">연도</th>
              <th className="p-3">공사명</th>
            </tr>
          </thead>
          <tbody>
            {WORKS.map((w, i)=>(
              <tr key={i} className="border-t">
                <td className="p-3">{w.year}</td>
                <td className="p-3">{w.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
