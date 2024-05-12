import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Quiz from "./components/Quiz";
import GameOver from "./components/GameOver";

function App() {
  const [numOfQuestions, setNumberOfQuestions] = useState(5);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  function handleSelectAnswer(selectedAnswer) {
    let updatedCorrectAnswers = [...correctAnswers];
    updatedCorrectAnswers.indexOf(selectedAnswer) == -1 &&
      updatedCorrectAnswers.push(selectedAnswer);
    setCorrectAnswers(updatedCorrectAnswers);
  }

  function handleStartQuiz(numQuestions) {
    setIsGameStarted(true);
    setNumberOfQuestions(numQuestions);
  }

  function handleSubmitQuiz() {
    setIsGameOver(true);
  }

  const score = correctAnswers.length;

  return (
    <div>
      {!isGameStarted && <StartGame onStart={handleStartQuiz} />}
      {isGameStarted && !isGameOver && (
        <Quiz
          numQuestions={numOfQuestions}
          onSelectAnswer={handleSelectAnswer}
          onSubmit={handleSubmitQuiz}
        />
      )}
      {isGameOver && <GameOver score={score} totalQuestions={numOfQuestions} />}
    </div>
  );
}

export default App;
