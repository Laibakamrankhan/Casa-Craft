"use client";  
interface Product {
  name: string;
  price: number;
  slug: string;
  image?: string;
  quantity?: number;
}
export default function Hoverbutton ({ product }: { product: Product }) {
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("Cart") || "[]");

    const existingItem = cart.find((item: any) => item.slug === product.slug);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("Cart", JSON.stringify(cart));
  };
  return (
    <div className="relative group">
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#B88E2F] font-bold px-4 py-2 w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};


