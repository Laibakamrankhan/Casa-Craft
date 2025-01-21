'use client';

import AddToCartButton from '@/app/component/AddToCartButton';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  style?: string;
  dimensions?: {
    width?: number;
    height?: number;
  };
  category?: string;
  quantity?: number;
  slug: string;
}

async function fetchProductData(slug: string): Promise<Product | null> {
  const productQuery = `*[_type == "product" && slug.current == $slug][0]{
      name,
      description,
      image,
      price,
      style,
      dimensions,
      category,
      quantity,
      "slug": slug.current
    }`;

  try {
    return await client.fetch(productQuery, { slug });
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
}

const Page = () => {
  const { slug } = useParams();  // Get the params object using useParams
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFoundState, setNotFoundState] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      // Handle slug being a string or string[] (array)
      const slugValue = Array.isArray(slug) ? slug[0] : slug;

      const fetchedProduct = await fetchProductData(slugValue);
      if (!fetchedProduct) {
        setNotFoundState(true);
        return;
      }
      setProduct(fetchedProduct);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (notFoundState) return notFound();
  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
      <div className="flex justify-center md:block w-full md:w-1/2">
        {product && product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={432}
            height={500}
            className="ml-[197px] mt-16 max-w-full object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 px-4 text-center md:text-left">
        <h1 className="text-black text-3xl md:text-4xl font-normal">{product?.name}</h1>
        <h2 className="text-[#9F9F9F] text-xl md:text-2xl font-normal">${product?.price}</h2>
        <p className="text-sm">{product?.description}</p>

        {product?.dimensions && (product.dimensions.width || product.dimensions.height) && (
          <>
            <h3 className="font-bold">Size:</h3>
            <div className="flex gap-2 flex-col md:flex-row ml-32 md:ml-3 justify-center md:justify-start">
              {product.dimensions.width && (
                <div className="text-center text-white w-32 h-10 pt-2 rounded-sm bg-[#d9c087]">
                  Width: {product.dimensions.width}cm
                </div>
              )}
              {product.dimensions.height && (
                <div className="text-center text-white w-32 h-10 pt-2 rounded-sm bg-[#d9c087]">
                  Height: {product.dimensions.height}cm
                </div>
              )}
            </div>
          </>
        )}

        <AddToCartButton product={product!} />

        <ul className="text-[#9F9F9F] mt-40 md:mt-40 text-sm">
          {product?.style && <li><strong>Style:</strong> {product.style}</li>}
          {product?.category && <li><strong>Category:</strong> {product.category}</li>}
          {product?.quantity && <li><strong>Quantity:</strong> {product.quantity}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Page;
