import { useRouter } from 'next/router';
import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data: any = await res.json();

    const paths = data.map((curEle: any) => {
        return {
            params: {
                eventId: curEle.id.toString(),
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.eventId;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data: any = await res.json();
    console.log(data)
    return {
        props: {
            data,
        }
    }
}

// @ts-ignore
export default function EventDetail({ data }) {
    console.log(data)
    const router = useRouter();
    return (
        <div className='grid gap-4 text-black p-4'>
            <div key={data} className='rounded-lg p-4 w-full'  style={{backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`}}>
                <h2>{data.id}</h2 >
                <h2>{data.title}</h2>
                <h2>{data.body}</h2>
                <button className='bg-red-500 text-white px-10 py-2 rounded m-4 float-right' onClick={() => router.push('/events')}>Back</button>
            </div>
        </div>
    )
}
