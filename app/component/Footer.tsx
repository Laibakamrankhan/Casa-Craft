import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full h-auto mt-[300px] px-4 sm:px-6 md:px-16">
    <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-20">
      <div className="flex flex-col gap-6">
       <h1 className="text-[#000000] cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 600 }}>
       Casa <span>Craft</span> 
        </h1>
        <h1
          className="text-[#9F9F9F]"
          style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 400 }}
        >
          400 University Drive Suite 200 Coral <br />
          Gables,<br />
          FL 33134 USA
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
        <div className="flex flex-col gap-6">
          <h1
            className="text-[#9F9F9F]"
            style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}
          >
            Links
          </h1>
          <ul className="flex flex-col gap-4">
            <Link href={"/"}><li>Home</li> </Link>
           <Link href={"/Shop"}> <li>Shop</li> </Link>
           <Link href={"/"}> <li>About</li></Link> 
            <Link href={"/Contact"}><li>Contact</li> </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1
            className="text-[#9F9F9F]"
            style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}
          >
            Help
          </h1>
          <ul className="flex flex-col gap-4">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>
  
      <div className="flex flex-col gap-6 items-center sm:items-start">
        <h1
          className="text-[#9F9F9F]"
          style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}
        >
          News Letter
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="w-full sm:w-[300px] p-2 border border-[#9F9F9F] rounded-md"
          />
          <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
     </div>
    <div className="w-full h-auto mt-12 text-center">
      <p className="text-[#9F9F9F]" style={{ fontFamily: 'Poppins', fontSize: 14 }}>
        ©2021 Casa Craft LLC.
      </p>
    </div>
  </div>
  )
}

export default Footer
