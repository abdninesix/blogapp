import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='bg-slate-50 p-4 rounded-xl mb-8'>
      <div className='flex items-center gap-4'>
        <Image src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w='40' />
        <span className='font-medium'>Abd</span>
        <span className='text-gray-500 text-sm'>2 days ago</span>
      </div>
      <div className='mt-4'>
        <p>Hi this is a random comment on this post</p>
      </div>
    </div>
  )
}

export default Comment