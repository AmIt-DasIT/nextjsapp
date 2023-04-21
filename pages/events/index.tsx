import { useRouter } from 'next/router';
import React from 'react'

export const getStaticProps = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data: any = await res.json();

    return {
        props: {
            data,
        }
    }
}
// @ts-ignore
export default function Events({data}) {
const router = useRouter();
  return (
    <div className='grid sm:grid-cols-5 gap-4 p-3 text-black '>
        {data.map((data: any) => {
            return (
                <div key={data} className='bg-sky-600 rounded-lg p-3 h-32 cursor-pointer' onClick={() => router.push(`/events/${data.id}`)}>
                    <h2>{data.id}</h2>
                    <h2>{data.title}</h2>
                </div>
            )
        })}
    </div>
  )
}
