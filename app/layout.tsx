import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "maka.mn | Сургалтын үзүүлэн, хэрэглэгдэхүүн",
  description: "Багш, сурагчдад зориулсан сургалтын үзүүлэн, соронзон самбар болон хэрэглэгдэхүүн.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
