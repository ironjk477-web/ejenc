
export default function ProjectsPage(){
  const imgs = Array.from({length:9}, (_,i)=>`/projects/pick_${i+1}.jpg`);
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mt-6">시공 사례</h1>
      <p className="text-gray-600 mt-2">골프장 자동관수, 전기·배관, 수처리 등 다양한 현장 사례입니다.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {imgs.map((src, i)=>(
          <img key={i} src={src} alt={`project ${i+1}`} className="w-full h-64 object-cover rounded-xl"/>
        ))}
      </div>
    </div>
  )
}
