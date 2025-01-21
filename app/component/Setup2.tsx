import React from 'react'
import Image from "next/image"
import sbanner from '@/image/sbanner.png'

const Setup2 = () => {
  return (
    <div className="mt-[900px] xs:mt-[800px] sm:mt-[800px] w-full h-[780px] xs:h-[600px] sm:h-[700px]">
  <div className="w-[90%] xs:w-[90%] sm:w-[559px] ml-auto sm:ml-[500px] h-auto grid justify-items-center">
    <h1
      className="text-[#616161] text-sm xs:text-base sm:text-lg md:text-xl"
      style={{ fontFamily: "Poppins", fontWeight: 600 }}
    >
      Share your setup with
    </h1>
    <h1
      className="text-[#333333] flex justify-center w-[90%]  xs:w-[80%]  sm:w-[300px] h-auto leading-[48px] text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
      style={{ fontFamily: "Poppins", fontWeight: 700 }}
    >
      #FuniroFurniture
    </h1>
  </div>
  <Image
    src={sbanner}
    alt="Share.png"
    className="w-full h-[780px] xs:h-[600px] sm:h-[700px] object-cover"
  />
</div>

    
  )
}

export default Setup2
