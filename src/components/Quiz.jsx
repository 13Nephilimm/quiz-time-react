import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Contexts";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="quiz">
      <h1 className="question">{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen("B");
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen("C");
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen("D");
          }}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="next-btn">
          Finish
        </button>
      ) : (
        <button onClick={nextQuestion} className="next-btn">
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;
