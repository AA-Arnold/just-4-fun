import React from 'react'
// import image from '../../assets/undraw_Social_media_re_w12q.svg'
import {friendEvalData} from './FriendEvalData'
import './dashboard.css'




const Dashboard = () =>{

    let [questionNumber, setQuestionNumber] = React.useState(0)
    

    React.useEffect(() => {
         onNextChange()
    }, [questionNumber])

    const onNextChange = () =>{
        setQuestionNumber(questionNumber++)
    }

    return(
        <div className='friendeval'>
       <h2 className='friendeval__header'>Friend Evaluation</h2> 
       <div className='friendeval__question-count'>Question 1/10</div> 
        <div className='align'>
            <img className='friendeval__image'alt='' src={friendEvalData[questionNumber].image}/> 
        </div>
       <div className='friendeval__question'>{friendEvalData[questionNumber].question}</div>
       <div className="friendeval__buttons">
           {
               friendEvalData[questionNumber].options.map(option => <button>{option}</button>)
           }

       </div>
       <div className="friendeval__nav">
           <button>Prev</button>
           <button onClick={onNextChange}>Next</button>
       </div>
    </div>
    )
}

export default Dashboard