
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EJENC | 골프장·관수·전기·배관 시공 전문",
  description: "설계부터 시공·리뉴얼·유지보수까지 토탈 솔루션"
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
