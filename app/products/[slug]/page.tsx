import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, money } from "../../lib/products";
import { ProductPurchase } from "../../components/product-purchase";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product ? `${product.name} | maka.mn` : "Бүтээгдэхүүн олдсонгүй | maka.mn" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== slug).sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category)).slice(0, 3);
  return <main className="catalog-section relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <nav aria-label="Хуудасны зам" className="catalog-description mb-8 flex flex-wrap gap-2 text-xs"><Link href="/">Нүүр</Link><span>/</span><Link href="/#catalog">Бүтээгдэхүүн</Link><span>/</span><span>{product.name}</span></nav>
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14"><div className="detail-image relative overflow-hidden rounded-3xl"><img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=1400&q=85`} alt={product.name} className="h-full w-full object-cover"/><span className="product-discount absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold">−{money(product.oldPrice - product.price)}</span></div>
      <div className="detail-information"><p className="catalog-kicker">{product.category}</p><h1 className="catalog-title mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1><p className="product-rating mt-4 text-sm">★ {product.rating} <span>· {product.reviews} үнэлгээ</span></p><div className="mt-7 flex items-center gap-4"><strong className="product-price text-3xl">{money(product.price)}</strong><del className="product-old-price">{money(product.oldPrice)}</del></div><p className="catalog-description mt-5 leading-7">{product.category} хичээлийн агуулгыг танилцуулах, тайлбарлахад зориулсан {product.name.toLocaleLowerCase("mn")}.</p><ProductPurchase product={product}/><div className="detail-description mt-8 rounded-2xl p-5"><h2 className="catalog-title font-semibold">Бүтээгдэхүүний мэдээлэл</h2><dl className="catalog-description mt-4 space-y-3 text-sm"><div className="flex justify-between gap-5"><dt>Ангилал</dt><dd className="text-right">{product.category}</dd></div><div className="flex justify-between gap-5"><dt>Нэгж үнэ</dt><dd>{money(product.price)}</dd></div></dl></div></div>
    </div>
    <section className="mt-16"><h2 className="catalog-title mb-6 text-2xl font-semibold">Танд санал болгох</h2><div className="grid gap-5 sm:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/products/${item.slug}`} className="modern-product overflow-hidden rounded-2xl"><div className="product-media"><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=600&q=80`} alt={item.name} className="h-full w-full object-cover"/></div><div className="product-copy p-5"><h3 className="product-name">{item.name}</h3><p className="product-price mt-3 font-semibold">{money(item.price)}</p></div></Link>)}</div></section>
  </main>;
}
