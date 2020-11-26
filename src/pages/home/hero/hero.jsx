import React from 'react'
import './hero.css'
import bana from '../../../assets/banner.png'
import LearnMore from '../../../components/learn-more-button/learn-more-button.component'

const Hero = () =>(
    <header>
      <div className='banner'>
        <div className="banne__flex-container">
          <div className='banner__descr'>
            <h1 className='banner__heading'>Let's play a game <br /> just for fun</h1>
            <p className='banner__paragraph'>
              J4F is an interactive, fun, secure and
              safe app. Create an account, set your
              questions, share your profile link and
              see what your friends think about you!
            </p>
            <LearnMore>SIGN UP NOW &rarr;</LearnMore>
          </div>
        
          <img alt='' src={bana} className='banner__img'/>
        </div>
        
      </div>
      
    </header>
)

export default Hero