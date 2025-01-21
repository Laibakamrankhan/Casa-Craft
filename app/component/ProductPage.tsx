import Image from "next/image";
import { MdCompareArrows } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Hoverbutton from "./Hoverbutton";
interface Product {
  _id: string;
  name: string;
  image: string; 
  price: number;
  discountedPrice?: number;
  productdescription: string;
  slug:string
}
async function getData(): Promise<Product[]> {
  return await client.fetch(`*[_type == "product"]{
    _id, name, image, price, discountedPrice, productdescription ,  "slug":slug.current
  }`);
}
const ProductPage = async () => {
  const products = await getData();
  return (
    <div>
      <div className="w-full text-center mt-5">
        <h1
          className="text-[#333333] leading-[48px] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Our Products
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.slice(0, 5).map((product) => (
              <div key={product._id} className="p-4 md:w-1/3">
                <div className="h-full border-2 bg-gray-200 rounded-lg overflow-hidden group relative">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#3A3A3A] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Hoverbutton product={product} />
                  <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-24">
                    <ul className="flex flex-row gap-4">
                      <li className="flex items-center gap-2">
                        <CiShare2 className="text-lg" />
                        Share
                      </li>
                      <Link href={`/Shop/${product.slug}`}>
                      <li className="flex items-center gap-2">
                        <MdCompareArrows className="text-lg" />
                         view <span>product</span>
                      </li> </Link>
                      <li className="flex items-center gap-2">
                        <FaRegHeart className="text-lg" />
                        Like
                      </li>
                    </ul>
                  </span>
                  <div className="p-6">
                    <h1
                      className="text-[#3A3A3A] text-lg sm:text-xl md:text-2xl font-semibold"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {product.name}
                    </h1>
                    <h2
                      className="text-[#898989] text-sm sm:text-base"
                      style={{ fontFamily: "Poppins", fontWeight: 500 }}
                    >
                      {product.productdescription}
                    </h2>
                    <div className="flex gap-4 mt-2">
                      <h3
                        className="text-[#3A3A3A] text-base sm:text-lg font-semibold"
                        style={{ fontFamily: "Poppins", fontSize: 28 }}
                      >
                        ${product.price}
                      </h3>
                      {product.discountedPrice && (
                        <h3
                          className="text-[#B0B0B0] line-through text-sm sm:text-base"
                          style={{ fontFamily: "Poppins" }}
                        >
                          ${product.discountedPrice}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Link href={"/Shop"}>
  <button className="border border-[#B88E2F] w-[400px] xs:w-[245px] h-[48px] mx-auto mt-5 block  hover:bg-[#81704a]">
    <h1
      className="text-[#B88E2F] text-sm sm:text-base font-semibold"
      style={{ fontFamily: "Poppins" }}
    >
      Show More
    </h1>
  </button> </Link>
    </div>
  );
};

export default ProductPage;
