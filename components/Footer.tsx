import { SITE } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">EJENC</h4>
          <p className="text-sm text-gray-600">레인버드 골프장 자동관수 · 스프링클러 전문</p>
          <p className="text-sm text-gray-600 mt-2">📩 이메일: {SITE.email}</p>
          <p className="text-sm text-gray-600">☎ {SITE.phone}</p>
          <p className="text-sm text-gray-600">{SITE.address}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">바로가기</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="#services">서비스</a></li>
            <li><a href="#projects">프로젝트</a></li>
            <li><a href="#clients">고객사</a></li>
            <li><Link href="/contact">문의</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">문의</h4>
          <p className="text-sm text-gray-600">평일 09:00~18:00 (긴급 24h)</p>
          <div className="mt-3 flex gap-2">
            <a className="btn-outline" href={`mailto:${SITE.email}`}>이메일</a>
            <a className="btn-outline" href="https://pf.kakao.com/_xxxxxx" target="_blank">카카오톡</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">© {new Date().getFullYear()} EJENC. All rights reserved.</div>
    </footer>
  );
}
