import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image?: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    const searchQuery = `*[_type == "product" && (name match "*${query}*" || category match "*${query}*" || style match "*${query}*")]`;
    try {
      const data: Product[] = await client.fetch(searchQuery);
      setResults(data);
      setIsSearchVisible(true);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchVisible(false);
        setQuery("");
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative"> {/* Added relative positioning to contain absolute elements */}
      <div>
        <IoSearch
          className="ml-3 w-6 h-6 cursor-pointer mt-9 mr-3"
          onClick={() => setIsSearchVisible(true)} // Opens the search bar when clicked
        />
        {isSearchVisible && (
          <input
            type="text"
            placeholder="Search furniture..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsSearchVisible(true)}
            className="w-full p-2 outline-none"
          />
        )}
      </div>
      {isSearchVisible && query.trim() && (
        <button
          onClick={handleSearch}
          className="w-full mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      )}
      {isSearchVisible && results.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto w-full z-50">
          {results.map((item) => (
            <li
              key={item._id}
              className="flex items-center p-2 border rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              {item.image && (
                <Image src={item.image} alt={item.name} className="w-12 h-12 rounded-md mr-3" />
              )}
              <span className="text-gray-700 font-medium">
                {item.name} - ${item.price}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
