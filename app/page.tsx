import React from 'react'
import Footer from './component/Footer'
import Herobanner from './component/Herobanner'
import Inspration from './component/Inspration'
import Navbar from './component/Navbar'
import Rangebrowser from './component/Rangebrowser'
import Setup2 from './component/Setup2'
import ProductPage from './component/ProductPage'
const page = () => {
  return (
    <div>
  <Herobanner />
   <Rangebrowser />
   <ProductPage />
   <Inspration />
   <Setup2 />
    </div>
  )
}

export default page
