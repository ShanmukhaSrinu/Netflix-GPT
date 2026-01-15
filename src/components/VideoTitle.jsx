import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[30%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div >
            <button className='bg-white text-black py-4 px-10 text-lg  rounded-lg hover:bg-white/70'>▶️ Play</button>
            <button className='bg-gray-500/50 text-white mx-2 py-4 px-10 text-lg  rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle