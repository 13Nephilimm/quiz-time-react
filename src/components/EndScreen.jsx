import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const returnToMenu = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="end-screen">
      <h1>The End!</h1>
      <p>Your Score is {`${score}/${Questions.length}`}</p>
      <button onClick={returnToMenu} className="next-btn">
        Menu
      </button>
    </div>
  );
};

export default EndScreen;
