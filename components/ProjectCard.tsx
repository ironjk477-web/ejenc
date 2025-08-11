import Image from "next/image";

export default function ProjectCard({title, badge, image, desc}:{title:string; badge:string; image:string; desc:string;}){
  return (
    <div className="card overflow-hidden">
      <Image src={image} alt={title} width={1200} height={800} className="w-full h-auto"/>
      <div className="p-5">
        <span className="badge">{badge}</span>
        <h3 className="text-xl font-semibold mt-3">{title}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
      </div>
    </div>
  )
}
