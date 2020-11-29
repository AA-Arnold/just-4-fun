import React from 'react'
import image from '../../assets/undraw_Social_media_re_w12q.svg'
import './dashboard.css'

const Dashboard = () =>(
    <div className='friendeval'>
       <h2 className='friendeval__header'>Friend Evaluation</h2> 
       <div className='friendeval__question-count'>Question 1/10</div> 
       <div>
        <img className='friendeval__image'alt='' src={image}/> 
       </div>
       <div className='friendeval__question'>What apps do i use frequently</div>
       <div className="friendeval__buttons">
           <button>Instagram</button>
           <button>Whatsapp</button>
           <button>Twitter</button>
           <button>Youtube</button>
       </div>
       <div className="friendeval__nav">
           <button>Prev</button>
           <button>Next</button>
       </div>
    </div>
)

export default Dashboard