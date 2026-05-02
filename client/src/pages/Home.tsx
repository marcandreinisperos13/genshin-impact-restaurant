import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen center-flex flex-col bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/src/assets/home-bg.jpg")] bg-cover bg-center'>
      <h1 className='font-bold text-5xl text-[var(--secondary-color)]'>Welcome to Teyvat Restaurant</h1>
      <h3 className='text-xl text-[var(--secondary-text-color)]'>A world of flavors awaits you</h3>
      <Link to="/menu" className='button mt-10 px-6 py-2 transition'>Go to Menu</Link>
    </div>
  )
}
