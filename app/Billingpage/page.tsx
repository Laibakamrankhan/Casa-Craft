'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storedCart = localStorage.getItem("Cart");
    
    if (storedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        if (Array.isArray(parsedCart) && parsedCart.length > 0) {
          setCartItems(parsedCart);
        } else {
          setCartItems([]); 
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]); 
      }
    } else {
      setCartItems([]);
    }

    setLoading(false);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="flex flex-wrap md:flex-nowrap gap-8">
        {/* Billing Details */}
        <div className="w-full md:w-2/3 p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border p-3 rounded w-full" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-3 rounded w-full" required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-3 rounded w-full md:col-span-2" required />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-3 rounded w-full" required />
            <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="border p-3 rounded w-full" required />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="border p-3 rounded w-full md:col-span-2" required />
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          {loading ? (
            <p className="text-gray-500">Loading cart items...</p>
          ) : cartItems.length > 0 ? (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item._id} className="flex items-center justify-between gap-4 border-b pb-3">
                  <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex-1">
                    <span className="block font-medium">{item.name}</span>
                    <span className="text-gray-600 text-sm">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No items in the cart.</p>
          )}

          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className="bg-blue-600 text-white py-3 px-6 w-full rounded mt-4 hover:bg-blue-700 transition">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};
export default Page;
