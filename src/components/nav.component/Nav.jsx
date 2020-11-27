import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import logo from '../../assets/j4f.png'

const Nav = () =>(
    <nav className='nav'>
      <Link to='/'><img alt='' src={logo} className='logo' /></Link>
      <Link  to='/signin'><span className='nav__signin'>Sign In</span></Link>
    </nav>
)

export default Nav