import React from "react";
import "./quiz.css"; // Assuming you have a CSS file for styling
import Data from "./Quiz.json"; // Adjust the import path as necessary 
const Quiz = () => {
  return (
    <>
      <div className="quiz-app">
        <div className="score-section" style={{ display: "none" }}>
          <h1>Your Score: 3/3</h1>
          <button>Restart</button>
        </div>
        <div className="question-section">
          <h2>Questions 1</h2>
          <p>This is a sample Question</p>
          <div className="options">
            <button>Option-1</button>
            <button>Option-2</button>
            <button>Option-3</button>
            <button>Option-4</button>
          </div>
          <div className = "timer">
            Time Left: <span>5s</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
