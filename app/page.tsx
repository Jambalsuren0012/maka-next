import { Hero } from "./components/hero";
import { Catalog } from "./components/catalog";
import { PromoBanner } from "./components/promo-banner";
export default function Home() {
  return <main className="relative z-10 flex-1"><Hero/><Catalog/><PromoBanner/></main>;
}