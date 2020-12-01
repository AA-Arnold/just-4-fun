import React from 'react'
// import image from '../../assets/undraw_Social_media_re_w12q.svg'
import {friendEvalData} from './FriendEvalData'
import './dashboard.css'

const Dashboard = () =>{

    let [questionNumber, setQuestionNumber] = React.useState(0)

    const onNextChange = () =>{
        
        if(questionNumber < 9){

            setQuestionNumber((questionNumber) => questionNumber + 1)
        }
    }

    const onPrevChange = () =>{

        if (questionNumber > 0){

            setQuestionNumber((questionNumber) => questionNumber - 1)

        }
    }

    const getTargetHtml = e => {
        const {target:{outerText}} = e
        const answer = outerText
        console.log(answer)
    }

    return(
       <div className='friendeval'>
       <h2 className='friendeval__header'>Friend Evaluation</h2> 
       <div className='friendeval__question-count'>Question {friendEvalData[questionNumber].questionId}/10</div> 
        <div className='align'>
            <img className='friendeval__image'alt='' src={friendEvalData[questionNumber].image}/> 
        </div>
       <div className='friendeval__question'>{friendEvalData[questionNumber].question}</div>
       <div className="friendeval__buttons">
           {

               friendEvalData[questionNumber].options.map(option => <button onClick={getTargetHtml}>{option}</button>)
               
           }

       </div>
       <div className="friendeval__nav">
           <button onClick={onPrevChange} >Prev</button>
           <button onClick={onNextChange}>Next</button>
       </div>
    </div>
    )
}

export default Dashboard