export const products = [
  { slug: "trigonometry-table", name: "Тригонометр утгын хүснэгт", category: "Тоо тооцоолол", price: 18000, oldPrice: 22000, rating: "4.9", reviews: 28, image: "photo-1635070041078-e363dbe005cb", emoji: "∑" },
  { slug: "pascal-triangle", name: "Паскалийн гурвалжин", category: "Магадлал статистик", price: 18000, oldPrice: 22000, rating: "4.8", reviews: 16, image: "photo-1509228468518-180dd4864904", emoji: "△" },
  { slug: "pythagorean-theorem", name: "Пифагорын теорем", category: "Геометр", price: 13000, oldPrice: 18000, rating: "5.0", reviews: 32, image: "photo-1635372722656-389f87a941b7", emoji: "π" },
  { slug: "trigonometric-ratios", name: "Тригонометр харьцаа", category: "Геометр", price: 13000, oldPrice: 18000, rating: "4.9", reviews: 21, image: "photo-1635070041078-e363dbe005cb", emoji: "△" },
  { slug: "magnetic-place-value", name: "Тооны орны хүснэгт — соронзон", category: "Уян соронзон самбарууд", price: 25000, oldPrice: 30000, rating: "4.8", reviews: 19, image: "photo-1509228468518-180dd4864904", emoji: "123" },
  { slug: "math-visual-kit", name: "Математикийн багц үзүүлэн", category: "МАТЕМАТИКИЙН БАГЦ ҮЗҮҮЛЭН", price: 96000, oldPrice: 120000, rating: "5.0", reviews: 12, image: "photo-1635372722656-389f87a941b7", emoji: "＋" },
  { slug: "world-map", name: "Дэлхийн газрын зураг", category: "Газар зүй", price: 32000, oldPrice: 38000, rating: "4.7", reviews: 9, image: "photo-1524661135-423995f22d0b", emoji: "🌍" },
  { slug: "hagoromo-chalk", name: "HAGOROMO цагаан самбарын шохой", category: "HAGOROMO шохой", price: 48000, oldPrice: 55000, rating: "4.9", reviews: 44, image: "photo-1513475382585-d06e58bcb0e0", emoji: "✎" },
];

export type Product = (typeof products)[number];
export const money = (amount: number) => amount.toLocaleString('mn-MN') + '₮';
