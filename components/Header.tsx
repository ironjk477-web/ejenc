"use client";
import Link from "next/link";
import { NAV } from "@/lib/data";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg">
          <span className="text-brand">EJENC</span> · 레인버드
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-gray-700 hover:text-brand">
              {n.label}
            </a>
          ))}
          <Link href="/contact" className="btn-primary">문의하기</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg border border-gray-200">
          <span className="sr-only">메뉴</span>☰
        </button>
      </div>
      <div className={clsx("md:hidden border-t border-gray-100", open ? "block" : "hidden")}>
        <div className="container py-3 flex flex-col gap-3">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-gray-700">{n.label}</a>
          ))}
          <Link href="/contact" className="btn-primary w-full text-center">문의하기</Link>
        </div>
      </div>
    </header>
  );
}
