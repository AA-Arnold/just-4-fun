import React from 'react'
// import image from '../../assets/undraw_Social_media_re_w12q.svg'
import {friendEvalData} from './FriendEvalData'
import './dashboard.css'

const Dashboard = () =>{

    let [questionNumber, setQuestionNumber] = React.useState(0)
    let [answer, setAnswer] = React.useState([])
    let [answerClicked, setAnswerClicked] = React.useState()
    let [disable, setDisable] = React.useState(true)

    const onNextChange = () =>{
        
        if(questionNumber < 9 && disable === false){

            setQuestionNumber((questionNumber) => questionNumber + 1)
            setAnswer((answer) => answer.concat(answerClicked))
        }

        

    }

    const onPrevChange = () =>{

        if (questionNumber > 0){

            setQuestionNumber((questionNumber) => questionNumber - 1)

        }

        setDisable((disable) => !disable)
    }

    // let answerClicked = {}
    console.log(answerClicked)
    const getTargetHtml = e => {
        const {target:{outerText}} = e
        const answer = outerText
        answerClicked = {questionId, answer}
        // console.log(answerClicked)
        setAnswerClicked(answerClicked)
        
    }


    const {questionId, options} = friendEvalData[questionNumber]
    console.log( options)


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

            //    friendEvalData[questionNumber].options.map(option => <button onClick={getTargetHtml}>{option}</button>)
            //    friendEvalData.map(data => console.log(data.questionId = 0 ? data.options : null))
            options.map(option => <button disabled={disable} onClick={getTargetHtml}>{option}</button>)
            // friendEvalData.map(data => <button >{data.options}</button>)

               
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