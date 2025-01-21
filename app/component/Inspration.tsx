
import Image from 'next/image'
import pic1 from '@/image/pic24.png'
import pic2 from '@/image/pic25.png'
import pic3 from '@/image/pic26.png'
import pic4 from '@/image/Group 13.png'


const Inspration = () => { ;
  return (
    <div className='bg-[#FCF8F3] w-full h-auto mt-20 absolute'>
        <div className='flex flex-row sm:flex-row '>
         <div className="w-full sm:w-[422px] flex flex-col gap-3 mt-16 sm:mt-56 relative px-4 sm:ml-24">
        <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:40 , fontWeight:700}}>
        50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[#616161]  leading-[24px] "style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>
        Our designer already made a lot of beautiful prototipe of rooms that inspire you
      </p>
      <div className="w-[176px] h-[48px] ">
        <button className="bg-[#B88E2F] text-white flex justify-center items-center gap-[10px] py-5 px-10">
          <p className=""style={{fontFamily:'Poppins' , fontSize:10 , fontWeight:600}}>Explore More</p>
        </button>
      </div>
    </div>
    <div className='flex flex-row sm:flex-row gap-4 mt-10 ml-4 sm:ml-[80px]'>
        <Image
         src={pic1} alt='image' className='w-[440px] h-[582px] relative  ' />
         <div className='bg-[#FFFFFFB8] sm:w-[217px] h-[130px] absolute sm:mt-[420px] mt-[400px] xs:ml-5 ml-5'>
    <div className='flex flex-col mt-8 ml-5'>
        <div className='text-[#616161] flex gap-2 items-center  ' style={{fontFamily:'Poppins', fontSize:16, fontWeight:500}}>
            <h1>01</h1>   
            <div className='w-[27px] h-[1px] border border-[#616161]'></div>
            <h1>Bed Room</h1>
        </div>
        <h1 className='text-[#3A3A3A] sm:text-[9px]' style={{fontFamily:'Poppins', fontSize:28, fontWeight:600}}>Inner Peace</h1>
    </div>
</div>

   <Image
        src={pic2} alt='image' className='w-full sm:w-[327px] h-[486px] relative hidden sm:block ' />
         
         <Image
         src={pic3} alt='image' className='w-[100px] h-[486px] sm:w-[150px] sm:h-[500px] relative hidden sm:block ' />
   
    </div>
  
 <Image
         src={pic4} alt='image' className='sm:w-[70px] h-[70px] mt-72 absolute ml-[980px] hidden sm:block ' />

        </div>
      
  </div>
      
   

  )}

export default Inspration
