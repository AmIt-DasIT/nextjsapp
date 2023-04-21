import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      This is a testing page
    </div>
  )
}
