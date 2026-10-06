import Image from "next/image";
import logo from "../assets/logo.png";

export function SiteFooter() {
  return <footer id="contact" className="relative z-10 mt-12 border-t border-violet-400/15 bg-[#0b0813] px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><a href="#top" className="inline-block"><Image src={logo} alt="maka.mn" sizes="144px" className="h-auto w-36 object-contain" /></a><p className="mt-2 max-w-sm text-sm leading-6 text-violet-300">Багш, сурагчдад зориулсан сургалтын үзүүлэн, хэрэглэгдэхүүн.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-violet-200"><a className="transition hover:text-emerald-300" href="#catalog">Бүтээгдэхүүн</a><a className="transition hover:text-emerald-300" href="#promotions">Урамшуулал</a><a className="transition hover:text-emerald-300" href="tel:77118899">7711-8899</a><a className="transition hover:text-emerald-300" href="mailto:info@maka.mn">info@maka.mn</a></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-violet-400/10 pt-5 text-xs text-violet-500">© 2026 maka.mn. Бүх эрх хуулиар хамгаалагдсан.</div></footer>;
}
