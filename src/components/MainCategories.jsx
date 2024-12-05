import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const MainCategories = () => {
    return (
        <div className='hidden md:flex items-center justify-center bg-white rounded-full p-3 gap-8'>
            {/*Links*/}
            <div className='flex flex-1 flex-wrap items-center justify-between'>
                <Link to="posts" className='bg-myblue text-white rounded-full px-4 py-2'>All posts</Link>
                <Link to="posts?cat=web-design" className='hover:bg-blue-50 rounded-full px-4 py-2'>Web design</Link>
                <Link to="posts?cat=development" className='hover:bg-blue-50 rounded-full px-4 py-2'>Development</Link>
                <Link to="posts?cat=databases" className='hover:bg-blue-50 rounded-full px-4 py-2'>Database</Link>
                <Link to="posts?cat=search-engine" className='hover:bg-blue-50 rounded-full px-4 py-2'>Search engine</Link>
                <Link to="posts?cat=marketing" className='hover:bg-blue-50 rounded-full px-4 py-2'>Marketing</Link>
            </div>

            <span className='text-xl font-medium'>|</span>

            {/*Searchbar*/}
            <Search/>
        </div>
    )
}

export default MainCategories