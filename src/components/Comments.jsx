import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mb-8'>
        <h1 className='text-xl'>Comments</h1>
        <div className='w-full flex items-center justify-between gap-8'>
            <textarea placeholder='Write a comment...' className='rounded-xl p-2 w-full outline-none resize-none'/>
            <button className='h-fit bg-myblue text-white font-medium rounded-full px-4 py-2'>Send</button>
        </div>
        <Comment/>
    </div>
  )
}

export default Comments