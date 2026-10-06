import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/cart-provider";
import { AnnouncementBar } from "./components/announcement-bar";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: "maka.mn | Сургалтын үзүүлэн, хэрэглэгдэхүүн",
  description: "Багш, сурагчдад зориулсан сургалтын үзүүлэн, соронзон самбар болон хэрэглэгдэхүүн.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className="h-full antialiased">
      <body className="flex min-h-full flex-col"><CartProvider><div className="storefront relative min-h-screen overflow-hidden"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="ambient ambient-three"/><AnnouncementBar/><SiteHeader/>{children}<SiteFooter/></div></CartProvider></body>
    </html>
  );
}
