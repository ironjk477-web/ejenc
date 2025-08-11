import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ejenc.example.com"),
  title: "EJENC | 레인버드 골프장 자동관수 · 스프링클러 공사",
  description: "골프장 자동관수 시스템 전문, 레인버드 골프 솔루션 – 설계·시공·유지보수까지 원스톱.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "EJENC | 레인버드 골프장 자동관수",
    description: "설계·시공·유지보수 원스톱 솔루션",
    type: "website"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
