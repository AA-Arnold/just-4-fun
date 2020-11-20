import React from 'react'
import './nav.css'
import logo from '../../assets/j4f.png'

const Nav = () =>(
    <nav className='nav'>
      <img alt='' src={logo} className='logo' />
      <span className='nav__signin'>Sign In</span>
    </nav>
)

export default Nav