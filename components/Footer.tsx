
export default function Footer(){
  return (
    <footer className="mt-24 border-t py-10 text-sm text-gray-600">
      <div className="container flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img src="/logo/ejenc-logo.svg" className="h-6" alt="EJENC"/>
          <span>EJENC · RAIN BIRD 한국 공식 독점 대리점</span>
        </div>
        <div>사무실 031-701-2043 · 이메일 ej-enc@naver.com</div>
        <div className="text-xs text-gray-400">© 2025 EJENC. All rights reserved.</div>
      </div>
    </footer>
  )
}
