"use client";

import { useEffect, useMemo, useState } from "react";

const categories = [
  "Бүх ангилал",
  "Тоо тооцоолол",
  "Уян соронзон самбарууд",
  "Хүн байгаль",
  "HAGOROMO шохой",
  "Бичиг хэрэг",
  "Газар зүй",
  "Геометр",
  "Магадлал статистик",
  "МАТЕМАТИКИЙН БАГЦ ҮЗҮҮЛЭН",
  "САМБАР",
  "Стикер",
  "Тоглоом",
  "Хэмжигдэхүүн",
  "Шинэ",
  "Шинэ жил",
];

const products = [
  { name: "Тригонометр утгын хүснэгт", category: "Тоо тооцоолол", price: 18000, oldPrice: 22000, rating: "4.9", reviews: 28, image: "photo-1635070041078-e363dbe005cb", emoji: "∑" },
  { name: "Паскалийн гурвалжин", category: "Магадлал статистик", price: 18000, oldPrice: 22000, rating: "4.8", reviews: 16, image: "photo-1509228468518-180dd4864904", emoji: "△" },
  { name: "Пифагорын теорем", category: "Геометр", price: 13000, oldPrice: 18000, rating: "5.0", reviews: 32, image: "photo-1635372722656-389f87a941b7", emoji: "π" },
  { name: "Тригонометр харьцаа", category: "Геометр", price: 13000, oldPrice: 18000, rating: "4.9", reviews: 21, image: "photo-1635070041078-e363dbe005cb", emoji: "△" },
  { name: "Тооны орны хүснэгт — соронзон", category: "Уян соронзон самбарууд", price: 25000, oldPrice: 30000, rating: "4.8", reviews: 19, image: "photo-1509228468518-180dd4864904", emoji: "123" },
  { name: "Математикийн багц үзүүлэн", category: "МАТЕМАТИКИЙН БАГЦ ҮЗҮҮЛЭН", price: 96000, oldPrice: 120000, rating: "5.0", reviews: 12, image: "photo-1635372722656-389f87a941b7", emoji: "＋" },
  { name: "Дэлхийн газрын зураг", category: "Газар зүй", price: 32000, oldPrice: 38000, rating: "4.7", reviews: 9, image: "photo-1524661135-423995f22d0b", emoji: "🌍" },
  { name: "HAGOROMO цагаан самбарын шохой", category: "HAGOROMO шохой", price: 48000, oldPrice: 55000, rating: "4.9", reviews: 44, image: "photo-1513475382585-d06e58bcb0e0", emoji: "✎" },
];

const money = (amount: number) => `${amount.toLocaleString("mn-MN")}₮`;

export function Catalog() {
  const [category, setCategory] = useState("Бүх ангилал");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onSearch = (event: Event) => setQuery((event as CustomEvent<string>).detail);
    window.addEventListener("store-search", onSearch);
    return () => window.removeEventListener("store-search", onSearch);
  }, []);

  const visibleProducts = useMemo(
    () => products.filter((product) =>
      (category === "Бүх ангилал" || product.category === category) &&
      `${product.name} ${product.category}`.toLocaleLowerCase("mn").includes(query.toLocaleLowerCase("mn")),
    ),
    [category, query],
  );

  return (
    <section id="catalog" className="catalog-section mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
      <div className="catalog-heading mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="catalog-kicker">СУРГАЛТЫН ХЭРЭГЛЭГДЭХҮҮН · 2026</p>
          <h2 className="catalog-title mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Санааг ойлгомжтой <span>харуул.</span></h2>
          <p className="catalog-description mt-3 max-w-xl text-sm leading-6 sm:text-base">Хичээл дээрээ ашиглах самбар, математикийн үзүүлэн болон сургалтын хэрэгслээ олоорой.</p>
        </div>
        <label className="catalog-sort flex items-center gap-3 text-sm">Эрэмбэлэх
          <select className="rounded-full border px-4 py-2.5 outline-none"><option>Онцлох</option><option>Үнэ: багаас их</option><option>Үнэ: ихээс бага</option></select>
        </label>
      </div>

      <div className="catalog-feature mb-8 grid overflow-hidden rounded-[1.75rem] md:grid-cols-[1.1fr_.9fr]">
        <div className="catalog-feature-copy flex flex-col justify-between p-6 sm:p-9">
          <div><span className="catalog-feature-tag">БАГШ НАРЫН СОНГОЛТ</span><p className="mt-8 text-sm">ХАРАХ · ХҮРЭХ · ОЙЛГОХ</p><h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">Нарийн ойлголтыг нэг харуулаад тайлбарлая.</h3></div>
          <a href="#product-list" className="catalog-feature-link mt-8 inline-flex w-fit items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold">Үзүүлэнгүүдтэй танилцах <span>↗</span></a>
        </div>
        <div className="catalog-feature-image relative min-h-56 md:min-h-72"><img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85" alt="Самбар дээрх математикийн томьёо" className="absolute inset-0 h-full w-full object-cover"/><span className="catalog-image-caption absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-xs">Математикийн үзүүлэн</span></div>
      </div>

      <div className="category-rail mb-8" aria-label="Бүтээгдэхүүний ангилал">
        <div className="category-pills flex gap-2 overflow-x-auto pb-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`category-pill shrink-0 rounded-full px-4 py-2.5 text-xs font-medium transition sm:text-sm ${category === item ? "is-active" : ""}`}>{item}</button>)}</div>
      </div>

      <div id="product-list" className="mb-4 flex items-center justify-between gap-3"><p className="catalog-results">{category === "Бүх ангилал" ? "Онцлох бүтээгдэхүүн" : category} <span>· {visibleProducts.length} бүтээгдэхүүн</span></p><a href="#catalog" className="catalog-view-all text-sm">Бүгдийг үзэх ↗</a></div>
      {visibleProducts.length ? (
        <div className="product-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <article key={product.name} className={`modern-product group overflow-hidden rounded-2xl ${index === 0 && category === "Бүх ангилал" ? "modern-product-featured lg:col-span-2 lg:row-span-2" : ""}`}>
              <div className="product-media relative overflow-hidden">
                <img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=900&q=85`} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="product-discount absolute left-3 top-3 rounded-full px-3 py-1.5 text-[11px] font-semibold">−{money(product.oldPrice - product.price)}</span>
                <button aria-label={`${product.name} хадгалах`} className="product-save absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-lg backdrop-blur">♡</button>
                {index === 0 && category === "Бүх ангилал" && <span className="product-feature-label absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-xs">Эрэлттэй · Багш нарын сонголт</span>}
              </div>
              <div className="product-copy p-4 sm:p-5">
                <p className="product-category">{product.category}</p><h3 className="product-name mt-2 text-sm font-medium leading-5">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between gap-2"><div className="flex items-center gap-2"><strong className="product-price text-sm">{money(product.price)}</strong><del className="product-old-price text-xs">{money(product.oldPrice)}</del></div><span className="product-rating text-xs">★ {product.rating} <span>({product.reviews})</span></span></div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="catalog-empty rounded-3xl px-6 py-16 text-center"><div className="text-4xl">⌕</div><h3 className="mt-4 text-xl font-semibold">Одоогоор энэ ангилалд бараа алга</h3><p className="mt-2 text-sm">Өөр ангилал сонгоод үзээрэй.</p></div>
      )}
    </section>
  );
}
