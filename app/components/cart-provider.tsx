"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { money, products, type Product } from "../lib/products";

type CartItem = { name: string; quantity: number };
type CartContextValue = { count: number; openCart: () => void; addItem: (product: Product, quantity?: number) => void };
const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "maka-cart-v1";

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("CartProvider is required");
  return cart;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved: unknown = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (Array.isArray(saved)) {
          const restored: CartItem[] = [];
          for (const entry of saved) {
            if (!entry || typeof entry !== "object" || typeof entry.name !== "string" || !Number.isInteger(entry.quantity) || entry.quantity < 1 || !products.some((product) => product.name === entry.name)) continue;
            const existing = restored.find((item) => item.name === entry.name);
            if (existing) existing.quantity = Math.min(99, existing.quantity + entry.quantity);
            else restored.push({ name: entry.name, quantity: Math.min(99, entry.quantity) });
          }
          setItems(restored);
        }
      } catch { /* An unavailable or invalid saved cart starts empty. */ }
      setReady(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(storageKey, JSON.stringify(items)); } catch { /* The cart remains usable without storage. */ }
    }
  }, [items, ready]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (!open) { element.close(); return; }
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; element.close(); };
  }, [open]);

  function addItem(product: Product, quantity = 1) {
    if (!ready) return;
    const amount = Math.max(1, Math.min(99, Math.trunc(quantity) || 1));
    setItems((current) => {
      const existing = current.find((item) => item.name === product.name);
      return existing ? current.map((item) => item.name === product.name ? { ...item, quantity: Math.min(99, item.quantity + amount) } : item) : [...current, { name: product.name, quantity: amount }];
    });
    setOpen(true);
  }

  function changeQuantity(name: string, quantity: number) {
    setItems((current) => quantity < 1 ? current.filter((item) => item.name !== name) : current.map((item) => item.name === name ? { ...item, quantity: Math.min(99, quantity) } : item));
  }

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + (products.find((product) => product.name === item.name)?.price || 0) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ count, openCart: () => setOpen(true), addItem }}>
      {children}
      <dialog ref={dialog} className="cart-dialog" aria-labelledby="cart-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="cart-panel">
          <div className="cart-header"><div><h2 id="cart-title">Таны сагс</h2><p aria-live="polite">{count} бүтээгдэхүүн</p></div><button type="button" aria-label="Сагс хаах" onClick={() => setOpen(false)} className="cart-icon-button">✕</button></div>
          <div className="cart-items">
            {!items.length ? <div className="cart-empty"><span aria-hidden="true">🛒</span><h3>Таны сагс хоосон байна</h3><p>Каталогоос хэрэгтэй бүтээгдэхүүнээ сонгоорой.</p><button type="button" className="cart-primary" onClick={() => setOpen(false)}>Дэлгүүр хэсэх →</button></div> : items.map((item) => {
              const product = products.find((product) => product.name === item.name)!;
              return <article className="cart-item" key={item.name}><img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=180&q=80`} alt={product.name}/><div className="cart-item-details"><h3>{product.name}</h3><p>{money(product.price)} / ширхэг</p><div className="cart-item-controls"><div className="cart-quantity"><button type="button" aria-label={`${product.name} тоог багасгах`} onClick={() => changeQuantity(item.name, item.quantity - 1)}>−</button><span aria-label="Тоо ширхэг">{item.quantity}</span><button type="button" disabled={item.quantity >= 99} aria-label={`${product.name} тоог нэмэх`} onClick={() => changeQuantity(item.name, item.quantity + 1)}>+</button></div><button type="button" className="cart-remove" onClick={() => changeQuantity(item.name, 0)}>Хасах</button></div><strong>{money(product.price * item.quantity)}</strong></div></article>;
            })}
          </div>
          {!!items.length && <div className="cart-summary"><div><span>Барааны нийт үнэ</span><strong aria-live="polite">{money(total)}</strong></div><p>Хүргэлтийн төлбөр тусдаа тооцогдоно.</p><button type="button" className="cart-primary" onClick={() => setOpen(false)}>Үргэлжлүүлэн сонгох →</button></div>}
        </div>
      </dialog>
    </CartContext.Provider>
  );
}
