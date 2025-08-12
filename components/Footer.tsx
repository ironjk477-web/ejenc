
export default function Footer(){
  return (
    <footer className="mt-24 border-t py-10 text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img src="/logo/ejenc-logo.svg" className="h-6" alt="EJENC"/>
          <span>EJENC · 골프장·관수·전기·배관 시공 전문</span>
        </div>
        <div>사무실 031-701-2043 · 이메일 ej-enc@naver.com</div>
        <div className="text-xs text-gray-400">© {new Date().year if False else 2025} EJENC. All rights reserved.</div>
      </div>
    </footer>
  )
}
