
import Link from "next/link";

export default function Header(){
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo/ejenc-logo.svg" alt="EJENC" className="h-7" />
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/about" className="hover:text-brand">회사소개</Link>
          <Link href="/projects" className="hover:text-brand">시공사례</Link>
          <Link href="/works" className="hover:text-brand">주요 실적</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-md bg-brand text-white">문의하기</Link>
        </nav>
      </div>
    </header>
  )
}
