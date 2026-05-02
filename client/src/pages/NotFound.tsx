import React from 'react'

import notfound from "../assets/404.png"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='min-h-screen center-flex flex-col text-center'>
      <div className="center-flex">
        <h1 className='text-[2in] text-[var(--primary-color)]'>4</h1>
        <img src={notfound} alt="404" className='w-[180px] aspect-square' />
        <h1 className='text-[2in] text-[var(--primary-color)]'>4</h1>
      </div>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/" className='button mt-10 px-6 py-2 transition'>Back to Home</Link>
    </div>
  )
}
