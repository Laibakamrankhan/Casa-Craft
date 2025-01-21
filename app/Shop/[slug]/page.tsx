
import AddToCartButton from '@/app/component/AddToCartButton';
import { client } from '@/sanity/lib/client'
import Image from 'next/image';

// 

export default async function Page({ params }: Props) {
  const awaitedParams = await params; // Ensure `params` is awaited
  const { slug } = awaitedParams;
  const data = await client.fetch(
    `*[_type == "product" && slug.current == $slug]{
      name,
      description,
      image,
      price,
      style,
      dimensions,
      category,
      quantity,
      "slug": slug.current
    }`,
    { slug }
  );
  const product = data[0];
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
      <div className="flex justify-center md:block w-full md:w-1/2">
        {product.image && (
          <Image
            src={(product.image)} 
            alt={product.name}
            width={432}
            height={500}
            className="ml-[197px] mt-16 max-w-full object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 px-4 text-center md:text-left">
        <h1 className="text-black text-3xl md:text-4xl font-normal">{product.name}</h1>
        <h2 className="text-[#9F9F9F] text-xl md:text-2xl font-normal">${product.price}</h2>
        <p className="text-sm">{product.description}</p>
        {product.dimensions && (product.dimensions.width || product.dimensions.height) && (
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
        <AddToCartButton product={product} />

        <ul className="text-[#9F9F9F] mt-40 md:mt-40 text-sm">
          {product.style && <li><strong>Style:</strong> {product.style}</li>}
          {product.category && <li><strong>Category:</strong> {product.category}</li>}
          {product.quantity && <li><strong>Quantity:</strong> {product.quantity}</li>}
        </ul>
      </div>
    </div>
  );
}
interface Props {
  params: {
    slug: string;
  };
}

