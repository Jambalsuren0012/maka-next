"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { ThemeToggle } from "./theme-toggle";
import { useCart } from "./cart-provider";

export function SiteHeader() {
  const { count, openCart } = useCart();
  const [query, setQuery] = useState("");
  return (
    <header className="glass-panel sticky top-0 z-20 border-b border-violet-400/15">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="group flex shrink-0 items-center gap-3" aria-label="maka.mn нүүр">
          <Image src={logo} alt="maka.mn" loading="eager" sizes="(max-width: 640px) 112px, 144px" className="h-auto w-28 object-contain sm:w-36" />
        </a>
        <label className="hidden max-w-lg flex-1 items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-950/40 px-4 py-2.5 text-violet-300 md:flex">
          <span aria-hidden="true">⌕</span><input aria-label="Бүтээгдэхүүн хайх" value={query} onChange={(event) => { setQuery(event.target.value); window.dispatchEvent(new CustomEvent("store-search", { detail: event.target.value })); }} placeholder="Хайх бүтээгдэхүүн, ном, цүнхний нэр..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-violet-400" />
        </label>
        <nav className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a href="/#catalog" className="hidden rounded-xl border border-violet-400/20 bg-violet-900/30 px-3 py-2 text-sm text-violet-100 transition hover:border-emerald-300/40 hover:text-emerald-300 sm:block">Ангилал</a>
          <a href="/#contact" aria-label="Хүслийн жагсаалт" className="rounded-xl border border-violet-400/20 bg-violet-900/30 px-3 py-2 text-lg text-violet-200 transition hover:text-rose-400">♡</a>
          <button type="button" onClick={openCart} aria-label={`Сагс нээх, ${count} бүтээгдэхүүн`} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-600 px-3 py-2.5 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110 sm:px-4"><span>🛒</span><span className="hidden sm:inline">Сагс</span><span className="rounded-full bg-slate-950 px-2 text-xs text-emerald-300" aria-live="polite">{count}</span></button>
        </nav>
      </div>
      <div className="px-4 pb-3 md:hidden"><label className="flex items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-950/50 px-3 py-2 text-violet-300"><span>⌕</span><input aria-label="Бүтээгдэхүүн хайх" value={query} onChange={(event) => { setQuery(event.target.value); window.dispatchEvent(new CustomEvent("store-search", { detail: event.target.value })); }} placeholder="Бүтээгдэхүүн хайх..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-violet-400" /></label></div>
    </header>
  );
}
