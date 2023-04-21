import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  console.log(router)
  const [state, setState] = useState();
  return (
    <>
      <div className='flex min-h-[90vh] justify-center items-center flex-col'>
        <input type='file' accept='.csv' id='file' onChange={(e) => console.log(e.target.files)} />
        <button onClick={() => router.push('/Contact')}>Click Me</button>
      </div>
    </>
  )
}
