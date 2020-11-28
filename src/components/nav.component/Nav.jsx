import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './nav.css'
import logo from '../../assets/j4f.png'

const Nav = (props) => {

  let toggle;
  let link;
  if (props.location.pathname === '/signin'){
    toggle = 'Sign Up'
    link = '/signup'
  }else{
    toggle = 'Sign In'
    link = 'signin'
  }

  return(
    <nav className='nav'>
      <Link to='/'><img alt='' src={logo} className='logo' /></Link>
      <Link to={link}><span className='nav__signin'>{toggle}</span></Link>
    </nav>
  )
} 


    


export default withRouter(Nav)