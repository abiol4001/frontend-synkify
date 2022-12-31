import React from 'react'
import heroImage from '../../assets/heroImage.png'

export default function ComingSoon() {
  return (
    <div>
      <div className='w-full grid md:grid-cols-2 h-screen'>
      <div className='h-screen flex items-center justify-center'>
        <div className='w-[70%]'>
        <h1 className='text-black text-6xl font-bold font-sans leading-tight'>Monitor channels under one platform easily.</h1>
        <p className='text-2xl text-black leading-relaxed mt-4'>with SINKYFY, it’s now easier to monitor,engage and connect with all your followers on your different social media handles.</p>
        </div>
      </div>
      <div className='h-screen flex justify-end'>
        <img src={heroImage} className="object-cover h-full"/>
      </div>
    </div>
    <div className='w-full h-[300px] grid place-items-center'>
      <div className='w-[50%] border border-[#5B9EA5] rounded-full grid grid-cols-3'>
        <input type="text" placeholder="What's your email?" className='p-4 col-span-2 text-xl' />
        <button className='bg-[#013B3F] text-white p-3 rounded-full text-xl'>GET EARLY ACCESS</button>
      </div>
    </div>
    </div>
  )
}
