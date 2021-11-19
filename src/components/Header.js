import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Cart } from './Cart'

export const Header = () => {
  return (
    <nav className='header'>
      <Link to='/' className='header__logo-container'>
        <FaMobileAlt className='header__logo' size='2rem' />
      </Link>
      <div className='header__cart'>
        <Cart />
      </div>
    </nav>
  )
}
