import { SITE } from "@/lib/data";

export default function ContactCard() {
  return (
    <div className="card p-6 space-y-3">
      <h3 className="text-xl font-semibold">연락처</h3>
      <p className="text-gray-600">📩 이메일: {SITE.email}</p>
      <p className="text-gray-600">☎ {SITE.phone}</p>
      <p className="text-gray-600">{SITE.address}</p>
      <div className="flex gap-2">
        <a className="btn-primary" href={`mailto:${SITE.email}`}>이메일 보내기</a>
        <a className="btn-outline" href={SITE.kakao} target="_blank">카카오톡 문의</a>
      </div>
    </div>
  );
}
