import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Teyvat Restaurant</h1>
      <h3></h3>
      <Link to="/menu">Go to Menu</Link>
    </div>
  )
}
