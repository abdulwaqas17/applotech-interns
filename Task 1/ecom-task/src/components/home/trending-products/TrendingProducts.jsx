import React from 'react'
import SectionBar from '../bar/SectionBar'
import Arrows from '@/components/commons/arrows/Arrows'

const TrendingProducts = () => {
  return (
    <div className='px-[20px] md:px-[30px]'>
      <div className='container mx-auto'>

        <SectionBar category="Trending Products" heading="What's Trending Now" option={<Arrows/>}/>
      
    </div>
    </div>
  )
}

export default TrendingProducts
