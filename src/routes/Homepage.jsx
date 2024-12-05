import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/*Breadcrumb*/}
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <span>{'>'}</span>
        <span className='text-myblue'>Blogs and Articles</span>
      </div>
      {/*Intro*/}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-gray-800 text-2xl md:text-5xl lg:text-6xl'>Heading of the post</h1>
          <p className='mt-8 text-md md:text-xl'>The nonsense written in that posts bla bla bla...</p>
        </div>
        <Link to="write" className='hidden md:block bg-myblue text-white font-medium rounded-full px-4 py-2'>Write your story</Link>
      </div>
      
      <MainCategories/>
      
      <FeaturedPosts/>
      
      <h1 className='my-8 text-2xl text-gray-600'>Recent posts</h1>
      <PostList/>
    </div>
  )
}

export default Homepage