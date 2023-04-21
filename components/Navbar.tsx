import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-center gap-6 p-3 bg-lime-500 text-lg'>
        <Link href={'/'}>Home</Link>
        <Link href={'/events'}>Events</Link>
        <Link href={''}></Link>
        <Link href={'/Contact'}>Contact</Link>
    </div>
  )
}
