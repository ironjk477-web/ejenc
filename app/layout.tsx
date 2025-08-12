
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EJENC | RAIN BIRD 한국 공식 독점 대리점",
  description: "국내 유일, RAIN BIRD 골프장 자동관수 시스템 공급 및 시공 전문"
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
