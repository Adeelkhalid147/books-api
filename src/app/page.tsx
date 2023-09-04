import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center text-2xl font-bold'>
        <ol>
        <div><Link href={"/getData"}>BookApi</Link></div>
        </ol>
    </div>
  )
}

export default Home