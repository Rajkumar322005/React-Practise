import React, { useEffect, useState } from "react";
import "./quiz.css";
import Data from "./Quiz.json"; // Importing quiz data from a JSON file

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(5); // 5 seconds timer

  console.log(Data);

  const handleAnswer = (option) => {
    if (option === Data[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < Data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  useEffect(() => {
    let interval = null;

    if (!showScore && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      if (currentQuestion < Data.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setTimer(5);
      } else {
        setShowScore(true);
      }
    }

    return () => clearInterval(interval); 
  }, [currentQuestion, timer, showScore]);

  return (
    <>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            <h1>
              Your Score: {score}/{Data.length}
            </h1>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setTimer(5);
              }}
            >
              Restart
            </button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{Data[currentQuestion].question}</p>
            <div className="options">
              {Data[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
            <div className="timer">
              Time Left: <span>{timer}s</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
