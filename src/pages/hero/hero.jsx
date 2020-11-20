import React from 'react'
import './hero.css'
import bana from '../../assets/banner.svg'

const Hero = () =>(
    <header>
      <div className='banner'>
        <div className='banner__descr'>
          <h1>Let's play a game <br /> just for fun</h1>
          <p>
            J4F is an interactive, fun, secure and
            safe app. Create an account, set your
            questions, share your profile link and
            see what your friends think about you!
          </p>
        </div>
      
        <img alt='' src={bana} className='banner__img'/>
      </div>
     
    </header>
)

export default Hero