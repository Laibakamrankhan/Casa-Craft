"use client";

interface Product {
  name: string;
  price: number;
  slug: string;
  image?: string;
  quantity?: number;
}

interface RemoveFromCartButtonProps {
  product: Product;
  onRemove: (productSlug: string) => void; // Accepts a function that takes a product slug
}

export default function RemoveFromCartButton({ product, onRemove }: RemoveFromCartButtonProps) {
  return (
    <button
      className="bg-white border border-[#B88E2F] text-[#B88E2F] font-bold px-4 py-2 w-[200px] mt-6"
      onClick={() => onRemove(product.slug)}
    >
      Remove from Cart
    </button>
  );
}
