import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white text-black py-4'>
        <ul className='flex justify-center gap-9 text-xl'>
            <li><Link href="/characters" className='transition ease hover:underline hover:text-[#81FA67] duration-200'>Characters</Link></li>
            <li><Link href="/episodes" className='transition ease hover:underline hover:text-[#81FA67] duration-200'>Episodes</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar