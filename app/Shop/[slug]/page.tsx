'use client'
import AddToCartButton from '@/app/component/AddToCartButton';
import { client } from '@/sanity/lib/client';
import Image from 'next/image'
import { useState, useEffect, use } from "react";


interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  style: string;
  dimensions?: { width?: number; height?: number }; 
  category: string;
  quantity: number;
  slug: string;
}

async function fetchData(slug: string): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug]{
      name,
      description,
      image,
      price,
      style,
      dimensions,
      category,
      quantity,
      "slug": slug.current}`,
    { slug }
  );
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params); 
  const { slug } = resolvedParams;
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData(slug);
        setData(fetchedData?.[0] || null);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  const product = data;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="flex flex-wrap md:flex-nowrap">
      <div style={{ flex: 1 }}className="flex justify-center md:block">
       
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            style={{ width: '432px', height: '500px', objectFit: 'cover' }}
           className="ml-[197px]  mt-16 max-w-full md:w-[432px] md:h-[500px]"
           width={432}
           height={500}
          />
        )}
      </div>
      <div style={{ flex: 1, paddingRight: '20px' }} className="px-4 text-center md:text-left">
        <h1 style={{fontWeight:400, fontSize:42}} className='text-black text-3xl md:text-4xl '>{product.name}</h1>
        <h1 style={{fontWeight:400, fontSize:24}} className='text-[#9F9F9F]  text-xl md:text-2xl '>${product.price}</h1>
        <p style={{fontSize:13}}>{product.description}</p>
        {product.dimensions && (product.dimensions.width || product.dimensions.height) && (
  <>
    <h3 className='font-bold'>Size:</h3>
    <div className='flex gap-2 flex-col ml-32 md:flex-row  justify-center md:justify-start md:ml-3 '>
    {product.dimensions.width && 
    <div className=' text-center text-white  w-32 h-10 pt-2 rounded-sm bg-[#d9c087]'>Width:{product.dimensions.width}cm</div>}
    {product.dimensions.height &&
     <div className=' text-center text-white  w-32 h-10 pt-2 rounded-sm bg-[#d9c087]'>Height:{product.dimensions.height}cm</div>}
     </div>
  </> 
)}
        <AddToCartButton product={product} />

        <ul className='text-[#9F9F9F] mt-40  md:mt-40 text-sm '>
          {product.style && <li><strong>Style:</strong> {product.style}</li>}           
          {product.category && <li><strong>Category:</strong> {product.category}</li>}
          {product.quantity && <li><strong>Quantity:</strong> {product.quantity}</li>}
        </ul>
      </div>
    </div>
  );
}
