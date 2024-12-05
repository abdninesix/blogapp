import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
import Search from './Search'

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />

      <h1 className="mt-8 mb-4 text-sm font-medium">Filters</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value='newest' className='appearance-none w-4 h-4 border-2 bg-white border-myblue checked:bg-myblue cursor-pointer' />
          Newest
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value='popular' className='appearance-none w-4 h-4 border-2 bg-white border-myblue checked:bg-myblue cursor-pointer' />
          Most popular
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value='trending' className='appearance-none w-4 h-4 border-2 bg-white border-myblue checked:bg-myblue cursor-pointer' />
          Trending
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name='sort' value='oldest' className='appearance-none w-4 h-4 border-2 bg-white border-myblue checked:bg-myblue cursor-pointer' />
          Oldest
        </label>
      </div>

      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="posts">All</Link>
        <Link className="underline" to="posts?cat=web-design">Web Design</Link>
        <Link className="underline" to="posts?cat=development">Development</Link>
        <Link className="underline" to="posts?cat=databases">Databases</Link>
        <Link className="underline" to="posts?cat=search-engine">Search Engines</Link>
        <Link className="underline" to="posts?cat=marketing">Marketing</Link>
      </div>
    </div>
  )
}

export default SideMenu