import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>
            {/*Image*/}
            <div className='md:hidden xl:block xl:w-1/3'>
                <Image src='postImg.jpeg' className='rounded-2xl object-cover' w='735' />
            </div>
            {/*Details*/}
            <div className='flex flex-col gap-4 xl:w-2/3'>
                <Link to='/test' className='text-4xl font-semibold'>Title of this post shows here</Link>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <span>Written by</span>
                    <Link to='/test' className='text-myblue'>Abd</Link>
                    <span>on</span>
                    <Link to='/test' className='text-myblue'>Web design</Link>
                    <span className='text-gray-500'>2 days ago</span>
                </div>
                <p className=''>The text/paragraph/nonsense of the post/article shows here</p>
                <Link to='/test' className='text-myblue text-sm underline'>Read more</Link>
            </div>
        </div>
    )
}

export default PostListItem