import React from 'react'
import logo from '../assets/logo.svg'

function Header({ balance }) {
  return (
    <header>
          <div>
            <p className='header__title'>My balance</p>
            <p className='header__amount'>${balance}</p>
          </div>

          <img className='header__logo' src={logo} alt="logo" />
    </header>
  )
}

export default Header
