import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Quiz from "./components/Quiz";
import GameOver from "./components/GameOver";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  console.log(correctAnswers);

  function handleSelectAnswer(selectedAnswer) {
    let updatedCorrectAnswers = [...correctAnswers];
    updatedCorrectAnswers.indexOf(selectedAnswer) == -1 &&
      updatedCorrectAnswers.push(selectedAnswer);
    setCorrectAnswers(updatedCorrectAnswers);
  }

  function handleSubmitQuiz() {
    setIsGameOver(true);
  }

  const score = correctAnswers.length;

  return (
    <div>
      {!isGameStarted && <StartGame onStart={setIsGameStarted} />}
      {isGameStarted && !isGameOver && (
        <Quiz onSelectAnswer={handleSelectAnswer} onSubmit={handleSubmitQuiz} />
      )}
      {isGameOver && <GameOver score={score} />}
    </div>
  );
}

export default App;
