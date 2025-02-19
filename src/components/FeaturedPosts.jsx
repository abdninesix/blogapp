import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';

const fetchPost = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4`)
  return res.data;
}

const FeaturedPosts = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost()
  })

  if (isPending) return "Loading..."
  if (error) return "Something went wrong: " + error.message

  const posts = data.posts
  if (!posts || posts.length === 0) return

  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/*First post*/}
      <div className='flex flex-col gap-4 w-full lg:w-1/2'>
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold lg:text-lg'>01.</h1>
          <Link to='web-design' className='text-myblue lg:text-lg'>{posts[0].category}</Link>
          <span className='text-gray-500'>{format(posts[0].createdAt)}</span>
        </div>
        <Link to={`/${posts[0].slug}`} className='text-xl lg:text-3xl font-semibold lg:font-bold'>{posts[0].title}</Link>
        {posts[0].img && <Image src={posts[0].img} className='rounded-3xl object-cover' w='895' />}
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