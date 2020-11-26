import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import logo from '../../assets/j4f.png'

const Nav = () =>(
    <nav className='nav'>
      <Link to='/'><img alt='' src={logo} className='logo' /></Link>
      <span className='nav__signin'>Sign In</span>
    </nav>
)

export default Nav