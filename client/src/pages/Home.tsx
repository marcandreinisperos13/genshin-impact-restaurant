import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen center-flex flex-col'>
      <h1 className='font-bold text-5xl text-[var(--secondary-color)]'>Welcome to the Teyvat Restaurant</h1>
      <h3 className='text-xl'>Enjoy your meal!</h3>
      <Link to="/menu" className='button mt-10 px-6 py-2 transition'>Go to Menu</Link>
    </div>
  )
}
