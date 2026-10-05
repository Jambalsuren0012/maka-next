import { AnnouncementBar } from "./components/announcement-bar";
import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { Catalog } from "./components/catalog";
import { PromoBanner } from "./components/promo-banner";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <div className="storefront relative min-h-screen overflow-hidden">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <AnnouncementBar />
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <Catalog />
        <PromoBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
