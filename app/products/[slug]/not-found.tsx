import Link from "next/link";
export default function ProductNotFound() {
  return <main className="catalog-section mx-auto max-w-7xl px-6 py-24 text-center"><h1 className="catalog-title text-3xl font-semibold">Бүтээгдэхүүн олдсонгүй</h1><p className="catalog-description mt-4">Хаягаа шалгах эсвэл каталогоос бүтээгдэхүүн сонгоорой.</p><Link href="/#catalog" className="catalog-feature-link mt-6 inline-block rounded-full px-6 py-3">Каталог руу →</Link></main>;
}
