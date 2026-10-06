"use client";
import { useState } from "react";
import { useCart } from "./cart-provider";
import { money, type Product } from "../lib/products";

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  return <div className="detail-purchase"><div className="flex items-center justify-between gap-4"><span>Тоо ширхэг</span><div className="cart-quantity"><button type="button" disabled={quantity === 1} aria-label="Тоо багасгах" onClick={() => setQuantity(quantity - 1)}>−</button><span>{quantity}</span><button type="button" disabled={quantity === 99} aria-label="Тоо нэмэх" onClick={() => setQuantity(quantity + 1)}>+</button></div></div><button className="cart-primary" type="button" onClick={() => addItem(product, quantity)}>Сагсанд нэмэх · {money(product.price * quantity)}</button></div>;
}
