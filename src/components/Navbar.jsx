import React, { useEffect, useState } from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/clerk-react'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const {getToken} = useAuth()

    useEffect(()=>{
        getToken().then(token=>console.log(token))
    },[])

    return (
        <div className='w-full h-16 md:h-20 flex sticky top-0 z-10 bg-[#e6e6ff] opacity-90 items-center justify-between'>
            {/*Logo*/}
            <Link to='/' className='flex items-center gap-4 text-2xl font-bold group'>
                <Image src='/logo.png' alt='logo' w={32} h={32} />
                <span className='flex flex-row'>B<span className='opacity-0 scale-0 absolute group-hover:opacity-100 group-hover:scale-100 group-hover:relative transition-all group-hover:duration-1000 ease-in-out'>itch</span>LOG</span>
            </Link>
            {/*Mobile menu*/}
            <div className='md:hidden z-10'>
                <div className='cursor-pointer text-4xl' onClick={() => setOpen((prev) => (!prev))}>{open ? "X" : "☰"}</div>
                <div className={`absolute top-60 p-10 rounded-[30px] bg-myblue text-white flex flex-col gap-8 font-medium text-lg items-center justify-center ${open ? "left-[25%]" : "hidden"}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Trending</Link>
                    <Link to='/'>Most popular</Link>
                    <Link to='/'>About</Link>
                    <SignedOut>
                        <Link to='login' className='bg-myblue text-white rounded-full px-4 py-2'>Login</Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            {/*Desktop menu*/}
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <Link to='/'>Home</Link>
                <Link to='/'>Trending</Link>
                <Link to='/'>Most popular</Link>
                <Link to='/'>About</Link>

                <SignedOut>
                    <Link to='login' className='bg-myblue text-white rounded-full px-4 py-2'>Login</Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar