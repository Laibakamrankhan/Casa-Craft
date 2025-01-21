'use client'
import Image from "next/image"
import logo from '@/image/Meubel House_Logos-05.png'
import { IoSearch } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link"
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
    <nav
      id="nav-style"
      className="bg-[#FFFFF] text-[#000000] flex justify-between items-center h-[100px] px-4 sm:px-8 md:px-16"
    >
      <Link href="#">
        <div id="brand" className="h-[41px] w-[185px] mt-[29px] mr-[29px]">
          <h3
            style={{
              fontWeight: 700,
              fontSize: 34,
            }}
            className="flex items-center gap-[5px] text-[#00000] text-24px tracking-0.1px leading-32"
          >
            <Image src={logo} alt="Meubel House_Logo" className="w-[50px] h-[32px]" />
           Casa <span>Craft</span> 
          </h3>
        </div>
      </Link>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      <div className="hidden sm:flex text-center space-x-10">
        <ul className="flex text-center justify-evenly w-[430px] h-[24px] mt-[38px]" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 16 }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>

        <MdOutlinePerson className="w-[28px] h-[28px] mt-[36px]" />
        <SearchBar />
        <FaRegHeart className="w-[28px] h-[28px] mt-[36px]" />
        <Link href="/Cart">
          <IoCartOutline className="w-[28px] h-[28px] mt-[36px]" />
        </Link>
      </div>
    </nav>
    {isMenuOpen && (
      <div className="sm:hidden bg-[#FFFFF] text-center">
        <ul className="flex flex-col py-4 space-y-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>

        <div className="flex justify-center space-x-4 mt-4">
          <MdOutlinePerson className="w-[28px] h-[28px]" />
          <IoSearch className="w-[28px] h-[28px]" />
          <FaRegHeart className="w-[28px] h-[28px]" />
          <Link href="/Cart">
            <IoCartOutline className="w-[28px] h-[28px]" />
          </Link>
        </div>
      </div>
    )}
  </div>
   
  )
}

export default Navbar
