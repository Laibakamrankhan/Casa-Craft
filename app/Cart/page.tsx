"use client";
import React, { useEffect, useState } from "react";
import RemoveFromCartButton from "../component/RemoveFromCartButton";
import Link from "next/link";
interface Product {
  name: string;
  price: number;
  slug: string;
  image?: string;
  quantity?: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("Cart") || "[]");
      setCartItems(cart);
    }
  }, []);

  const handleRemove = (productSlug: string) => {
    if (typeof window !== "undefined") {
      let cart = JSON.parse(localStorage.getItem("Cart") || "[]");

      // Find item by slug
      const itemIndex = cart.findIndex((item: Product) => item.slug === productSlug);

      if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity -= 1;
        } else {
          cart.splice(itemIndex, 1);
        }
        localStorage.setItem("Cart", JSON.stringify(cart));
        setCartItems([...cart]);
      }
    }
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2);
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.slug} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center gap-4">
                <img 
                  src={item.image || "/placeholder-image.png"} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <RemoveFromCartButton product={item} onRemove={handleRemove} />
            </div>
          ))}
        </div>
      )}

      {/* Cart Total Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row gap-6 mt-10">
        <div className="flex flex-col w-full lg:w-[50%] bg-[#F9F1E7] rounded-md px-6 py-5 space-y-4">
          <p className="text-[18px] sm:text-[20px] font-normal">Cart Total</p>
          <div className="flex justify-between text-[14px] sm:text-[16px]">
            <p>SubTotal:</p>
            <p>${calculateSubtotal()}</p>
          </div>
          <hr />
          <div className="flex justify-between text-[14px] sm:text-[16px]">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-[14px] sm:text-[16px]">
            <p>Total:</p>
            <p>${calculateSubtotal()}</p>
          </div>
          <div className="text-center">
           <Link href={"/Billingpage"}> <button className="w-full md:w-[218px] h-[56px] bg-[#F9F1E7] border-2 border-black rounded-md hover:bg-[#9F9F9F] text-black">
              Checkout
            </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
