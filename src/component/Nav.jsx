import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/'>Main Page</Link>
        <Link to='/chart'>Your Chart</Link>
    </div>
  )
}
