import ContactCard from "@/components/ContactCard";

export const metadata = { title: "문의 | EJENC" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold">프로젝트 상담</h1>
          <p className="text-gray-600 mt-2">
            신규 18홀, 리뉴얼, 전자밸브·디코더 교체 등 간단히 남겨주시면 빠르게 연락드리겠습니다.
          </p>
          <form action={`mailto:ej-enc@naver.com`} method="post" encType="text/plain" className="mt-6 space-y-4">
            <input name="name" placeholder="성함/소속" className="w-full border rounded-lg px-4 py-3" required />
            <input name="phone" placeholder="연락처" className="w-full border rounded-lg px-4 py-3" required />
            <textarea name="msg" placeholder="요청 내용" className="w-full border rounded-lg px-4 py-3 h-32" required />
            <button type="submit" className="btn-primary">메일로 보내기</button>
          </form>
        </div>
        <ContactCard />
      </div>
    </section>
  );
}
