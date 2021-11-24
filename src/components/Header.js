import React from 'react'
import { FaAngleRight, FaMobileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Cart } from './Cart'

export const Header = ({ cart, breadcrumb }) => {
  return (
    <nav className='header'>
      <div className='header__logo'>
        <Link to='/' className='header__logo-container'>
          <FaMobileAlt className='header__logo-icon' size='2rem' />
        </Link>
        <div className='header__logo-title'>BeMobile</div>
      </div>
      <div className='breadcrumbs'>
        {breadcrumb && (
          <>
            <div>
              <Link to='/' className='breadcrumbs__home'>
                Home
              </Link>
            </div>
            <div className='breadcrumb__navigate'>
              <FaAngleRight className='breadcrumb__icon' size='1rem' />{' '}
              {breadcrumb}
            </div>
          </>
        )}
      </div>
      <div className='header__cart'>
        <Cart cart={cart} />
      </div>
    </nav>
  )
}
