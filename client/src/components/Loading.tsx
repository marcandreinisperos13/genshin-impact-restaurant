import React from 'react'

import loading from "../assets/loading.gif"

export default function Loading() {
  return (
    <div className='min-h-screen w-full bg-[var(--background-color)] center-flex flex-col gap-3 fixed top-0'>
      <img src={loading} alt="Loading" className='scale-150' />
      <p className='mt-8'>Loading... Please wait...</p>
    </div>
  )
}
