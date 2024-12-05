import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/*First post*/}
      <div className='flex flex-col gap-4 w-full lg:w-1/2'>
        <Image src='featured1.jpeg' className='rounded-3xl object-cover' w='895' />
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold lg:text-lg'>01.</h1>
          <Link to='web-design' className='text-myblue lg:text-lg'>Web design</Link>
          <span className='text-gray-500'>2 days ago</span>
        </div>
        <Link to='test' className='text-xl lg:text-3xl font-semibold lg:font-bold'>Post title shows here</Link>
      </div>
      {/*Other posts*/}
      <div className='flex flex-col gap-4 w-full lg:w-1/2'>

        <div className='flex justify-between gap-4 w-full lg:h-1/3'>
          <div className='w-1/3 aspect-video'>
            <Image src='featured2.jpeg' className='w-full h-full rounded-3xl object-cover' w='298' />
          </div>

          <div className='w-2/3'>
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='font-semibold lg:text-lg'>02.</h1>
              <Link to='web-design' className='text-myblue lg:text-lg'>Web design</Link>
              <span className='text-gray-500'>2 days ago</span>
            </div>
            <Link to='test' className='text-base sm:text-lg md:text-2xl font-medium'>Post title shows here</Link>
          </div>
        </div>

        <div className='flex justify-between gap-4 w-full lg:h-1/3'>
          <div className='w-1/3 aspect-video'>
            <Image src='featured3.jpeg' className='w-full h-full rounded-3xl object-cover' w='298' />
          </div>

          <div className='w-2/3'>
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='font-semibold lg:text-lg'>03.</h1>
              <Link to='web-design' className='text-myblue lg:text-lg'>Web design</Link>
              <span className='text-gray-500'>2 days ago</span>
            </div>
            <Link to='test' className='text-base sm:text-lg md:text-2xl font-medium'>Post title shows here</Link>
          </div>
        </div>

        <div className='flex justify-between gap-4 w-full lg:h-1/3'>
          <div className='w-1/3 aspect-video'>
            <Image src='featured4.jpeg' className='w-full h-full rounded-3xl object-cover' w='298' />
          </div>

          <div className='w-2/3'>
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='font-semibold lg:text-lg'>04.</h1>
              <Link to='web-design' className='text-myblue lg:text-lg'>Web design</Link>
              <span className='text-gray-500'>2 days ago</span>
            </div>
            <Link to='test' className='text-base sm:text-lg md:text-2xl font-medium'>Post title shows here</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedPosts