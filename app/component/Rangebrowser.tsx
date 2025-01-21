import React from 'react'
import Image from 'next/image'
import pic1 from '@/image/Mask Group.png'
import pic2 from '@/image/Image-living room.png'
import pic3 from '@/image/Mask Group (1).png'

const Rangebrowser = () => {
  return (
    <div className='w-full sm:w-[1183px] h-auto ml-auto mr-auto'>
  <div className='w-full sm:w-[559px] ml-auto sm:ml-80 h-auto grid justify-items-center'>
    <h1 className='text-[#333333] w-[300px] h-auto leading-[48px]' style={{ fontFamily: 'Poppins', fontSize: 32, fontWeight: 700 }}>
      Browse The Range
    </h1>
    <p className='text-[#666666]' style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 500 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  
  <div className='flex flex-col sm:flex-row gap-8 sm:gap-8'>
    <div className='flex-col text-center'>
      <Image src={pic1} alt='Dining' className='w-full sm:w-[381px] h-[480px] mt-10 '/>
      <h1 className='text-[#333333] mt-5' style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 600 }}>
        Dining
      </h1>
    </div>

    <div className='flex-col text-center'>
      <Image src={pic2} alt='Living' className='w-full sm:w-[381px] h-[480px] mt-10' />
      <h1 className='text-[#333333] mt-5' style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 600 }}>
        Living
      </h1>
    </div>

    <div className='flex-col text-center'>
      <Image src={pic3} alt='Bedroom' className='w-full sm:w-[381px] h-[480px] mt-10' />
      <h1 className='text-[#333333] mt-5' style={{ fontFamily: 'Poppins', fontSize: 24, fontWeight: 600 }}>
        Bedroom
      </h1>
    </div>
  </div>
</div>

  )
}

export default Rangebrowser
