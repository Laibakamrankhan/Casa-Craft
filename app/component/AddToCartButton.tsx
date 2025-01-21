"use client";
import { Any } from "next-sanity";
interface Product {
  name: string;
  price: number;
  slug: string;
  image?: string;
  quantity?: number;
}
export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("Cart") || "[]");

    const existingItem = cart.find((item:Any) => item.slug === product.slug);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  return (
    <button
      className="bg-white border border-[#B88E2F] text-[#B88E2F] font-bold px-4 py-2 w-[200px] mt-6"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}
