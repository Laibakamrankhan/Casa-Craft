import Image from "next/image"
import banner from "@/public/banner.png"
import Link from "next/link"
const Herobanner = () => {
  return (
    <div id="banner" className="w-full h-[500px] xs:h-[700px] sm:h-[1007.93px] mt-[50px] xs:mt-[75px] sm:mt-[95.7px] relative z-0">
  <div>
    <Image
      src={banner}
      alt="absolute scandinavian-interior-mockup-wall"
      className="absolute w-full h-[500px] xs:h-[700px] sm:h-[1007.93px] object-cover"
    />
  </div>
  <div
    className="absolute bg-[#FFF3E3] w-[90%] xs:w-auto sm:w-[653px] h-auto xs:h-[500px] sm:h-[443px] mt-[150px] xs:mt-[200px] sm:mt-[253px] mx-auto sm:ml-[730px] rounded-[10px] flex flex-col justify-center px-6 sm:px-12"
  >
    <div className="flex items-center">
      <span
        className="text-[#333333] text-xs xs:text-sm sm:text-base font-semibold tracking-[3px]"
        style={{ fontFamily: "Poppins", fontWeight: 600 }}
      >
        New Arrival
      </span>
    </div>
    <h1
      className="text-[#B88E2F] text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-[65px]"
      style={{ fontFamily: "Poppins", fontWeight: 700 }}
    >
      Discover Our New Collection
    </h1>
    <div className="flex flex-col gap-6 sm:gap-[100px]">
      <p
        className="text-[#333333] text-sm xs:text-base sm:text-lg leading-5 sm:leading-6"
        style={{ fontFamily: "Poppins", fontWeight: 600 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <Link href={"/Shop"}>
      <button className="bg-[#B88E2F] text-[#FFFFFF] w-[150px] xs:w-[180px] sm:w-[222px] h-[50px] xs:h-[60px] sm:h-[74px] py-3 sm:py-[25px] px-4 sm:px-[70px] mx-auto sm:mx-0">
        <h1
          className="items-center text-sm xs:text-base sm:text-lg"
          style={{ fontFamily: "Poppins", fontWeight: 700 }}
        >
          BUY Now
        </h1>
      </button> </Link>
    </div>
  </div>
</div> 
  )
}
export default Herobanner
