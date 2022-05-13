import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [nowQuestion, setNowQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [count, setCount] = useState(0);
  const questions = [
    {
      question: 'What is html?',
      answers: [
        { answerOption: 'Hyper Text Markup Language', isCorrect: true },
        { answerOption: 'CSS', isCorrect: false },
        { answerOption: 'JS', isCorrect: false },
      ],},{
      question: 'Who is CSS?',
      answers: [
        { answerOption: 'Cascading Style Sheet', isCorrect: true },
        { answerOption: 'html', isCorrect: false },
        { answerOption: 'js', isCorrect: false },
      ],},{
      question: 'What is Js?',
      answers: [
        { answerOption: 'Java Script', isCorrect: true },
        { answerOption: 'CSS', isCorrect: false },
        { answerOption: 'HTml', isCorrect: false },
      ],
    },];


  const check = (isCorrect) => {
    if (isCorrect) {
      setCount(count + 10);
    }

    const nextQuestion = nowQuestion + 1;
    if (nextQuestion < questions.length) {
      setNowQuestion(nextQuestion);
    } else {
      setScore(true);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className='app'>
          <h3>Quiz App</h3>
          {score ? (
            <>           
            <div>
              You scored {count} out of {questions.length * 10}
            </div>
              <div>Your Scoring Percentage is {((count / questions.length) * 10).toFixed(2) + "%"}</div></>
          ) : (
            <>
              <div >
                <div>{questions[nowQuestion].question}</div>
                {/* {console.log(currentQuestion)} */}
              </div>
              <div>

                {questions[nowQuestion].answers.map((e, index) => (
                  <button key={index} onClick={() => check(e.isCorrect)}>{e.answerOption}</button>
                ))}
              </div>

            </>
          )}
        </div>
        <div>
          {/* <progress max={questions.length}></progress> */}
        </div>
        
      </header>
    </div>
  );
}

export default App;