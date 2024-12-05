import { useUser } from '@clerk/clerk-react'
import LoginPage from './LoginPage'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const Write = () => {

  const {isLoaded, isSignedIn} = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (isLoaded && !isSignedIn) {
    return <LoginPage/>
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-2xl text-gray-600'>Create a new post</h1>
      <form className='flex flex-col flex-1 mb-8 gap-6'>
        <button className='w-fit bg-white text-gray-500 font-medium rounded-full px-4 py-2'>Add a cover photo</button>
        <input type="text" placeholder='Write a post title...' className='bg-transparent text-4xl p-2 outline-none font-semibold' />
        <div className='flex items-center gap-4'>
          <label>Choose a category:</label>
          <select name="cat" id="" className='p-1 outline-none rounded-full'>
            <option value='general'>General</option>
            <option value='web-design'>Web Design</option>
            <option value='development'>Development</option>
            <option value='databases'>Databases</option>
            <option value='seo'>Search Engines</option>
            <option value='marketing'>Marketing</option>
          </select>
        </div>
        <textarea rows={4} name='description' placeholder='Write a short description...' className='p-2 rounded-xl outline-none resize-none'/>
        <ReactQuill theme="snow" className='flex-1 bg-white rounded-xl'/>
        <button className='w-fit bg-myblue text-white font-medium rounded-full px-4 py-2'>Post</button>
      </form>
    </div>
  )
}

export default Write