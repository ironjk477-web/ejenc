
export default function ContactPage(){
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mt-6">문의하기</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-medium">연락처</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>사무실 : 031-701-2043</li>
            <li>이메일 : ej-enc@naver.com</li>
          </ul>
        </div>
        <iframe className="rounded-xl w-full h-72 border" src="https://maps.google.com/maps?q=37.4357,127.1672&z=13&output=embed"></iframe>
      </div>
    </div>
  )
}
