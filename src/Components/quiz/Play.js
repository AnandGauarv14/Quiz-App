import React, { useState , useEffect } from 'react'
import {QuizData} from "../../Data/QuizData"
import "./Play.css"
import QuizResult from './QuizResult'
import { Helmet } from 'react-helmet'
 
 

const Play = () => {

  const storedCurrentQuestion = parseInt(localStorage.getItem('currentQuestion')) || 0;
  const storedScore = parseInt(localStorage.getItem('score')) || 0;
  const storedClickedOption = parseInt(localStorage.getItem('clickedOption')) || 0;
  const storedShowResult = localStorage.getItem('showResult') === 'true';

    
   const [currentQuestion , setCurrentQuestion] = useState(storedCurrentQuestion)
   const [score  , setScore] = useState(storedScore) ;
   const [clickedOption , setClickedOption] = useState(storedClickedOption)
   const [showResult  , setShowResult] = useState(storedShowResult)
    
   useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('score', score);
    localStorage.setItem('clickedOption', clickedOption);
    localStorage.setItem('showResult', showResult);
  }, [currentQuestion, score, clickedOption, showResult]);


   const changeQusetion = () =>{
    updateScore();
    if(currentQuestion<QuizData.length-1){
       setCurrentQuestion(currentQuestion+1)
       setClickedOption(0)
   }else{
      setShowResult(true)
   }

   

  }

  const previousQuestion = () =>{
    updateScore()
    if(currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setClickedOption(0);
    }


  }

  const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
          setScore(score+1)
        }
  }
 
  const resetAll = () =>{
    setShowResult(false)
    setCurrentQuestion(0);
    setClickedOption(0) ;
    setScore(0) ;
  }

  

 return (
  
     <div>
      <Helmet><title>Play Quiz </title></Helmet>
       <p className='heading-txt'>Quiz </p>
       <div className='container'>
          {showResult ? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
          ):( 
          <>
        <div className='question'>
             <span id='question-number'>{currentQuestion+1}.</span>
             <span id='question-txt'>{QuizData[currentQuestion].question}</span>
        </div>
           <div className='option-container'>
                {QuizData[currentQuestion].options.map((option , i)=>{
                  return(
                    <button 
                   // className='option-btn'
                      className={`option-btn ${
                        clickedOption == i+1?"checked":null
                      }`}
                    key={i}
                     onClick={()=> setClickedOption(i+1)}
                    >
                         {option}
                    </button>
                  )
                })}
           </div>
           <input type='button' value="Next" id='next-button' onClick={changeQusetion} />
            <div>
              <input type='button' value="Previous" id='previous-button' onClick={previousQuestion} />
            </div>
           </>)}
       </div>
     </div>
      
  )
}

export default Play

 
   
  
 
   

   